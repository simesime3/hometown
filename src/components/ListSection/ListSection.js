import React from "react";
import styles from "./ListSection.module.css"; // CSS Modulesの読み込み

const ListSection = ({ productList }) => {
  return (
    <div className={styles["list-section-container"]}>
      <h2>購入リスト</h2>
      <ul className={styles["product-list"]}>
        {productList.map((product, index) => (
          <li key={index} className={styles["product-item"]}>
            <div className={styles["product-name"]}>{product.name}</div>
            <div className={styles["product-price"]}>{product.price}円</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
