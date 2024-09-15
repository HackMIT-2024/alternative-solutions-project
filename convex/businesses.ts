import { v } from "convex/values";
import { internalQuery, mutation } from "./_generated/server";

export const getBusinessByName = internalQuery({
  args: { businessName: v.string() },
  handler: async (ctx, { businessName }) => {
    return await ctx.db
      .query("businesses")
      .filter((q) => q.eq(q.field("name"), businessName))
      .unique();
  },
});

export const insertBusinesses = mutation({
  args: {
    name: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("businesses", args);
  },
});
