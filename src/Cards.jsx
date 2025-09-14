import React from "react";
import './cssfile/paper.css';
import PieChartWithCenterLabel from './Pie1';
import PieChartWithCenterLabel1 from './Pie3';
import img from './image/graph.jpg';
import { useState,useEffect } from "react";
import ProgressBar from './progessbar';
import TemporaryDrawer from './TemporaryDrawer';



export default function Cards() {
    const [options,setOptions] = useState([
        { id: 1, label: 'Cloud Accounts ' },
        { id: 2, label: 'Cloud Accounts Risk Assessment' },
        { id: 3, label: 'widget 3' },
        { id: 4, label: 'Option 4' },
        { id: 5, label: 'Option 5' },
      ]);
//   const [isChecked, setIsChecked] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem('selectedOptions')) || options.map((option) => option.id));
  const [newOption, setNewOption] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    const storedOptions = localStorage.getItem('options');
        if (storedOptions) {
          try {
            const parsedOptions = JSON.parse(storedOptions);
            console.log('Parsed options:', parsedOptions);
            if (Array.isArray(parsedOptions)) {
            setOptions(parsedOptions);}
            else {
                console.warn('Stored options are not an array:', parsedOptions);
                // Optionally reset to default or handle error
                setOptions([
                    { id: 1, label: 'Cloud Accounts ' },
                    { id: 2, label: 'Cloud Accounts Risk Assessment' },
                    { id: 3, label: 'widget 3' },
                    { id: 4, label: 'Option 4' },
                    { id: 5, label: 'Option 5' },
                ]);
            }
          } 
          
          catch (error) {
            console.error('Error parsing stored options:', error);
        //  Fallback to default options in case of error
            setOptions([
                { id: 1, label: 'Cloud Accounts ' },
                { id: 2, label: 'Cloud Accounts Risk Assessment' },
                { id: 3, label: 'widget 3' },
                { id: 4, label: 'Option 4' },
                { id: 5, label: 'Option 5' },
            ]);
          }  
    
    }

}, []);

const [open, setOpen] = useState(false);


useEffect(() => {
    localStorage.setItem('data', JSON.stringify({ options, selectedOptions }));
  }, [options, selectedOptions]);

const vulnerabilityData = [
  { label: 'Critical', value: 9, color: '#7a0b0b' },    // Dark red/brown
  { label: 'High', value: 150, color: '#b22222' },      // Firebrick red
  { label: 'Medium', value: 72, color: '#ff9800' },     // Orange
  { label: 'Low', value: 31, color: '#ffeb3b' } ,        // yellow
  {label: 'Negligible', value: 3, color: '#9e9e9e'}       // Very light gray
];  
const vulnerableData = [
  { label: 'Critical', value: 2, color: '#7a0b0b' },    // Dark red/brown
  { label: 'High', value: 2, color: '#b22222' },      // Firebrick red
  { label: 'Medium', value: 4, color: '#ff9800' },     // Orange
  { label: 'Low', value: 3, color: '#ffeb3b' },         // yellow
  {label: 'Negligible', value: 1, color: '#9e9e9e'}       // Very light gray
];  

    return (
        <>
         
            <div className="container">
               
          
                <div className="card">
                    <div className="cardHeader">
                    {options[0]?.label||options[0]?.label ? options[0].label : 'Add Widget'}
                    </div>
                    <div className="chart-container" >  <PieChartWithCenterLabel /></div>
                </div>


            <div className="card">
                <div className="cardHeader">{options[1]?.label|| options[1]?.label ? options[1].label : 'Add Widget'}</div>
                      <div className="chart-container" > <PieChartWithCenterLabel1 /></div>
                </div>

            <div className="card">
                <div className="cardHeader">
                
                  </div>
                        <div className="chart2-container" > 
                            <div  className="widgetbtn"><button
                            // style={{marginLeft:'90px', marginBottom:'110px'}}
                              onClick={() => setOpen(true)}>+Add Widget
                              
                              </button> </div>
                            </div> 
                </div>
              
                {/* <div className="cardHeader" style={{marginBottom:'auto'}}>CWPP Dashboard</div> */}
               <div className="head5"> <h5 >CWPP Dashboard</h5></div>
              
                <div className="card2" 
                
                >
                    <div className="cardHeader" > Top 5 Namespace Specfic Alerts</div>
                        <div className="chart2-container" >
                     <div className="pics">   <img src={img} alt="no image load" style={{backgroundColor:'white',marginBottom:'118px',marginLeft:'114px',width:'125px',height:'81px'}}/></div>
                           <div className="graph_para" ><p 
                            // style={{marginTop:'4px'}}
                            >No Graph Data Available</p></div>
                             </div>
                </div>


                <div className="card2">
                    <div className="cardHeader" style={{marginBottom:'auto'}}> Workload Alerts</div>
                            <div className="chart2-container" >
                  <div className="pics">      <img src={img} alt="no image load" style={{backgroundColor:'white',marginBottom:'118px',marginLeft:'114px',width:'125px',height:'81px'}}/></div>
                           <div className="graph_para" > <p 
                            //  style={{marginTop:'4px',}}
                            >No Graph Data Available</p></div> 

                             
                             </div>
                        </div> 


                <div className="card2">
              
                        <div className="chart2-container" > 
                          <div  className="widgetbtn"> <button 
                        //  style={{marginLeft:'90px',marginTop:'auto'}}
                         >+Add Widget</button></div></div>
                </div> 

                <h5 className=" head5">Registry Scan</h5>

                <div className="card2"
                           >
                    <div className="cardHeader" 
                    // style={{marginBottom:'auto'}}
                    > Image Risk Assessment</div>
                    <p 
                    // style={{marginRight:'auto',marginLeft: '0px',marginBottom:35}}
                    ><b>1470</b> Total Vulnerabilies</p>

                        <div className="chart3-container" >

                          <div progess-bar> 
                          {/* style={{ maxWidth: '80%', marginBottom:'60px' }} */}
                          
                             <ProgressBar data={vulnerabilityData} /> </div>
                          </div>
                </div> 
                <div className="card2">
                    <div className="cardHeader">
                      {/* style={{marginBottom:'auto'}} */}
                      Image Security Issues</div>
                      <p 
                      // style={{marginRight:'auto',marginLeft: '0px',marginBottom:35}}
                      ><b>2</b> Total Images</p>
                        <div className="chart3-container" >     
                            <div progess-bar>
                             {/* style={{ maxWidth: '80%', marginBottom:'60px' }} */}
                            
                                  <ProgressBar data={vulnerableData} />
                            </div>
                       </div>
                </div> 
                <div className="card2">
                
                        <div className="chart2-container" > 
                         <div  className="widgetbtn" ><button
                        // style={{marginLeft:'90px',marginTop:'auto'}}
                        >+Add Widget</button></div></div>
                </div> 
            
            </div>
        </>
    )
}