"use client";

import React, { useState, useRef } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import ProductCardGrid from "./_components/ProductCardGrid";
import LaunchPage from "./_components/LaunchPage";
import { isUserLoaded } from "./_hooks/isUserLoaded";
import BrandForm from "./_components/admin/BrandForm";
import ProductForm from "./_components/admin/ProductForm";
import { ProductCardRowProps } from "./_components/ProductCardRow";

import styles from "./page.module.css";

export default function Home() {
  const isLoading = isUserLoaded();
  const { isAdmin } = useQuery(api.users.current) || { isAdmin: false };
  const [products, setProducts] = useState<ProductCardRowProps[]>([]);
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
              setProducts={setProducts}
              handleScroll={handleScroll}
            ></LaunchPage>
            <ProductCardGrid product_rows={products} />
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
