// Modified from MD Bootstrap website
// https://mdbootstrap.com/docs/react/extended/product-cards/

import React, { useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useAction, useQuery } from "convex/react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { api } from "../../../convex/_generated/api";

import styles from "../_styles/ProductCard.module.css";

export interface ProductCardProps {
  name: string;
  productId: string;
  imageSrc: string;
  brand: string;
  url: string;
  description: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  productId,
  imageSrc,
  brand,
  url,
  description,
  price,
  rating,
}) => {
  const addToWishlist = useAction(api.users.upsertWishlist);
  const removeFromWishlist = useAction(api.users.removeWishlistItem);
  const { _id: userId, wishlist } = useQuery(api.users.current) || {
    _id: "",
    wishlist: [],
  };
  const pathname = usePathname();

  const handleAddToWishlist = async () => {
    await addToWishlist({ productId, userId });
  };

  const handleRemoveFromWishlist = async () => {
    await removeFromWishlist({ productId, userId });
  };

  const inWishlist = useCallback(
    () => wishlist.includes(productId),
    [wishlist, productId]
  );

  return (
    <MDBCard
      className={`${styles.product_card} d-flex flex-column ${styles.col} ${styles.mb_4}`}
    >
      <div
        className={`border border-5 border-white ${styles.card} ${styles.h_100}`}
      >
        <MDBCardImage
          src={imageSrc}
          position="top"
          alt={description}
          className={styles.product_card_image}
        />
        <MDBCardBody className={`flex-grow-1 d-flex flex-column ${styles.p_4}`}>
          <div className="d-flex justify-content-between">
            <p className="small text-muted">{brand}</p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5
              className={`${styles.align_left} mb-0 text-dark ${styles.four_lines}`}
            >
              {name}
            </h5>
            <div className={`${styles.align_right}`}>
              <h5 className="text-dark mb-0">${price}</h5>
              <h6 className="text-muted mb-0 small">{rating}/5 stars</h6>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-between mb-2">
            <div className="d-flex flex-row">
              {pathname !== "/wishlist" ? (
                inWishlist() ? (
                  <MDBCardText
                    className={`${styles.card_buttons_text} ms-1 text-center mb-0`}
                  >
                    ITEM IN WISHLIST
                  </MDBCardText>
                ) : (
                  <>
                    <SignedIn>
                      <MDBBtn
                        outline
                        size="sm"
                        color="secondary"
                        rippleColor="dark"
                        className={`${styles.card_buttons} ms-1`}
                        onClick={handleAddToWishlist}
                      >
                        ADD TO WISHLIST
                      </MDBBtn>
                    </SignedIn>
                    <SignedOut>
                      <MDBBtn
                        color="link"
                        className={`${styles.card_buttons} ms-1`}
                        tag="a"
                        href="https://sharing-insect-70.accounts.dev/sign-in"
                      >
                        SIGN IN FOR WISHLIST
                      </MDBBtn>
                    </SignedOut>
                  </>
                )
              ) : (
                <MDBBtn
                  outline
                  size="sm"
                  color="danger"
                  rippleColor="dark"
                  className={`${styles.card_buttons} ms-1`}
                  onClick={handleRemoveFromWishlist}
                >
                  Remove Item
                </MDBBtn>
              )}

              <MDBBtn
                color="light"
                className={`${styles.card_buttons} ms-2 px-1`}
                href={url}
                target="_blank"
              >
                view product
              </MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </div>
    </MDBCard>
  );
};

export default ProductCard;
