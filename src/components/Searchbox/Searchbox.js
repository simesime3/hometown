import React, { useState } from "react";
import { fetchProduct } from "../../utils/api";
import styles from './Searchbox.module.css';  // CSS Modulesをインポート

const Searchbox = ({ addToList }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  // 検索処理
  const handleSearch = async () => {
    try {
      if (typeof code !== "string") {
        throw new Error("Invalid code format");
      }
      const product = await fetchProduct(code.trim()); // 不要な空白を削除
      addToList(product);
      setMessage(""); // 成功時にはメッセージをリセット
    } catch (error) {
      setMessage("商品が見つかりません");
      console.error("Error in handleSearch:", error);
    }
  };

  // 入力欄でEnterキー押下時のデフォルトアクションを防ぐ
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();  // Enterキーによるフォーム送信を防止
    }
  };

  return (
    <div className={styles['searchbox-container']}>  {/* stylesオブジェクトから取得 */}
      <input
        type="text"
        placeholder="商品コードを入力"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyPress}  // Enterキーを無効化
        className={styles.input} 
      />
      <button onClick={handleSearch} className={styles.button}>商品コード 読み込み</button>
      {message && <p className={styles['error-message']}>{message}</p>}  {/* エラーメッセージにもCSS Modulesを適用 */}
    </div>
  );
};

export default Searchbox;
