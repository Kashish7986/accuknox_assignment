import React from 'react';
import MultiProgress from 'react-multi-progress';

function Multiprogress() {
  const segments = [
    { value: 60, color: '#eb4d4b', showPercentage: true, textColor: '#fff' },
    { value: 30, color: '#22a6b3', showPercentage: true, textColor: '#fff' },
    { value: 10, color: '#6ab04c', showPercentage: true, textColor: '#fff' },
  ];

  return (
    <div style={{ width: '400px' }}>
      <MultiProgress
        elements={segments}
        height={20}
        backgroundColor="#ddd"
        transitionTime={0.5}
      />
    </div>
  );
}

export default Multiprogress;
