// Modified from MD Bootstrap website
// https://mdbootstrap.com/docs/react/extended/product-cards/

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from '../styles/ProductCard.module.css';

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
    <MDBCard className={`${styles.product_card} d-flex flex-column ${styles.col} ${styles.mb_4}`}>
        <div className={`border border-5 border-white ${styles.card} ${styles.h_100}`}>
        
        <MDBCardImage
            src={imageSrc}
            position="top"
            alt={description}
            className={ styles.product_card_image }
        />
        <MDBCardBody className={`flex-grow-1 d-flex flex-column ${styles.p_4} `}>
            <div className="d-flex justify-content-between">
            <p className="small text-muted">{brand}</p>
            </div>

            <div className="d-flex justify-content-between mb-3">
            <h5 className={`${styles.align_left} mb-0 text-dark ${styles.four_lines}`}>{description}</h5>
            <div className={`${styles.align_right}`}>
                <h5 className="text-dark mb-0">${price}</h5>
                <h6 className="text-muted mb-0 small">{rating}/5 stars</h6>
            </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex flex-row">
                    <MDBBtn size="sm" rippleColor="light" style={{ backgroundColor: '#344C11', color: '#fff' }} className="flex-fill ms-1">
                    add to wishlist
                    </MDBBtn>
                    <MDBBtn size="sm" style={{ backgroundColor: '#AEC09A', color: '#1A2902' }} className="flex-fill ms-2" href={url} target="_blank">
                    view product
                    </MDBBtn>
                </div>
            </div>
        </MDBCardBody>
        </div>
    </MDBCard>
  );
}

export default ProductCard;