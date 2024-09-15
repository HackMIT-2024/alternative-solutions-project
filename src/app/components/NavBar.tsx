import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import styles from "../styles/NavBar.module.css";

const NavBar = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <MDBNavbar fixed="top" style={{ backgroundColor: "#1A2902" }}>
          <MDBContainer fluid>
            <MDBNavbarBrand>
              <img
                src="https://images.vexels.com/media/users/3/156366/isolated/preview/cc1af2a2f074c755f73ee84b02af65fc-simple-leaves-icon-image.png"
                height="80"
                alt="Logo"
              />
            </MDBNavbarBrand>
            <SignedOut>
              <SignInButton>
                <button className={styles.button}>sign in</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div style={{ paddingTop: "10px", marginRight: "25px" }}>
                <UserButton />
              </div>
            </SignedIn>
          </MDBContainer>
        </MDBNavbar>
      )}
    </>
  );
};

export default NavBar;
