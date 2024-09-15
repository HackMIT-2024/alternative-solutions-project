'use client';

import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import ProductCardGrid from "./components/ProductCardGrid";
import LaunchTitle from "./components/LaunchTitle";

export default function Home() {
  const handleSearch = (query: unknown) => {
    console.log('Search:', query);
    // Implement search logic here
  };
  const products = [
    {
      imageSrc: "https://images.grove.co/upload/f_auto,fl_progressive,ar_1:1,c_pad,b_white,dpr_auto,w_1300/v1638797905/afsekia8yhl4bijhlzmh.jpg",
      brand: "Grove",
      url: "https://www.grove.co/catalog/product/organic-pump-soap/?v=788&attrpg=catalog&attrsrc=22&attrpos=2",
      description: "Organic Sugar Soap",
      price: "11.99",
      rating: "4.6"
    },
    {
      imageSrc: "https://earthhero.com/cdn/shop/products/Meliora-FoamingHandSoapTablet-Lavender-1.jpg?v=1694186839&width=810",
      brand: "Earth Hero",
      url: "https://earthhero.com/collections/all/products/foaming-hand-soap-tablets?selling_plan=5133664492",
      description: "Foaming Hand Soap Tablets",
      price: "9.34",
      rating: "4.9"
    },
    {
      imageSrc: "https://images.grove.co/upload/f_auto,fl_progressive,ar_1:1,c_pad,b_white,dpr_auto,w_1300/v1695319656/lgmmywi3rfnfekxublso.jpg",
      brand: "Grove",
      url: "https://www.grove.co/catalog/product/mrs-meyers-hand-soap/?v=3579&attrpg=catalog&attrsrc=22&attrpos=5",
      description: "Hand Soap",
      price: "4.99",
      rating: "4.6"
    },
    {
      imageSrc: "https://www.shopetee.com/cdn/shop/files/7fc189732e042c02531ad8ba7f6145bf_1100x.jpg?v=1713195317",
      brand: "Etee",
      url: "https://www.shopetee.com/collections/hand-soap/products/foaming-hand-soap-concentrate",
      description: "Lavender Lime Foaming Hand Soap Concentrate",
      price: "16.80",
      rating: "4.5"
    }
  ];

  const product_rows = [ { products }, { products }];
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <LaunchTitle/>
      <SearchBar onSearch={ handleSearch } ></SearchBar>

      <ProductCardGrid product_rows={product_rows}/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
