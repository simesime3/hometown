import React, { useState } from "react";
import { handlePurchase } from "../../utils/api";  // ここでは API 呼び出しだけなので `addToCart` は削除
import styles from "./ListSection.module.css";
import ActionSection from "../ActionSection/ActionSection";

const ListSection = ({ productList, onAddProduct }) => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  // 商品をカートに追加する処理
  const handleAddToCart = (product) => {
    console.log("Adding product:", product);
  
    // カート内に同じ商品が存在するか確認するためにループを使う
    let existingProduct = null;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].CODE === product.CODE) {
        existingProduct = cart[i];
        break;
      }
    }
  
    if (existingProduct) {
      // 商品がすでにカートにあれば数量を増加
      const updatedCart = cart.map((item) => {
        console.log("item:", item);  // ここでアイテムをログに出力
        return item.CODE === product.CODE
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(updatedCart);
      // 合計金額を更新
      setTotalAmount(updatedCart.reduce((sum, item) => sum + item.PRICE * item.quantity, 0));
      console.log('updatedCart', updatedCart);  // 更新後のカートをログに出力
    } else {
      // 商品がカートに無ければ新たに追加
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      // 合計金額を更新
      setTotalAmount(newCart.reduce((sum, item) => sum + item.PRICE * item.quantity, 0));
      console.log('newCart', newCart);  // 新しいカートをログに出力
    }
  
    onAddProduct(product);  // 親コンポーネントに通知（必要な場合）
  };  

  // 購入処理
  const handlePurchaseClick = () => {
    handlePurchase(cart)
      .then((response) => {
        if (response.success) {
          setCart([]);  // 購入後にカートを空にする
          setTotalAmount(0);  // 合計金額をリセット
        }
      })
      .catch((error) => {
        console.log('cart',cart)
        console.log('cart',cart[0])
        setError("購入処理に失敗しました。再度試してください。");
      });
  };

  return (
    <div className={styles["list-section-container"]}>
      <h2></h2>
      <div className={styles["products-container"]}>
        <div className={styles["product-list"]}>
          {productList.map((product, index) => (
            <li key={index} className={styles["product-item"]}>
              <div className={styles["product-name"]}>{product.NAME}</div>
              <div className={styles["product-price"]}>{product.PRICE}円</div>
              <button className={styles["add-button"]} onClick={() => handleAddToCart(product)}>
                追加
              </button>
            </li>
          ))}
        </div>

        {/* カートの詳細表示 */}
        <ActionSection
          totalAmount={totalAmount}  // 合計金額を渡す
          handlePurchase={handlePurchaseClick} // 購入処理の関数を渡す
          error={error}  // エラーメッセージを渡す
          cartItems={cart}  // カート内の商品を渡す
        />
      </div>
    </div>
  );
};

export default ListSection;
