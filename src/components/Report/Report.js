// Report.js
import React, { useEffect, useState } from 'react';
import ReportForm from '../ReportForm/ReportForm'; // 作成した投稿フォーム

const Report = ({ cityDetails }) => {
  const [reports, setReports] = useState([]);
  const [showForm, setShowForm] = useState(false); // 追加
  const municipalityId = cityDetails?.id;

  const fetchReports = () => {
    if (!municipalityId) return;
    fetch(`http://localhost:5000/api/reports?municipality_id=${municipalityId}`)
      .then((res) => res.json())
      .then(setReports)
      .catch((err) => console.error("Error fetching reports:", err));
  };

  useEffect(() => {
    fetchReports();
  }, [municipalityId]);

  return (
    <div>
      {/* ボタン横並び表示で追加 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>おうえんレポート一覧</h3>
        <button
          onClick={() => setShowForm((prev) => !prev)}
          style={{
            backgroundColor: '#38bdf8', // 青系色
            color: 'white',
            padding: '6px 12px',
            fontSize: '0.9rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {showForm ? '閉じる' : 'おうえんレポートを投稿する'}
        </button>
      </div>

      {/* 投稿フォーム表示 */}
      {showForm && (
        <div style={{ marginBottom: '2rem' }}>
           <ReportForm municipalityId={municipalityId} onSuccess={fetchReports} />
        </div>
      )}

      {/* レポート一覧表示 */}
      <div className="mt-4 space-y-4">
        {reports.length === 0 ? (
          <p>まだレポートはありません。</p>
        ) : (
          reports.map((report) => (
            <div key={report.id} className="p-4 border rounded shadow bg-white" style={{ marginBottom: '2rem' }}>
              <h4 className="font-bold">{report.title}</h4>
              <p>{report.body}</p>
              <small>{new Date(report.created_at).toLocaleString()}</small>
          
              {report.nickname && (
                <div style={{ fontSize: '0.85rem', color: '#555', marginTop: '2px' }}>
                  投稿者：{report.nickname}
                </div>
              )}
          
              {report.image_data && (
                  <img
                    src={`data:image/jpeg;base64,${report.image_data}`}
                    alt="レポート画像"
                    className="rounded"
                  />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Report;
