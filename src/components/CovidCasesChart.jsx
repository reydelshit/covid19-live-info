import React, { useEffect, useState } from 'react'
import "../App.css"
import { Link } from 'react-router-dom';

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
        borderColor: 'aqua',
        backgroundColor: '#393d42',
      }
    ],
  };

  
  const options = {
    responsive: true,
    innerWidth: '400px',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'aqua'
        }
      },
      title: {
        display: true,
        text: 'LIVE COVID CASES WORLDWIDE',
        color: 'aqua'
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'rgb(14, 192, 192)'
        },
        grid: {
          color: '#393d42'
        }
      },
      x: {
        ticks: {
          color: 'rgb(14, 192, 192)'
        },
        grid: {
          color: '#393d42'
        }
      },
    }
  };


  return (
    <div className='covid__Chart'>
        <h1>Live Cases WorldWide</h1>
        <div className='chart__Container'>
            <Line className='bg' options={options} data={data} />
        </div>
        <span>search data per <Link to="/countries">country</Link></span>

    </div>
  )
}

export default CovidCasesChart