"use client";

import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import styles from "../styles/NavBar.module.css";
import WishlistButton from "./WishlistButton";

const NavBar = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <MDBNavbar fixed="top" className={styles.navbar}>
          <MDBContainer fluid>
            <MDBNavbarBrand>
              <img
                src="https://images.vexels.com/media/users/3/156366/isolated/preview/cc1af2a2f074c755f73ee84b02af65fc-simple-leaves-icon-image.png"
                height="60"
                alt="Logo"
              />
            </MDBNavbarBrand>
            <SignedOut>
              <SignInButton>
                <button className={styles.button}>sign in</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className={styles.user_buttons}>
                <WishlistButton />
                <UserButton />
              </div>
            </SignedIn>
          </MDBContainer>
        </MDBNavbar>
      )}
    </div>
  );
};

export default NavBar;
