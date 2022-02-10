import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header'
import CovidData from './components/CovidData';
import Slogan from './components/Slogan';

import WorldWide from './components/WorldWide';
import CovidCasesChart from './components/CovidCasesChart';

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



  
  return ( 
    <div className="App">
      <Header />
      <Slogan />
      <main>
        <CovidData covidData={data}/>
        <CovidCasesChart historicalDeaths={historicalDeaths} historicalCases={historicalCases}/>
        <WorldWide />
      </main>
    </div>
  );
}

export default App;
