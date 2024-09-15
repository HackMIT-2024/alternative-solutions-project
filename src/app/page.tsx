'use client';

import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import ProductCardRow from "./components/ProductCardRow";
import LaunchTitle from "./components/LaunchTitle";

export default function Home() {
  const handleSearch = (query: unknown) => {
    console.log('Search:', query);
    // Implement search logic here
  };
  const products = [
    {
      imageSrc: "https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg",
      brand: "Brand 1",
      url: "https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ",
      description: "Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters",
      price: 32.99,
      rating: 4.3
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg",
      brand: "Brand 2",
      url: "https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ",
      description: "Description 2",
      price: 32.99,
      rating: 4.3
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg",
      brand: "Brand 3",
      url: "https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ",
      description: "Description 3",
      price: 32.99,
      rating: 4.3
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg",
      brand: "Brand 4",
      url: "https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ",
      description: "Description 4",
      price: 32.99,
      rating: 4.3
    }
  ];
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <LaunchTitle/>
      <SearchBar onSearch={ handleSearch } ></SearchBar>

      <ProductCardRow products={products}/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
