"use client";

import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import ProductCardGrid from "./components/ProductCardGrid";
import LaunchTitle from "./components/LaunchTitle";
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
        <LaunchTitle />
        <SearchBar onSearch={handleSearch}></SearchBar>
        <ProductCardRow products={similarProducts} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
