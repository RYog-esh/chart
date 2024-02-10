import React, { useState } from 'react';
import { chart } from 'chart.js/auto';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import chartdatas from '../chartdatas.json'
import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { getBarData } from '../../slice/slice';

const MetricsBarChart = () => {
  // const dispatch = useDispatch();
  // const [barVal, setBarVal] = useState('');
  const chartRef = useRef();
  const barClick = (e) => { debugger;
    //const charts = chart.getChart(chartRef.current);
    //const clickedElements = chart.getElementsAtEventForMode(e, 'y',{axis: 'x', intersect: false}, true)
    if(getElementAtEvent(chartRef.current, e).length > 0){
      const getBarVal = getElementAtEvent(chartRef.current, e)[0];
      //console.log(getElementsAtEventForMode(e, 'y',{axis: 'x', intersect: false}, true));
      //setBarVal(getBarVal);
      //dispatch(getBarData(barVal))
    }
  }
  return (
    <div className='bar-chart'>
        <Bar 
            onClick={barClick}
            ref = {chartRef}
            data={
							{
								labels : chartdatas.BarData.map((labelData, i) => labelData.label),
								datasets:[
									{
										label: "Allocation per day",
                    maxBarThickness: 30,
                    borderRadius: 5,
										data: chartdatas.BarData.map((data) => data.Value)
									}
								]
							}
						}
        />
    </div>
  )
}

export default MetricsBarChart