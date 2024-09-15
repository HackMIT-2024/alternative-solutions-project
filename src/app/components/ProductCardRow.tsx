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
          <MDBCol key={index} md="6" lg="3" className="mb-4 mb-lg-0">
            <ProductCard {...product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

/*
        <MDBRow>
            <MDBCol md="6" lg="3" className="mb-4 mb-lg-0">
              <ProductCard imageSrc="https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg"
                          brand="Brand 1"
                          url="https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ"
                          description="Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters"
                          price={32.99}
                          rating={4.3}
              />
            </MDBCol>
            <MDBCol md="6" lg="3" className="mb-4 mb-lg-0">
              <ProductCard imageSrc="https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg"
                          brand="Brand 2"
                          url="https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ"
                          description="Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters"
                          price={32.99}
                          rating={4.3}
              />
            </MDBCol>
            <MDBCol md="6" lg="3" className="mb-4 mb-lg-0">
              <ProductCard imageSrc="https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg"
                          brand="Brand 3"
                          url="https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ"
                          description="Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters"
                          price={32.99}
                          rating={4.3}
              />
            </MDBCol>
            <MDBCol md="6" lg="3" className="mb-4 mb-lg-0">
              <ProductCard imageSrc="https://m.media-amazon.com/images/I/61kgG2hAusL._AC_UF894,1000_QL80_.jpg"
                          brand="Brand 4"
                          url="https://www.amazon.com/Kettle-Stovetop-Whistling-Teakettle-Stainless/dp/B07DFF5WPQ"
                          description="Tea Kettle Stovetop Whistling Teakettle ClassicTeapot Stainless Steel Tea Pots for Stove Top with Heat-resistant Folding Handle Mirror Finish, 2 liters"
                          price={32.99}
                          rating={4.3}
              />
            </MDBCol>
        </MDBRow>
  );
};
*/

export default ProductCardRow;