import { v } from "convex/values";
import { action, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { Doc } from "./_generated/dataModel";

export const fetchResults = internalQuery({
    args: { ids: v.array(v.id("products")) },
    handler: async (ctx, args) => {
      const results = [];
      for (const id of args.ids) {
        const doc = await ctx.db.get(id);
        if (doc === null) {
          continue;
        }
        results.push(doc);
      }
      return results;
    },
  });

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
      limit: 16
    });
    // ...
    const foods: Array<Doc<"products">> = await ctx.runQuery(
        internal.products.fetchResults,
        { ids: results.map((result) => result._id) },
      );
      return foods;
  },
});