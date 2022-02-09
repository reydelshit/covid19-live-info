import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header'
import CovidData from './components/CovidData';
import Slogan from './components/Slogan';

import WorldWide from './components/WorldWide';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    
      const fetchCovid = async () => {
        const fetchData = await fetch('https://disease.sh/v3/covid-19/continents')
        const getData = await fetchData.json()
        setData([getData])
      }
      fetchCovid()
  }, []);

  
  return ( 
    <div className="App">
      <Header />
      <Slogan />
      <main>
        <CovidData covidData={data}/>
        <WorldWide />
      </main>
    </div>
  );
}

export default App;
