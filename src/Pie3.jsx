import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import './cssfile/chart.css';


const data = [
  { value: 62, 
    label: 'Passed(7253)'
 },
  { value: 3, 
    label: 'Not Available(36)' },
  { value: 10, 
    label: 'Warning(681)' },
  { value: 15
    , label: 'Failed(1689)' },
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

export default function PieChartWithCenterLabel1() {
  return (
    <div className='pie'><PieChart series={[{ data, innerRadius: 70 ,outerRadius: 50,labelDistance:20,margin:10}]} labelOffset={{ x: 0, y: 20 }} labelStyle={{margin:'10px'}}  colors={['#00A86B','#AAA7AD','#FFF44F', '#D30000',]} labelDistance={20}{...size}>
      <PieCenterLabel>9659</PieCenterLabel>
    </PieChart></div>
  );
}
