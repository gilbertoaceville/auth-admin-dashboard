"use client";

import { MdSearch } from 'react-icons/md';
import styles from "./styles.module.scss";

export default function Search({ placeholder }) {

  function handleSearch(e) {
    console.log(e.target.value);
  }
  return (
    <div className={styles.wrapper}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}
