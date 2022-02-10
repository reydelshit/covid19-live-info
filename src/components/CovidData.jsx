import { useState } from "react";

import '../assets/CovidData.css'


const MainData = ({covidData}) => {
    
  const convertNumbers = (number) => {
    const num = number.toLocaleString("en-US");
    return num
  }

  

  const [index, setIndex] = useState([])

  const changeIndex = (id) => {
    covidData.map((wow) => {
      setIndex([wow[id]])
    })
  }
  

  return(
    <div>
      {index.length ? <div className="continents">
    {index.map((continents, index) => (
        <div className='covidData__main__container' key={index}> 
          <div className="continent__name">
            <h1>{continents.continent}</h1>
          </div>
          <div className="continent__holder">
            <div className='covidData__container'>
                <span>Total Cases</span>
                <span>{convertNumbers(continents.cases)}</span>
            </div>
            <div className='covidData__container'>
                <span>Recovered</span>
                <span>{convertNumbers(continents.recovered)}</span>
            </div>
            <div className='covidData__container'>
                <span>Deaths</span>
                <span>{convertNumbers(continents.deaths)}</span>
            </div> 
          </div>
        </div>
      ))} 
    </div> 
    :
    <div className="continents">
        {covidData.map((continents, index) => (
        <div className='covidData__main__container' key={index}> 
          <div className="continent__name">
            <h1>{continents[0].continent}</h1>
          </div>
          <div className="continent__holder">
            <div className='covidData__container'>
                <span>Total Cases</span>
                <span>{convertNumbers(continents[0].cases)}</span>
            </div>
            <div className='covidData__container'>
                <span>Recovered</span>
                <span>{convertNumbers(continents[0].recovered)}</span>
            </div>
            <div className='covidData__container'>
                <span>Deaths</span>
                <span>{convertNumbers(continents[0].deaths)}</span>
            </div> 
          </div>
        </div>
      ))}
      </div>
    }
    <div className="countryButton">
          <button onClick={() => changeIndex(0)}>North America</button>
          <button onClick={() => changeIndex(1)}>Asia</button>
          <button onClick={() => changeIndex(2)}>South America</button>
          <button onClick={() => changeIndex(3)}>Europe</button>
          <button onClick={() => changeIndex(4)}>Africa</button>
          <button onClick={() => changeIndex(5)}>Australia Oceania</button>
      </div>
    </div>
  );
};

export default MainData;
