import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './cssfile/paper.css';
 import PieChartWithCenterLabel from './Pie1';
 import PieChartWithCenterLabel1 from './Pie3';

// const DemoPaper = styled(Paper)(({ theme }) => ({
//     width: 120,
//     height: 120,
//     padding: theme.spacing(3),
//     ...theme.typography.body2,
//     textAlign: 'center',
//     marginTop:'10px',
// }));Name



export default function SquareCorners() {
  
    return (<>  
    {/* <PieChartWithCenterLabel/>    */}
    <div className='container'>
    
      
    <div className="card">
      {/* <div className="cardHeader"></div>
      <div className="chartContainer">  */}
        <PieChartWithCenterLabel/>
        {/* <div className="chart" > </div> */}
      </div>
      {/* <div className="chartLegend">
        <div className="chartLegendItem">
          <div className="chartLegendColor" 

          >
            
          </div> */}
          {/* <span>Connected (2)</span> */}
        
       {/* <div className="chartLegendItem">
          <div className="chartLegendColor" style={{backgroundColor: "#eee"}}></div> */}
          {/* <span>Not Connected (2)</span> */}
        </div>
      </div>
    </div>
    <div className="card">
      <div className="cardHeader"></div>
      <div className="chartContainer">
      
        <div className="chart" 
        // style={{backgroundColor: "#4caf50"}}
        >
        <div className='pie2'>  <PieChartWithCenterLabel1 /></div>
        </div>
      </div>
      <div className="chartLegend">
        <div className="chartLegendItem">
          <div className="chartLegendColor" 
          // style={{backgroundColor: "#f44336"}}
          ></div>
          {/* <span>Failed (100%)</span> */}
        </div>
        <div className="chartLegendItem">
          {/* <div className="chartLegendColor" style={{backgroundColor: "#ffc107"}}></div> */}
          {/* <span>Warning (10%)</span> */}
        </div>
        <div className="chartLegendItem">
          {/* <div className="chart-legend-color" style={{backgroundColor: "#ccc"}}></div> */}
          {/* <span>Not available (10%)</span> */}
        </div>
        <div className="chartLegendItem">
          <div className="chartLegendIColor" style={{backgroundColor: "#4caf50"}}></div>
          {/* <span>Passed (75%)</span> */}
        </div>
      </div>
    </div>
    <div className="card">
      <div className="cardHeader"></div>
      <div className="chartContainer">
      
        <div className="chart"><button style={{backgroundColor:'#ebebeb',border:'none',borderRadius:'4px'}}>+ add Widget</button></div>
   </div>   
    </div>

     <div className="card">
      <div className="cardHeader">CWPP Dashboard</div>
      <div className="cardHeader">Top 5 Homespace specific items</div>
      <div className="chartContainer">
        <span style={{fontSize: '12px'}}>No graph data available</span>
      </div>
    </div>

    <div className="card">
      <div className="cardHeader">Workload Alerts</div>
      <div className="chartContainer">
        <span style={{fontSize: "12px;"}}>No graph data available</span>
      </div>
    </div>

    <div className="card">
      <div className="Header">Add Widget</div>
    </div>

    <div className="card">
      <div className="Header">Registry Scan</div>
      <div className="Header">Image Risk Assessment</div>
      <div className="progressBar">
        <div className="progressBarFill" style={{width: "50%;"}}></div>
      </div>
      <span style={{fontSize:' 12px'}}>1673 total vulnerabilities</span>
      <div className="chartLegend">
        <div className="chartLegendItem">
          <div className="chartLegendColor" style={{backgroundColor: "#f44336"}}></div>
          <span>critical (10)</span>
        </div>
        <div className="chartLegendItem">
          <div className="chartLegendColor" style={{backgroundColor: "#ffc107"}}></div>
          <span>high (10)</span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="cardHeader">Image Security Issues</div>
      <div className="progressBar">
        <div className="progressBarFill" style={{width: "75%"}}></div>
      </div>
      <span style={{fontSize: "12px"}}>2 total images</span>
      <div className="chartLegend">
        <div className="chartLegendItem">
          <div className="chartLegendColor" style={{backgroundColor:" #f44336"}}></div>
          <span>critical (10)</span>
        </div>
        <div className="chartlegendItem">
          <div className="chartlegendColor" style={{backgroundColor: "#ffc107"}}></div>
          <span>high (10)</span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="cardHeader">Add Widget</div>
    </div> 

  </div>
</div>
    
    </>

    );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export default function SimplePaper() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={0} />
//       <Paper />
//       <Paper elevation={3} />
//     </Box>
//   );
// }

{/* <Stack direction="row " spacing={3}>
        <DemoPaper square={false}>rounded corners</DemoPaper>
        <DemoPaper square={false}>rounded corners</DemoPaper>
        <DemoPaper square={false}>rounded corners</DemoPaper>
    </Stack>
        <Stack direction="row " spacing={3}>
            <DemoPaper square={false}>rounded corners</DemoPaper>
            <DemoPaper square={false}>rounded corners</DemoPaper>
            <DemoPaper square={false}>rounded corners</DemoPaper>
        </Stack> */}
        {/* <Stack direction="row " spacing={3}>
            <DemoPaper square={false}>rounded corners</DemoPaper>
            <DemoPaper square={false}>rounded corners</DemoPaper>
            <DemoPaper square={false}>rounded corners</DemoPaper>
        </Stack> */}