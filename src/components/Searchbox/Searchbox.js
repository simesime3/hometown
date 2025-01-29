import React, { useState } from "react";
import { fetchProduct } from "../../utils/api";
import styles from './Searchbox.module.css';  // CSS Modulesをインポート

const Searchbox = ({ addToList }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    try {
      const product = await fetchProduct(code);
      addToList(product);
      setMessage(""); // 成功時にはメッセージをリセット
    } catch (error) {
      setMessage("商品が見つかりません");
    }
  };

  return (
    <div className={styles['searchbox-container']}>  {/* stylesオブジェクトから取得 */}
      <input
        type="text"
        placeholder="商品コードを入力"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={styles.input} 
      />
      <button onClick={handleSearch} className={styles.button}>商品コード 読み込み</button>
      {message && <p className={styles['error-message']}>{message}</p>}  {/* エラーメッセージにもCSS Modulesを適用 */}
    </div>
  );
};

export default Searchbox;
