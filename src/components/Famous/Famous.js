// ✅ Famous.js（修正済）
import React from 'react';

const Famous = ({ cityDetails }) => {
  if (!cityDetails || !cityDetails.description) {
    return <p>この自治体の情報を取得できませんでした。</p>;
  }

  const {
    description,
    specialties = [],
    sightseeing = [],
    image
  } = cityDetails;

  return (
    <div>
      <h3>この自治体の紹介</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>

      <br />

      <h3>名産品</h3>
      <ul>
        {specialties.map((item, idx) => (
          <li key={`sp-${idx}`}>{item}</li>
        ))}
      </ul>

      <br />

      <h3>観光地</h3>
      <ul>
        {sightseeing.map((item, idx) => (
          <li key={`sight-${idx}`}>{item}</li>
        ))}
      </ul>

      {/* ✅ 画像がある場合は表示 */}
      {image && (
        <div style={{ marginTop: '1rem' }}>
          <h3>イメージイラスト</h3>
          <img
            src={image}
            alt={`${cityDetails.name}の風景`}
            style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '0.5rem' }}
          />
        </div>
      )}
    </div>
  );
};

export default Famous;
