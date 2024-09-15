"use client";

import React from "react";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";

import WishlistButton from "./WishlistButton";
import styles from "../_styles/NavBar.module.css";
import { isUserLoaded } from "../_hooks/isUserLoaded";

const NavBar = () => {
  const isLoading = isUserLoaded();

  return (
    <div>
      {!isLoading && (
        <MDBNavbar fixed="top" className={styles.navbar}>
          <MDBContainer fluid>
            <MDBNavbarBrand>
              <a href="/">
              <img
                src="https://images.vexels.com/media/users/3/156366/isolated/preview/cc1af2a2f074c755f73ee84b02af65fc-simple-leaves-icon-image.png"
                height="60"
                alt="Logo"
              />
              </a>
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
