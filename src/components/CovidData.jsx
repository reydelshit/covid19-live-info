// import NorthAmerica from "./Continents/NorthAmerica";
// import Asia from "./Continents/Asia"
// import SouthAmerica from "./Continents/SouthAmerica"
// import Europe from "./Continents/Europe"
// import Africa from "./Continents/Africa"
// import Australia from "./Continents/AustraliaOceana"
import { useEffect, useState } from "react";

import '../assets/CovidData.css'


const MainData = ({covidData}) => {
    
  // const [showNorthAmerica, setNorthAmerica] = useState(false)
  // const [showAsia, setAsia] = useState(false)
  // const [showSouthAmerica, setSouthAmerica] = useState(false)
  // const [showEurope, setEurope] = useState(false)
  // const [showAfrica, setAfrica] = useState(false)
  // const [showAustralia, setAustrali] = useState(false)
    
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
          <button onClick={() => changeIndex(0)}>change north</button>
          <button onClick={() => changeIndex(1)}>change asia</button>
          <button onClick={() => changeIndex(2)}>change south</button>
          <button onClick={() => changeIndex(3)}>change europe</button>
          <button onClick={() => changeIndex(4)}>change africa</button>
          <button onClick={() => changeIndex(5)}>change asturalia</button>
      </div>
    </div>
  );
};

export default MainData;
