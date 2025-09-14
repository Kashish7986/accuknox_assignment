import React from 'react';

const ProgressBar = ({ data }) => {
  // Data example: [{ label: "Critical", value: 9, color: "#7a0b0b" }, ...]
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ fontWeight: 'bold', marginBottom: 6 }}>
        {/* {total} Total Vulnerabilities */}
      </div>
      <div style={{
        display: 'flex',
        height: 12,
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0'
      }}>
        {data.map(({ value, color }, idx) => {
          const widthPercent = (value *10 / total) * 100;
          return (
            <div
              key={idx}
              style={{
                width: `${widthPercent}%`,
                backgroundColor: color,
                transition: 'width 0.5s ease'
              }}
            />
          );
        })}
      </div>
      <div style={{ marginTop: 10, display: 'flex', gap: 15, flexWrap: 'wrap' }}>
        {data.map(({ label, value, color }, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 16,
              height: 16,
              backgroundColor: color,
              borderRadius: 4
            }} />
            <div>{label} ({value})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;