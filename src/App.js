import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header'
import CovidData from './components/CovidData';

import WorldWide from './components/WorldWide';
import ContinentsButton from './components/ContinentsButton';

function App() {

  const [data, setData] = useState([]);
  const [historicalCases, setHistoricalCases] = useState([])
  const [historicalDeaths, setHistoricalDeaths] = useState([])

  useEffect(() => {
    
      const fetchCovid = async () => {
        const fetchData = await fetch('https://disease.sh/v3/covid-19/continents')
        const getData = await fetchData.json()
        setData([getData])
      // console.log(getData)

      }
      fetchCovid()
      fetchHistoricalCases()
  }, []);

  const calculateCovidData = (data, type) => {
    let storeData = []; //store the data here
    let lastData; //previos data so that we can substract it to new data


    for (let date in data.cases) {
      if (lastData) {
        let newData = {x: date, y: data[type][date] - lastData,}
        storeData.push(newData);
      }
      lastData = data[type][date];
    }
    return storeData;
  };

  const fetchHistoricalCases = async () => { //fetch historical for cases only
    const fetchHistoricalData = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=60')
    const getHistoricalData = await fetchHistoricalData.json()
    let updatedCases = calculateCovidData(getHistoricalData, 'cases');
    setHistoricalCases(updatedCases)
  }

  
  const [index, setIndex] = useState([])

  const changeIndex = (id) => {
    data.map((wow) => {
      setIndex([wow[id]])
    })
  }


  
  return ( 
    <div className="App">
      <div className='head__title'>
        <Header />
      </div>
      <main className='main__body'>
        <WorldWide />
        <CovidData historicalDeaths={historicalDeaths} historicalCases={historicalCases} covidData={data} index={index}/>
        <ContinentsButton changeIndex={changeIndex}/>
      </main>
    </div>
  );
}

export default App;
