import React, { useState } from "react";
import Searchbox from "../components/Searchbox/Searchbox";  // Searchboxコンポーネントをインポート
import ListSection from "../components/ListSection/ListSection"; // ListSectionコンポーネントをインポート
import ActionSection from "../components/ActionSection/ActionSection"; // ActionSectionコンポーネントをインポート
import { fetchProduct } from "../utils/api"; // fetchProduct関数をインポート

const App = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  const addToList = async (code) => {
    try {
      const product = await fetchProduct(code);
      setProductList((prevList) => [...prevList, product]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleAddProduct = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.PRD_ID === product.PRD_ID);
      if (existingProduct) {
        return prevCart.map(item =>
          item.PRD_ID === product.PRD_ID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.PRICE * item.quantity, 0);

  return (
    <div className="container">
      <div className="product-section">
        <Searchbox addToList={addToList} />
      </div>
      <div className="list-section">
        <ListSection 
          productList={productList} 
          onAddProduct={handleAddProduct} 
        />
      </div>
    </div>
  );
};

export default App;
