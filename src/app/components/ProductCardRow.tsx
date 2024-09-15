import React from "react";
import {
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import ProductCard, { ProductCardProps } from "./ProductCard";

export interface ProductCardRowProps {
  products: ProductCardProps[]
}

const ProductCardRow: React.FC<ProductCardRowProps> = ({ products }) => {
  return (
    <MDBRow className="product-card-grid row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.map((product, index) => (
        <MDBCol key={index} md="6" lg="3" className="mb-4 mb-lg-0 col">
          <ProductCard {...product} />
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default ProductCardRow;