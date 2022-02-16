import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

import "../App.css"
import ListCountry from '../components/ListCountry';

import "../App.css"


const Countries = () => {

  const [countryName, setCountryName] = useState([])

  useEffect(() => {
    
      const fetchCountry = async () => {
        const fetchCountryData = await fetch('https://disease.sh/v3/covid-19/countries')
        const getCountry = await fetchCountryData.json()
        
      const bro = getCountry.map((wo) => {
        return wo.country
    })
      setCountryName(bro)
     }
      fetchCountry()
  }, []);

  // console.log(countryName)


  const [country, setCountry] = useState('')

  const getCountryData = (e) => {
    const convertLowerCase = e.target.value.toLowerCase()
    // console.log(convertLowerCase)
    setCountry(convertLowerCase)
  }
  
  const filterSearch = countryName.filter((filtered) => {
    if(country === ''){
      return filtered
    } else {
      return filtered.toLowerCase().includes(country)
    }
  })

  const dontShow = () => {
    setCountry('')
  }

  return (
    <div className='countrySearch__container'>
    <div className='countrySearch'>
      <h1>Search Country</h1>
      <p>The Information is from Worldometers, it will only updated for every 10 minutes</p>
      <input style={{color: 'black'}} type="text" onChange={getCountryData}/>
        {country ? <div onClick={dontShow} className='countryName__container'>
        {filterSearch.map((countryName, index) => 
          <ListCountry countryName={countryName} key={index}/>)}
        </div> : ''}
    </div>
      <Outlet/>
    </div>
  )
}

export default Countries