import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'


import "../App.css"

const Dummy = () => {

  const country = useParams()

  const [dada, setDada] = useState([])

  useEffect(() => {

    const fetchCountry = async () => {
      const fetchCountryData = await fetch(`https://disease.sh/v3/covid-19/countries/${country.country}`)
      const getCountry = await fetchCountryData.json()
      setDada([getCountry])
      console.log(getCountry)
    
    }
    fetchCountry()

}, [country]);


  return (
    <>
    {dada.map((hey, index) => 
    <div className='modal' key={index}>
      <h1>{hey.country}</h1>
      <h1>Active: {hey.active}</h1>
    </div>)}

    </>

  )
}

export default Dummy