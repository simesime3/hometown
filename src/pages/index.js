import React, { useState } from "react";
import Searchbox from "../components/Searchbox/Searchbox";  // Searchboxコンポーネントをインポート
import ListSection from "../components/ListSection/ListSection"; // ListSectionコンポーネント

const App = () => {
  const [productList, setProductList] = useState([]);

  const addToList = (product) => {
    console.log("Adding product to list:", product); 
    setProductList((prevList) => [...prevList, product]);
  };

  return (
    <div className="container">
      <div className="product-section">
        <Searchbox addToList={addToList} />
      </div>
      <div className="list-section">
        <ListSection productList={productList} />
      </div>
    </div>
  );
};

export default App;
