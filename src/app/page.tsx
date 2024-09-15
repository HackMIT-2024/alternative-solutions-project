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
      imageSrc: "https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg",
      brand: "Brand 1",
      url: "https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ",
      description: "Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters",
      price: 32.99,
      rating: 4.3
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/81eFW5hz6cL._AC_UL640_FMwebp_QL65_.jpg",
      brand: "Brand 2",
      url: "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2OTIyNTAwMzc4NjIyNTE6MTcyNjM2MTIzMDpzcF9hdGY6MzAwMDk1MDUwMjg2OTAyOjowOjo&url=%2FCOMFEE-Electric-Cordless-Indicator-Protection%2Fdp%2FB0BCK48DXY%2Fref%3Dsr_1_3_sspa%3Fcrid%3D3DKBUNA6QASG9%26dib%3DeyJ2IjoiMSJ9.o51Mm0hvjCXRcaQuTUziaauUoZ8QFcThrjeYC1xUn1-pOROtHfeZlBTruGBX_H72PoPq-l6oiOWM59dXTPeczbqSGgsq5Tiic6TeFo1gtO0mwK5JFiSNCqJXPuf1tntjyi36BnFr6K7HWMvUnyrru9EKbR4AczFiumdul5AO79OQ8a_3WJ3an77qU5cEO-7l1V1AJYHbru5hSg-VG_oQN7-Rllc7dWu-tFJ2ELOurNuZNEBykPzfAn8dy_lgaEWXkXXN-L0QsF_HUfv7uliHXLWWplXUo6z-OT6p5gLbQ80.C3js6UMA6o-DH_oViwOkyhnST1B31q391e9pn5xCfaE%26dib_tag%3Dse%26keywords%3Dkettle%26qid%3D1726361230%26s%3Dhome-garden%26sprefix%3Dkettl%252Cgarden%252C122%26sr%3D1-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
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
