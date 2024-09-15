"use client";

import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

library.add(faSearch)

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="enter product keywords"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </form>
  );
};

export default SearchBar;
