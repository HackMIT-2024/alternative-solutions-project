import { v } from "convex/values";
import { action, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { ProductCardProps } from "@/app/components/ProductCard";

export async function embed(text: string): Promise<number[]> {
  const key = process.env.OPENAI_KEY;
  if (!key) {
    throw new Error("OPENAI_KEY environment variable not set!");
  }
  const req = { input: text, model: "text-embedding-3-small" };
  const resp = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(req),
  });
  if (!resp.ok) {
    const msg = await resp.text();
    throw new Error(`OpenAI API error: ${msg}`);
  }
  const json = await resp.json();
  const vector = json["data"][0]["embedding"];
  console.log(`Computed embedding of "${text}": ${vector.length} dimensions`);
  return vector;
}

export const fetchResults = internalQuery({
  args: { ids: v.array(v.id("products")) },
  handler: async (ctx, args) => {
    const results = [];
    for (const id of args.ids) {
      const doc = await ctx.db.get(id);
      if (doc === null) {
        continue;
      }

      const product: ProductCardProps = {
        imageSrc: doc.imageSrc,
        brand: doc.brand,
        url: doc.url,
        description: doc.description,
        price: doc.price,
        rating: doc.rating,
      };
      results.push(product);
    }

    return results;
  },
});

export const insertProduct = internalMutation({
  args: {
    name: v.string(),
    brand: v.string(),
    imageSrc: v.string(),
    url: v.string(),
    description: v.string(),
    price: v.number(),
    rating: v.number(),
    businessId: v.id("businesses"),
    embedding: v.array(v.float64()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("products", args);
  },
});

export const populateProduct = action({
  args: {
    name: v.string(),
    brand: v.string(),
    imageSrc: v.string(),
    url: v.string(),
    description: v.string(),
    price: v.number(),
    rating: v.number(),
  },
  handler: async (ctx, args) => {
    const embedding = await embed(args.description);

    const { _id: businessId } = await ctx.runQuery(
      internal.businesses.getBusinessByName,
      { businessName: args.brand }
    );

    await ctx.runMutation(internal.products.insertProduct, {
      ...args,
      businessId,
      embedding,
    });
  },
});

export const similarProducts = action({
  args: {
    descriptionQuery: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Generate an embedding from your favorite third party API:
    const embedding = await embed(args.descriptionQuery);
    // 2. Then search for similar foods!
    const results = await ctx.vectorSearch("products", "by_embedding", {
      vector: embedding,
      limit: 16,
    });
    // ...
    const products: Array<ProductCardProps> = await ctx.runQuery(
      internal.products.fetchResults,
      { ids: results.map((result) => result._id) }
    );
    return products;
  },
});
