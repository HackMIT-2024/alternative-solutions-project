import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";


export interface ProductCardProps {
    imageSrc: string;
    brand: string;
    url: string;
    description: string;
    price: number;
    rating: number;
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
    <MDBCard>
        <div className="d-flex justify-content-between p-3">
        </div>
        <MDBCardImage
            src={imageSrc}
            position="top"
            alt={description}
        />
        <MDBCardBody>
            <div className="d-flex justify-content-between">
            <p className="small">
                <a href="#!" className="text-muted">
                {brand}
                </a>
            </p>
            </div>

            <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{description}</h5>
            <h5 className="text-dark mb-0">{price}</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
            <div className="ms-auto text-warning">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
            </div>
            </div>
        </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;
