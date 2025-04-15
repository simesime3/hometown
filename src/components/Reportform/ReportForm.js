import React, { useState } from 'react';

const ReportForm = ({ municipalityId, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_id', '1');
    formData.append('municipality_id', municipalityId);
    formData.append('title', title);
    formData.append('body', body);
    if (image) {
      formData.append('image', image);
    }

    const res = await fetch('http://localhost:5000/api/reports', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('投稿に成功しました');
      setTitle('');
      setBody('');
      setImage(null);
      onSuccess();
    } else {
      alert('投稿に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginTop: '1rem',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>レポートを投稿する</h3>

      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <textarea
        placeholder="内容"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={6}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          resize: 'vertical'
        }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginBottom: '10px' }}
      />

      {/* 🔵 右寄せされた投稿ボタン */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="submit"
          style={{
            backgroundColor: '#3b82f6', // blue-500
            color: 'white',
            padding: '6px 14px',
            fontSize: '0.9rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          投稿
        </button>
      </div>
    </form>
  );
};

export default ReportForm;

