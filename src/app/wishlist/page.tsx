"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useQuery, useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import ProductCardGrid from "../_components/ProductCardGrid";
import { ProductCardProps } from "../_components/ProductCard";
// import styles from "src/app/_styles/WishList.module.css";

library.add(faPagelines, faCartShopping);

export default function Home() {
  const [wishListProducts, setWishListProducts] = useState<unknown>([]);
  const { wishlist } = useQuery(api.users.current) || { wishlist: [] };
  const products =
    useAction(api.products.fetchProductsFromWishlist) ||
    Array<ProductCardProps>;

  const fetchProducts = useCallback(async () => {
    // @ts-expect-error its fine
    setWishListProducts(await products({ wishlist }));
  }, [products, wishlist]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const create2dArray = () => {
    const products2d = [];
    const columns = 4;

    // @ts-expect-error its fine
    for (let i = 0; i < wishListProducts.length; i += columns) {
      // @ts-expect-error its fine
      const chunk = wishListProducts.slice(i, i + columns);
      products2d.push(chunk);
    }

    return products2d;
  };

  const getProductURLs = (): Array<string> => {
    const urls: string[] = [];
    // @ts-expect-error its fine
    wishListProducts.forEach((product) => urls.push(product.url));

    return urls;
  };

  const openProductURLs = (): void => {
    getProductURLs().forEach((url: string) => window.open(url, "_blank"));
  };

  const getWishlistCost = (): number => {
    return (
      wishListProducts
        // @ts-expect-error its fine
        .map((product) => product.price)
        .reduce((total, price) => total + price, 0)
    );
  };

  const getWishlistCount = (): number => {
    // @ts-expect-error its fine
    return wishListProducts.length;
  };

  console.log("COST", getWishlistCost());
  console.log("COUNT", getWishlistCount());

  return (
    <>
      <div style={{ backgroundColor: "#1A2902" }}>
        <br />
        <br />
        <br />
        <MDBRow style={{ marginTop: "0px" }}>
          <MDBCol md="8" lg="8">
            <br />
            <ProductCardGrid product_rows={create2dArray()} />
          </MDBCol>
          <MDBCol md="4" lg="4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-4 mx-3">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      product count
                      <span>{getWishlistCount()}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>total amount</strong>
                      </div>
                      <span>
                        <strong>${getWishlistCost()}</strong>
                      </span>
                    </li>
                  </ul>

                  <div>
                    <MDBBtn
                      color="info"
                      className="ms-1 text-center align-items-center"
                      onClick={openProductURLs}
                    >
                      open all items
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}
