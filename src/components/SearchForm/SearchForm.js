import { useState } from "react";

import styles from "./SearchForm.module.css";

const SearchForm = ({ borderVisible }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (evt) => {
    setSearchInput(evt.target.value);
  };

  return (
    <form className={styles.form}>
      <div
        className={`${styles.formGroup} ${
          borderVisible ? styles.borderVisible : ""
        }`}
      >
        <span className={`material-symbols-outlined ${styles.searchIcon}`}>
          search
        </span>
        <input
          type="text"
          placeholder="Search items, collections, and accounts"
          value={searchInput}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        {searchInput && (
          <span className={`material-symbols-outlined ${styles.closeIcon}`}>
            close
          </span>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
