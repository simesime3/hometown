import React, { useState } from "react";
import Searchbox from "../components/Searchbox/Searchbox";  // Searchboxコンポーネントをインポート
import ListSection from "../components/ListSection/ListSection"; // ListSectionコンポーネントをインポート
import { fetchProduct } from "../utils/api"; // fetchProduct関数をインポート

const App = () => {
  const [productList, setProductList] = useState([]);

  // 商品をリストに追加する関数
  const addToList = async (code) => {
    try {
      const product = await fetchProduct(code);  // 商品情報を取得
      console.log("Adding product to list:", product); 
      setProductList((prevList) => [...prevList, product]);  // 取得した商品をリストに追加
    } catch (error) {
      console.error("Error adding product:", error);  // エラーハンドリング
    }
  };

  return (
    <div className="container">
      <div className="product-section">
        <Searchbox addToList={addToList} />  {/* Searchboxコンポーネントを表示 */}
      </div>
      <div className="list-section">
        <ListSection productList={productList} />  {/* productListをListSectionに渡す */}
      </div>
    </div>
  );
};

export default App;
