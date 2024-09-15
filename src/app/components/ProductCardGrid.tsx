import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ProductCardRow, { ProductCardRowProps } from "./ProductCardRow";

export interface ProductCardGridProps {
  product_rows: ProductCardRowProps[]
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ product_rows }) => {
  return (
    <MDBContainer fluid className="my-5 container px-4 px-lg-5 mt-5">
      {product_rows.map((row, index) => (
          <ProductCardRow key={index} {...row} />
      ))}
    </MDBContainer>
  );
};

export default ProductCardGrid;

