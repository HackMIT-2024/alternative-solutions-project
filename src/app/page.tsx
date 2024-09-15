'use client';

import Image from "next/image";
// import { useUser } from "@clerk/nextjs";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar"
import LaunchTitle from "./components/LaunchTitle";

export default function Home() {
  const handleSearch = (query: unknown) => {
    console.log('Search:', query);
    // Implement search logic here
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <LaunchTitle/>
      <SearchBar onSearch={ handleSearch } ></SearchBar>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
