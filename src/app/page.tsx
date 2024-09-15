"use client";

import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import ProductCardRow from "./components/ProductCardRow";
import LaunchTitle from "./components/LaunchTitle";
import { useState } from "react";
import { isUserLoaded } from "./hooks/isUserLoaded";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import BrandForm from "./components/admin/BrandForm";
import ProductForm from "./components/admin/ProductForm";

export default function Home() {
  const [similarProducts, setSimilarProducts] = useState<unknown>([]);
  const isLoading = isUserLoaded();
  const { isAdmin } = useQuery(api.users.current) || { isAdmin: false };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {isLoading ? (
          <>...Loading</>
        ) : (
          <>
            <LaunchTitle />
            {isAdmin && (
              <>
                <BrandForm />
                <ProductForm />
              </>
            )}
            <SearchBar setProducts={setSimilarProducts}></SearchBar>
            <ProductCardRow products={similarProducts} />
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
