import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdb-react-ui-kit";
import ProductCard, { ProductCardProps } from "./ProductCard";

export interface ProductCardRowProps {
  products: ProductCardProps[]
}

const ProductCardRow: React.FC<ProductCardRowProps> = ({ products }) => {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="product-card-grid">
        {products.map((product, index) => (
          <MDBCol key={index} md="6" lg="3" className="mb-4 mb-lg-0 col">
            <ProductCard {...product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ProductCardRow;