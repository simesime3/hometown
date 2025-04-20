import { useState, useEffect } from 'react';

const Famous = ({ cityDetails }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const prefectureName = cityDetails?.prefectureName;
    const cityName = cityDetails?.cityName || cityDetails?.name;
  
    if (!prefectureName || !cityName) {
      console.warn("⚠️ 都道府県名 または 市区町村名 が存在しません:", cityDetails);
      return;
    }
  
    console.log("📍 Famous用リクエスト:", prefectureName, cityName);
  
    const fetchFamousData = async () => {
      setLoading(true);
      setError('');
      try {
        const query = new URLSearchParams({
          prefecture: prefectureName,
          city: cityName
        });
  
        const response = await fetch(`http://localhost:5000/api/famous?${query}`);
        if (!response.ok) throw new Error('データの取得に失敗しました');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.error(err);
        setError('データの取得中にエラーが発生しました');
      } finally {
        setLoading(false);
      }
    };
  
    fetchFamousData();
  }, [cityDetails]);
  return (
    <div>
      {loading && <p>読み込み中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>紹介文</h2>
          <p>{data.description}</p>

          <h2>名所・名産品</h2>
          {data.highlights?.length > 0 ? (
            <ul>
              {data.highlights.map((highlight, index) => (
                <li key={index}>{highlight.name}</li>
              ))}
            </ul>
          ) : (
            <p>情報が見つかりませんでした。</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Famous;