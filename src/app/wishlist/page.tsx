"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useQuery, useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import ProductCardGrid from "../_components/ProductCardGrid";
import { ProductCardProps } from "../_components/ProductCard";

library.add(faPagelines, faCartShopping);

export default function Home() {
  const [wishListProducts, setWishListProducts] = useState<unknown>([]);
  const { wishlist } = useQuery(api.users.current) || { wishlist: [] };
  const products =
    useAction(api.products.fetchProductsFromWishlist) ||
    Array<ProductCardProps>;

  const fetchProducts = useCallback(async () => {
    setWishListProducts(await products({ wishlist }));
  }, [products, wishlist]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const create2dArray = () => {
    const products2d = [];
    const columns = 4;

    for (let i = 0; i < wishListProducts.length; i += columns) {
      const chunk = wishListProducts.slice(i, i + columns);
      products2d.push(chunk);
    }

    return products2d;
  };

  const getProductURLs = (): Array<string> => {
    const urls: string[] = [];
    wishListProducts.forEach((product) => urls.push(product.url));

    return urls;
  };

  const openProductURLs = (): void => {
    getProductURLs().forEach((url: string) => window.open(url, "_blank"));
  };

  const getWishlistCost = (): number => {
    return wishListProducts
      .map((product) => product.price)
      .reduce(([total, count], price) => [total + price, count + 1], [0, 0]);
  };

  console.log("COST", getWishlistCost());

  return (
    <>
      <MDBRow style={{ marginTop: "20px" }}>
        <MDBCol md="8">
          <br />
          <ProductCardGrid product_rows={create2dArray()} />
        </MDBCol>
        <MDBCol md="4">
          <MDBContainer fluid className="my-5">
            <br />
            <br />
            <MDBBtn
              size="lg"
              color="primary"
              rippleColor="dark"
              className="ms-1"
              onClick={openProductURLs}
            >
              CLICK TO OPEN ALL ITEMS
            </MDBBtn>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </>
  );
}
