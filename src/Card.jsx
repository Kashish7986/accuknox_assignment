import * as React from 'react';
import './cssfile/card.css';
 import PieChartWithCenterLabel from './Pie1';
 import PieChartWithCenterLabel1 from './Pie3';


 export function card(){
    return(
    <>
    <div className='container'>
        <div className="card">
            <PieChartWithCenterLabel/>
        </div>
    </div>

    <div className='container'>
        <div className="card">
            <PieChartWithCenterLabel/>
        </div>
    </div>
    </>
    )
 }