// ActionSection.js
import React from "react";
import styles from "./ActionSection.module.css";

const ActionSection = ({ totalAmount, handlePurchase, error, cartItems }) => {
  return (
    <div className={styles["action-section-container"]}>
      {error && <div className={styles["error-message"]}>{error}</div>}
      
      {/* <div className={styles["total-amount"]}>合計金額: {totalAmount}円</div> */}
      
      <div className={styles["cart-items"]}>
        <h3>購入リスト</h3>
        {cartItems.length === 0 ? (
          <p>空</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className={styles["cart-item"]}>
                <span>{item.NAME}</span> - {item.PRICE}円 × {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className={styles["purchase-button"]} onClick={handlePurchase}>
        購入
      </button>
    </div>
  );
};

export default ActionSection;
