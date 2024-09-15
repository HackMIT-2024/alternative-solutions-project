"use client";

import styles from "./page.module.css";
import ProductCardGrid from "./components/ProductCardGrid";
import LaunchPage from "./components/LaunchPage";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function Home() {
  const [similarProducts, setSimilarProducts] = useState<unknown>([]);
  const findSimilarProducts = useAction(api.products.similarProducts);

  const handleSearch = async (query: string) => {
    setSimilarProducts(await findSimilarProducts({ descriptionQuery: query }));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <LaunchPage onSearch={handleSearch}></LaunchPage>
      <ProductCardGrid product_rows={similarProducts}/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
