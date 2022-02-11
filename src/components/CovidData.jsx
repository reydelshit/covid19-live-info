import CovidCasesChart from "./CovidCasesChart";
import '../assets/CovidData.css'


const MainData = ({covidData, historicalDeaths, historicalCases, index}) => {
    
  const convertNumbers = (number) => {
    const num = number.toLocaleString("en-US");
    return num
  }


  return(
    <div className="covid__data__main__container">
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
      <CovidCasesChart historicalDeaths={historicalDeaths} historicalCases={historicalCases}/>

    </div>
  );
};

export default MainData;
