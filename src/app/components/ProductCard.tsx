// Modified from MD Bootstrap website
// https://mdbootstrap.com/docs/react/extended/product-cards/

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";


export interface ProductCardProps {
    imageSrc: string;
    brand: string;
    url: string;
    description: string;
    price: string;
    rating: string;
  }

const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    brand,
    url,
    description,
    price,
    rating,
}) => {
  return (
    <MDBCard className="product-card d-flex flex-column">
        <div className="border border-5 border-white">
        
        <MDBCardImage
            src={imageSrc}
            position="top"
            alt={description}
            className="product-card-image"
        />
        <MDBCardBody className="product-card-body flex-grow-1 d-flex flex-column">
            <div className="d-flex justify-content-between">
            <p className="small">
                {brand}
            </p>
            </div>

            <div className="d-flex justify-content-between mb-3">
            <h5 className="align-left mb-0">{description}</h5>
            <div className="align-right">
                <h5 className="text-dark mb-0">${price}</h5>
                <h6 className="text-muted mb-0 small">{rating}/5 stars</h6>
            </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex flex-row">
                    <MDBBtn size="sm" color="primary" rippleColor="dark" className="flex-fill ms-1">
                    Add to wishlist
                    </MDBBtn>
                    <MDBBtn size="sm" color="secondary" className="flex-fill ms-2" href={url} target="_blank">
                    View product
                    </MDBBtn>
                </div>
            </div>
        </MDBCardBody>
        </div>
    </MDBCard>
  );
}

export default ProductCard;