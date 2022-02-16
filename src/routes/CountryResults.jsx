import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-spinners/CircleLoader';


import "../App.css"

const CountryResults = () => {

  const country = useParams()

  const [decider, setDecider] = useState(false)
  const [countryHolder, setCountryHolder] = useState([])
  const [image, setImage] = useState([])
  
  useEffect(() => {

    const fetchCountry = async () => {

      setDecider(true)
      const fetchCountryData = await fetch(`https://disease.sh/v3/covid-19/countries/${country.country}`)
      const getCountry = await fetchCountryData.json()
      setDecider(false)

    
      setCountryHolder([getCountry])
      setImage([getCountry.countryInfo])
      console.log(getCountry)
      
    }
    fetchCountry()
}, [country]);

const convertNumbers = (number) => {
  const num = number.toLocaleString("en-US");
  return num
}


    return (
      <>
      <div className='loading__container'>
        {decider && <Loader color={'white'}/>}
      </div>   
        {!decider && countryHolder.map((countryInformation, index) => 
        <div className='modal' key={index}>
          <h1>{countryInformation.country}</h1>
          {!decider && image.map((img, index) => <div key={index}>
            <img src={img.flag} alt="flag" />
          </div>)}
          <span><h1 className='information__titles'>Active:</h1> {convertNumbers(countryInformation.active)}</span>
          <span><h1 className='information__titles'>Deaths:</h1> {convertNumbers(countryInformation.deaths)}</span>
          <span><h1 className='information__titles'>Today Cases:</h1> {convertNumbers(countryInformation.todayCases)}</span>
          <span><h1 className='information__titles'>Today Deaths:</h1> {convertNumbers(countryInformation.todayDeaths)}</span>
          <span><h1 className='information__titles'>Total Cases:</h1> {convertNumbers(countryInformation.cases)}</span>

          <span><h1 className='information__titles'>Total Recovered:</h1> {convertNumbers(countryInformation.recovered)}</span>
          <span><h1 className='information__titles'>Continent Located:</h1> {countryInformation.continent}</span>
          <span><h1 className='information__titles'>Total Population:</h1> {convertNumbers(countryInformation.population)}</span>
        </div>)}
      </>
  
    )
  };


export default CountryResults