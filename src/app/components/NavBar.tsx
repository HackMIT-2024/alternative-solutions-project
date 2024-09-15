import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import "./NavBar.module.css";

const NavBar = (isLoading) => {
  return (
    <>
      {isLoading && (
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand>Brand</MDBNavbarBrand>
            <MDBNavbarNav>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      )}
    </>
  );
};

export default NavBar;
