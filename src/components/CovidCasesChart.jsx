import React, { useEffect, useState } from 'react'
import "../assets/CovidChart.css"

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



const CovidCasesChart = ({historicalCases}) => {

  useEffect(() => {
    mapHistoricalCases()
  }, [])
  
  const [hisCases, setHisCases] = useState() //map the historicalCases so that it wont render the [Object Object]
  const mapHistoricalCases = () => {
    historicalCases.map((getHistory) => {
      setHisCases(getHistory)
    })
  }
  
  const labels = [hisCases];

  const data = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: historicalCases,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  
  const options = {
    responsive: true,
    // outerWidth: '400px'
    innerWidth: '400px',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'LIVE COVID CASES WORLDWIDE',
      },
    },
  };



  return (
    <div className='covid__Chart'>
        <h1>Live Cases WorldWide</h1>
        <div className='chart__Container'>
            <Line className='bg' options={options} data={data} />
        </div>
    </div>
  )
}

export default CovidCasesChart