"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import styles from "./BrandForm.module.css";

const BrandForm = () => {
  const createBusiness = useMutation(api.businesses.insertBusinesses);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createBusiness({ name, url });

    setName("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter Brand Name"
        className={styles.input}
      />
      <input
        type="text"
        value={url}
        onChange={handleUrl}
        placeholder="Enter Brand URL"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Go
      </button>
    </form>
  );
};

export default BrandForm;
