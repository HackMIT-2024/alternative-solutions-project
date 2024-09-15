import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const [letterSpacing, setLetterSpacing] = useState("3px");
  const [opacity, setOpacity] = useState(1);

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
      <MDBNavbar fixed='top' style={{backgroundColor: "#1A2902"}}>
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
            <SignInButton><button className={styles.button}>sign in</button></SignInButton>
            </SignedOut>
            <SignedIn>
            <div style={{ paddingTop: "10px", marginRight:"25px"}}><UserButton/></div>
            </SignedIn>
      </MDBContainer>
      </MDBNavbar>
  );
}

export default NavBar;