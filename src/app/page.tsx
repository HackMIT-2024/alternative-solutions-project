"use client";

import styles from "./page.module.css";
import styles2 from '../styles/SearchBar.module.css'
import ProductCardGrid from "./components/ProductCardGrid";
import LaunchPage from "./components/LaunchPage";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState, useRef } from "react";

export default function Home() {
  const [similarProducts, setSimilarProducts] = useState<unknown>([]);
  const findSimilarProducts = useAction(api.products.similarProducts);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (query: string) => {
    const similarProducts = await findSimilarProducts({ descriptionQuery: query });
    const similarProducts2d = [];
    const columns = 4;
    for (let i = 0; i < similarProducts.length; i += columns) {
      const chunk = similarProducts.slice(i, i + columns);
      similarProducts2d.push(chunk);
    }
    setSimilarProducts(similarProducts2d);
  };
  
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 1000, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <LaunchPage handleSearch={handleSearch} handleScroll={handleScroll}></LaunchPage>
      <ProductCardGrid product_rows={similarProducts}/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
