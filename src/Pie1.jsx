import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import './cssfile/chart.css';

const data = [
//   { value: 5, label: 'A' },
//   { value: 10, label: 'B' },
  { value: 20
     ,label: 'Not Connected(2)'
     },
  { value: 20
    , label: 'Connected(2)'
 },
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

export default function PieChartWithCenterLabel() {
  return (
   <div className='pie'> <PieChart series={[{ data, innerRadius: 70 ,outerRadius: 50}]} style={{marginRight:'5px'}} padding={20}  labelStyle={{transform: 'translateY(10px)',  }} labelDistance={20} labelPosition={{ x: 0, y: 10, }} colors={['#A7C7E7', '#1F51FF']} {...size} >
      <PieCenterLabel>2<br/> Total</PieCenterLabel>
    </PieChart></div>
  );
}
