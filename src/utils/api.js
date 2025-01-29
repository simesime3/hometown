// src/utils/api.js
export const fetchProduct = async (code) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${code}`);
    if (!response.ok) {
      throw new Error("商品が見つかりません");
    }
    const data = await response.json();
    // console.log("Product data received:", data);
    return {
      name: data.NAME,  // 受け取ったデータのフィールド名に合わせる
      price: data.PRICE, // 同様に価格を受け取る
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("商品が見つかりません");
  }
};
