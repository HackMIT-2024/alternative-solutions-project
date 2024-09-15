import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import ProductCardRow, { ProductCardRowProps } from "./ProductCardRow";

import styles from "../_styles/ProductCard.module.css";

export interface ProductCardGridProps {
  product_rows: ProductCardRowProps[];
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ product_rows }) => {
  console.log("product_rows", product_rows)
  return (
    <MDBContainer
      fluid
      className={`my-5 ${styles.container} ${styles.px_4} ${styles.px_lg_5} ${styles.mt_5}`}
    >
      {product_rows.map((row, index) => (
        <ProductCardRow key={index} products={row} />
      ))}
    </MDBContainer>
  );
};

export default ProductCardGrid;
