import React from "react";
import {
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import ProductCard, { ProductCardProps } from "./ProductCard";
import styles from '../styles/ProductCard.module.css';

export interface ProductCardRowProps {
  products: ProductCardProps[];
}

const ProductCardRow: React.FC<ProductCardRowProps> = ({ products }) => {
  console.log(products);
  return (
    <MDBRow className={`product-card-grid ${styles.row} ${styles.gx_4} ${styles.gx_lg_5} ${styles.row_cols_2} ${styles.row_cols_md_3} ${styles.row_cols_xl_4} ${styles.justify_content_center}`}>
    {products.length ? (
        products.map((product, index) => (
          <MDBCol key={index} md="6" lg="3" className="mb-4 mb-lg-0">
            <ProductCard {...product} />
          </MDBCol>
        ))
      ) : (
        <></>
      )}
    </MDBRow>
  );
};

export default ProductCardRow;
