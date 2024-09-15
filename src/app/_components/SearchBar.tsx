"use client";

import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";

import styles from "../_styles/SearchBar.module.css";

library.add(faSearch);

const SearchBar = ({ setProducts }) => {
  const findSimilarProducts = useAction(api.products.similarProducts);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const similarProducts = await findSimilarProducts({
      descriptionQuery: query,
    });

    const similarProducts2d = [];
    const columns = 4;
    for (let i = 0; i < similarProducts.length; i += columns) {
      const chunk = similarProducts.slice(i, i + columns);
      similarProducts2d.push(chunk);
    }
    setProducts(similarProducts2d);
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
      <button type="submit" className={styles.button} onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </form>
  );
};

export default SearchBar;
