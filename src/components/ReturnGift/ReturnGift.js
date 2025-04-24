import React from 'react';

const ReturnGift = ({ cityDetails }) => {
  const keyword = encodeURIComponent(cityDetails.name); // URLエンコード
  const searchUrl = `https://furunavi.jp/Product/Search?keyword=${keyword}`;

  return (
    <div>
      <h3>返礼品を探す</h3>
      <p>以下のボタンから「ふるなび」で{cityDetails.name}の返礼品を検索できます。</p>
      <a
        href={searchUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        {cityDetails.name} の返礼品を探す
      </a>
    </div>
  );
};

export default ReturnGift;
