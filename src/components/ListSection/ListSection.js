import React from "react";
import styles from "./ListSection.module.css"; // CSS Modulesの読み込み

const ListSection = ({ productList }) => {
  return (
    <div className={styles["list-section-container"]}>
      <h2>購入リスト</h2>
      <ul className={styles.results}>
        {results.map((product, index) => (
          <li key={index} className={styles.resultItem}>
            <span>{product.name}</span>
            <span>{product.price}円</span>
            <button onClick={() => handleAdd(product)}>追加</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
