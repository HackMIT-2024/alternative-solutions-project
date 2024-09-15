import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import LaunchTitle from "./LaunchTitle";
import SearchBar from "./SearchBar";

import styles from "../_styles/Module.module.css";

library.add(faPagelines, faCartShopping);

const LaunchPage = ({ setProducts, handleScroll }) => {
  return (
    <>
      <MDBRow style={{ marginTop: "20px" }}>
        <MDBCol md="8">
          <LaunchTitle />
          <br />
          <SearchBar setProducts={setProducts} handleScroll={handleScroll} />
        </MDBCol>
        <MDBCol md="4">
          <FontAwesomeIcon
            icon={faPagelines}
            className={styles.bounceHover}
            style={{
              color: "#1c2c04",
              fontSize: "300px",
              paddingLeft: "60px",
              paddingBottom: "25px",
            }}
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#1c2c04", fontSize: "250px" }}
          />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default LaunchPage;
