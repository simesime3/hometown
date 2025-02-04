const backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL; //GitHub Actions
console.log('backend_URL:', backend_URL); // backend_URL を確認

export const fetchProduct = async (code) => {

  const productCode = code && code.CODE ? code.CODE : code;
  if (!productCode) {
    throw new Error('Product code is missing');
  }

  const response = await fetch(`${backend_URL}/api/products/${productCode}`);
  
  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product = await response.json();
  return product;
};

export const handlePurchase = async (cart) => {
  console.log('apicart:', cart); // カート内容を表示

  try {
    const updatedCart = {
      cart: cart.map(item => ({
        PRD_ID: item.PRD_ID,         // 商品ID
        PRD_CODE: item.CODE,         // 商品コード
        PRD_NAME: item.NAME,         // 商品名
        PRD_PRICE: item.PRICE,       // 商品価格
        quantity: item.quantity,     // 商品数量
        transaction_details: item.transaction_details || [] // トランザクション詳細
      }))
    };

    console.log('Updated Cart:', updatedCart); // カート内容を表示
    console.log('JSON.stringify(updatedCart) Cart:', JSON.stringify(updatedCart));

    // APIリクエスト
    const response = await fetch(`${backend_URL}/api/purchase/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCart),
    });

    // レスポンスが正常か確認
    if (!response.ok) {
      const errorData = await response.json(); // エラーレスポンスのJSONデータを取得
      throw new Error(errorData.detail || '購入処理に失敗しました');
    }

    // 正常なレスポンスの処理
    const data = await response.json();
    console.log('Response data:', data); // レスポンスデータを表示

    return {
      success: true,
      transactionId: data.transactionId,
      totalAmount: data.totalAmount,
    };
  } catch (error) {
    console.error("Error during purchase:", error); // エラーログを表示
    throw error; // エラーを再スロー
  }
};



export const addToCart = async (product) => {
  // 追加処理があれば実装します。現在の設計では非同期処理を必要としない場合は空にするか、
  // ローカルでカートの管理を行っています
};