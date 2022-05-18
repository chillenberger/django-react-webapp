import React, { Fragment } from "react";
import {Doughnut, Bar} from 'react-chartjs-2'
import 'chart.js/auto';

const serviceData = {
  labels: ['Space', 'Air', 'Drone'],
  datasets: [{
    data: [80, 250, 300]
  }]
}

const usageData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    data: [120, 307, 49, 214, 194, 145, 323, 312, 256, 345, 311, 412]
  }]
}


const BarChart = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
   <Bar data={usageData}/>
 </div>
  )
}

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut data={serviceData}/>
    </div>
  )
}

export {
  BarChart,
  DoughnutChart
}
