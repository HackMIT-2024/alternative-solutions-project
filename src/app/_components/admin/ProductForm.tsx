"use client";

import React, { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import styles from "./ProductForm.module.css";

const ProductForm = () => {
  const populateProduct = useAction(api.products.populateProduct);
  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [brand, setBrand] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    setImageSrc(event.target.value);
  };

  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(parseFloat(event.target.value));
  };

  const handleRating = (event) => {
    setRating(parseFloat(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await populateProduct({
      name,
      imageSrc,
      brand,
      url,
      description,
      price,
      rating,
    });

    setName("");
    setImageSrc("");
    setBrand("");
    setUrl("");
    setDescription("");
    setPrice(0);
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter Product Name"
        className={styles.input}
      />
      <input
        type="text"
        value={imageSrc}
        onChange={handleImage}
        placeholder="Enter Product Image URL"
        className={styles.input}
      />
      <input
        type="text"
        value={brand}
        onChange={handleBrand}
        placeholder="Enter Brand Name"
        className={styles.input}
      />
      <input
        type="text"
        value={url}
        onChange={handleUrl}
        placeholder="Enter Product URL"
        className={styles.input}
      />
      <input
        type="text"
        value={description}
        onChange={handleDescription}
        placeholder="Enter Product Description"
        className={styles.input}
      />
      <input
        type="number"
        value={price}
        onChange={handlePrice}
        placeholder="Enter Product Price"
        className={styles.input}
      />
      <input
        type="number"
        value={rating}
        onChange={handleRating}
        placeholder="Enter Product Rating"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Go
      </button>
    </form>
  );
};

export default ProductForm;
