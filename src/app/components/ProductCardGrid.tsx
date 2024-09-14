import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ProductCardRow from "./ProductCardRow";

const ProductCardGrid: React.FC = () => {
  return (
    <MDBContainer fluid className="my-5">
      <ProductCardRow />
      <ProductCardRow />
      <ProductCardRow />
    </MDBContainer>
  );
};

export default ProductCardGrid;

