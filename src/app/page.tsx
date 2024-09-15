"use client";

import React, { useState } from "react";
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
            <section className={styles.launchSection}>
                <LaunchPage setProducts={setProducts} />
            </section>
            <section className={styles.gridSection}>
              <ProductCardGrid product_rows={products}/>
            </section>
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
