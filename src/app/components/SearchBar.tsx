"use client";

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";

const SearchBar = ({ setProducts }) => {
  const findSimilarProducts = useAction(api.products.similarProducts);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProducts(await findSimilarProducts({ descriptionQuery: query }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter product keywords"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Go
      </button>
    </form>
  );
};

export default SearchBar;
