"use client";

import React, {useState, useEffect} from "react";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";

import WishlistButton from "./WishlistButton";
import styles from "../_styles/NavBar.module.css";
import { isUserLoaded } from "../_hooks/isUserLoaded";

const NavBar = () => {
  const isLoading = isUserLoaded();
  const [letterSpacing, setLetterSpacing] = useState("3px");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 600;
      const newLetterSpacing = Math.max(3, 7 - scrollPosition / 100) + "px";
      const newOpacity = Math.min(1, scrollPosition / maxScroll); // Opacity ranges from 0 to 1

      setLetterSpacing(newLetterSpacing);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {!isLoading && (
        <MDBNavbar fixed="top" className={styles.navbar}>
          <MDBContainer fluid>
          <MDBNavbarBrand
            style={{
              color: "#AEC09A",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
              letterSpacing: letterSpacing,
              opacity: opacity,
              transition: "letter-spacing 0.2s ease, opacity 0.2s ease"
            }}>
            sustain.
          </MDBNavbarBrand>
            <SignedOut>
              <SignInButton>
                <button className={styles.button}>sign in</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className={styles.user_buttons}>
                <WishlistButton/>
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
