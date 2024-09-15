import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LaunchTitle from './LaunchTitle';
import SearchBar from './SearchBar';
// import styles from '../styles/Module.module.css'; 

const LaunchPage = ({ handleSearch }) => {
    return (
        <>
        <MDBRow><br></br></MDBRow>
        <MDBRow>
        <MDBCol md='8'>
        <LaunchTitle/>
        <SearchBar onSearch={ handleSearch } ></SearchBar>
        </MDBCol>
        <MDBCol md='4'>
        </MDBCol>
        </MDBRow>
        </>
      );
}

export default LaunchPage