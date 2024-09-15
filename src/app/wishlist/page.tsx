"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import SearchBar from "../components/SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useQuery, useAction } from "convex/react";
import { api, internal } from "../../../convex/_generated/api";
import ProductCardGrid from "../components/ProductCardGrid";
import styles from "src/app/styles/SearchBar.module.css";
import { ProductCardProps } from "../components/ProductCard"


library.add(faPagelines, faCartShopping);

export default function Home() {
  const [wishListProducts, setWishListProducts] = useState<unknown>([]);
  const {wishlist} = useQuery(api.users.current) || { wishlist: [] };
  const products = useAction(api.products.fetchProductsFromWishlist) || Array<ProductCardProps>;

  const fetchProducts = useCallback(async () => {
    setWishListProducts(await products({wishlist}));
  }, [products, wishlist])
 
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const create2dArray = () => {
    const products2d = [];
    const columns = 4;

    console.log(wishlist, wishListProducts)
    for (let i = 0; i < wishListProducts.length; i += columns) {
      const chunk = wishListProducts.slice(i, i + columns);
      products2d.push(chunk);
    }

    return products2d;
  }
  
  return (
    <>
      <MDBRow style={{ marginTop: "20px" }}>
        <MDBCol md="8">
          <br />
          <p>items section</p>
          
          <ProductCardGrid product_rows={create2dArray()} />
        </MDBCol>
        <MDBCol md="4">
          <p>Order overview section</p>
        </MDBCol>
      </MDBRow>
    </>
  );
};