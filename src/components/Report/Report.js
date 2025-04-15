import React, { useEffect, useState } from 'react';

const Report = ({ cityDetails }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/reports/${cityDetails.id}`);
        if (!res.ok) throw new Error('データの取得に失敗しました');
        const data = await res.json();
        console.log('report data:', data);
        setReports(data);
      } catch (err) {
        console.error('エラー:', err);
      } finally {
        setLoading(false);
      }
    };

    if (cityDetails?.id) {
      fetchReports();
    }
  }, [cityDetails]);

  if (loading) return <p>読み込み中...</p>;
  if (!reports.length) return <p>レポートが見つかりませんでした。</p>;

  return (
    <div>
      <h3>Report for {cityDetails.name}</h3>
      {reports.map((report) => (
        <div key={report.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          <h4>{report.title}</h4>
          <p>{report.body}</p>
          <small>{new Date(report.created_at).toLocaleString()}</small>
          {report.image_data && (
            <div>
              <img
                src={`data:image/jpeg;base64,${report.image_data}`}
                alt="Report"
                style={{ maxWidth: '100%', marginTop: '0.5rem' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Report;
