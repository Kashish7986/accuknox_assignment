import React from "react";
import './cssfile/paper.css';
import PieChartWithCenterLabel from './Pie1';
import PieChartWithCenterLabel1 from './Pie3';
import img from './image/graph.jpg';
import { useState,useEffect } from "react";

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
            setOptions(parsedOptions);
          } catch (error) {
            console.error('Error parsing stored options:', error);
          }  
    
    }

}, []);



useEffect(() => {
    localStorage.setItem('data', JSON.stringify({ options, selectedOptions }));
  }, [options, selectedOptions]);

    return (
        <>
        
            <div className="container">
                
                <div className="card">
                    <div className="cardHeader">
                    {options[0].label}
                    </div>
                    <div className="chart-container" >  <PieChartWithCenterLabel /></div>

                </div>


                <div className="card">
                <div className="cardHeader">{options[1].label}</div>
                        <div className="chart-container" > <PieChartWithCenterLabel1 /></div>

                       




                </div>

                <div className="card">
                <div className="cardHeader">{options[2].label}</div>
                        <div className="chart-container" > 

                             <button style={{marginLeft:'90px',marginTop:'auto', marginBottom:'90px'}}>+Add Widget</button> 
                         
                            </div>
                </div>
              
                {/* <div className="cardHeader" style={{marginBottom:'auto'}}>CWPP Dashboard</div> */}
                <h5 style={{marginTop:'0px',marginLeft:'21px'}}>CWPP Dashboard</h5>
              
                <div className="card" style={{marginTop:'auto',marginLeft:'-120px'}}>
                    <div className="cardHeader" > Top 5 Namespace Specfic Alerts</div>
                        <div className="chart-container" >
                        <img src={img} alt="no image load" style={{backgroundColor:'white',marginBottom:'118px',marginLeft:'114px',width:'125px',height:'81px'}}/>
                            <p style={{marginTop:'9px',marginLeft:'-153px'}}>No Graph Data Available</p>

                             {/* <button style={{marginLeft:'214px'}}>+Add Widget</button> */}
                             </div>
                </div>


                <div className="card">
                    <div className="cardHeader" style={{marginBottom:'auto'}}> Workload Alerts</div>
                            <div className="chart-container" >
                        <img src={img} alt="no image load" style={{backgroundColor:'white',marginBottom:'118px',marginLeft:'114px',width:'125px',height:'81px'}}/>
                            <p style={{marginTop:'9px',marginLeft:'-153px'}}>No Graph Data Available</p>

                             
                             </div>
                        </div> 


                <div className="card">
              
                        <div className="chart-container" > <button style={{marginLeft:'90px',marginTop:'auto'}}>+Add Widget</button></div>
                </div> 

                <h5 style={{marginTop:'0px',marginLeft:'21px'}}>Registry Scan</h5>

                <div className="card"style={{marginTop:'auto',marginLeft:'-94px'}}>
                    <div className="cardHeader" style={{marginBottom:'auto'}}> Image Risk Assessment</div>
                    <p style={{marginRight:'auto',marginLeft: '0px'}}><b>1470</b> Total Vulnerabilies</p>

                        <div className="chart-container" >
                                                       <div className="progress-bar"style={{marginBottom:'118px',marginLeft:'114px'}}>
                            <div className="progress-bar-fill" style={{width:" 10%"}}></div>
                            <div className="High"style={{width:" 30%",left:'10%'}}></div>
                            <div className="progress-bar-fillCritical "style={{width:" 30%",left:'10%'}}></div>
                            
                            </div>
                             {/* <button style={{marginLeft:'90px',marginTop:'auto'}}>+Add Widget</button> */}
                             </div>
                </div> 
                <div className="card">
              
                        <div className="chart-container" > <button style={{marginLeft:'90px',marginTop:'auto'}}>+Add Widget</button></div>
                </div> 
                <div className="card">
              
                        <div className="chart-container" > <button style={{marginLeft:'90px',marginTop:'auto'}}>+Add Widget</button></div>
                </div> 

            </div>
        </>
    )
}