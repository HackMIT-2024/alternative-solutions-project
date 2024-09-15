import {
  action,
  internalMutation,
  internalQuery,
  query,
  QueryCtx,
} from "./_generated/server";
import { UserJSON } from "@clerk/backend";
import { v, Validator } from "convex/values";
import { internal } from "./_generated/api";

export const current = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx);
  },
});

export const upsertFromClerk = internalMutation({
  args: { data: v.any() as Validator<UserJSON> }, // no runtime validation, trust Clerk
  async handler(ctx, { data }) {
    const userAttributes = {
      name: `${data.first_name} ${data.last_name}`,
      isAdmin: false,
      wishlist: [],
      externalId: data.id,
    };

    const user = await userByExternalId(ctx, data.id);
    if (user === null) {
      await ctx.db.insert("users", userAttributes);
    } else {
      await ctx.db.patch(user._id, userAttributes);
    }
  },
});

export const deleteFromClerk = internalMutation({
  args: { clerkUserId: v.string() },
  async handler(ctx, { clerkUserId }) {
    const user = await userByExternalId(ctx, clerkUserId);

    if (user !== null) {
      await ctx.db.delete(user._id);
    } else {
      console.warn(
        `Can't delete user, there is none for Clerk user ID: ${clerkUserId}`
      );
    }
  },
});

export async function getCurrentUserOrThrow(ctx: QueryCtx) {
  const userRecord = await getCurrentUser(ctx);
  if (!userRecord) throw new Error("Can't get current user");
  return userRecord;
}

export async function getCurrentUser(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (identity === null) {
    return null;
  }
  return await userByExternalId(ctx, identity.subject);
}

async function userByExternalId(ctx: QueryCtx, externalId: string) {
  return await ctx.db
    .query("users")
    .withIndex("byExternalId", (q) => q.eq("externalId", externalId))
    .unique();
}

export const getWishList = internalQuery({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return (
      await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("_id"), userId))
        .unique()
    )?.wishlist;
  },
});

export const updateWishlist = internalMutation({
  args: {
    userId: v.id("users"),
    wishlist: v.array(v.id("products")),
  },
  handler: async (ctx, { userId, wishlist }) => {
    await ctx.db.patch(userId, { wishlist: wishlist });
  },
});

export const upsertWishlist = action({
  args: {
    userId: v.id("users"),
    productId: v.id("products"),
  },
  handler: async (ctx, { userId, productId }) => {
    let wishlist = await ctx.runQuery(internal.users.getWishList, { userId });

    wishlist?.push(productId);

    await ctx.runMutation(internal.users.updateWishlist, {
      userId,
      wishlist,
    });
  },
});
