import React, { useEffect, useState } from 'react'
import "../App.css"

const WorldWide = () => {

    const [worldwide, setWorldwide] = useState([])

    useEffect(() => {
    
        const fetchWorldWide = async () => {
          const fetchWorldWideData = await fetch('https://disease.sh/v3/covid-19/all')
          const getWorldWideData = await fetchWorldWideData.json()
          setWorldwide([getWorldWideData])
        }
        fetchWorldWide()
    }, []);

    const convertNumbers = (number) => {
        const num = number.toLocaleString("en-US");
        return num
    }

  return (
    <div className='worldwide__main__container'>
        <h1>Worlwide Cases</h1>
        
        {worldwide.map((world, index) => 
        <div key={index}>
            <div className='worldwide__container'>
                <span>Total Cases</span>
                <span>{convertNumbers(world.cases)}</span>
            </div>
            <div className='worldwide__container'>
                <span>Recovered</span>
                <span>{convertNumbers(world.recovered)}</span>
            </div>
            <div className='worldwide__container'>
                <span>Deaths</span>
                <span>{convertNumbers(world.deaths)}</span>
            </div>
        </div>)}
        

    </div>
  )
}

export default WorldWide