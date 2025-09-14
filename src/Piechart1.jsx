import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import './cssfile/chart.css';

const data = [
  { value: 20, label: 'Not Connected(2)', color: '#A7C7E7' },
  { value: 20, label: 'Connected(2)', color: '#1F51FF' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel2() {
  return (
    <div className="pie">
      <PieChart
        series={[
          {
            data: data, // keep original order for slices
            innerRadius: 70,
            outerRadius: 50,
          },
        ]}
        colors={data.map(item => item.color)} // match slice colors
        {...size}
      >
        <PieCenterLabel>2</PieCenterLabel>
        <PieCenterLabel>Total</PieCenterLabel>
      </PieChart>

      {/* Custom Labels Reversed */}
      <div style={{ marginTop: '15px' }}>
        {[...data].reverse().map((item, idx) => (
          <div
            key={idx}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: item.color,
                marginRight: 8,
                borderRadius: '50%',
              }}
            />
            <span style={{ color: item.color, fontSize: 14, fontWeight: 500 }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
