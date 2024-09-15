import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const businesses = defineTable({
  url: v.string(),
  name: v.string(),
});

const products = defineTable({
  name: v.string(),
  brand: v.string(),
  imageSrc: v.string(),
  url: v.string(),
  description: v.string(),
  price: v.number(),
  rating: v.number(),
  businessId: v.id("businesses"),
  embedding: v.array(v.float64()),
}).vectorIndex("by_embedding", {
  vectorField: "embedding",
  dimensions: 1536,
});

const users = defineTable({
  name: v.string(),
  // this the Clerk ID, stored in the subject JWT field
  externalId: v.string(),
  isAdmin: v.boolean(),
}).index("byExternalId", ["externalId"]);

export default defineSchema({
  businesses,
  products,
  users,
});
