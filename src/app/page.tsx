"use client";

import styles from "./page.module.css";
import styles2 from "../styles/SearchBar.module.css";
import ProductCardGrid from "./components/ProductCardGrid";
import LaunchPage from "./components/LaunchPage";
import { useState, useRef } from "react";
import { isUserLoaded } from "./hooks/isUserLoaded";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import BrandForm from "./components/admin/BrandForm";
import ProductForm from "./components/admin/ProductForm";

export default function Home() {
  const [similarProducts, setSimilarProducts] = useState<unknown>([]);
  const isLoading = isUserLoaded();
  const { isAdmin } = useQuery(api.users.current) || { isAdmin: false };
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {isLoading ? (
          <>...Loading</>
        ) : (
          <>
            {isAdmin && (
              <>
                <BrandForm />
                <ProductForm />
              </>
            )}
            <LaunchPage
              setProducts={setSimilarProducts}
              handleScroll={handleScroll}
            ></LaunchPage>
            <ProductCardGrid product_rows={similarProducts} />
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
