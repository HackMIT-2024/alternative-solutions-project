import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs';
import '../styles/NavBar.module.css'

const NavBar = () => {
  return (
      <MDBNavbar fixed='top' style={{backgroundColor: "#1A2902"}}>
      <MDBContainer fluid>
      <MDBNavbarBrand>
        <img
            src="https://images.vexels.com/media/users/3/156366/isolated/preview/cc1af2a2f074c755f73ee84b02af65fc-simple-leaves-icon-image.png"
            height="80"
            alt="Logo"
        />
      </MDBNavbarBrand>
            <SignedOut>
            <SignInButton/>
            </SignedOut>
            <SignedIn>
            <UserButton/>
            </SignedIn>
      </MDBContainer>
      </MDBNavbar>
  );
}

export default NavBar;