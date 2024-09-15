import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const businesses = defineTable({
  url: v.string(),
  name: v.string(),
});

const products = defineTable({
  description: v.string(),
  name: v.string(),
  businessId: v.id("businesses"),
  url: v.string(),
});

const users = defineTable({
  name: v.string(),
  // this the Clerk ID, stored in the subject JWT field
  externalId: v.string(),
}).index("byExternalId", ["externalId"]);

export default defineSchema({
  businesses,
  products,
  users,
});
