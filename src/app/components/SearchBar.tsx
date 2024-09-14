'use client';

import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Correct import path for CSS Module

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

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
        placeholder="Enter product URL, Keywords, or Image"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Go</button>
    </form>
  );
};

export default SearchBar;

