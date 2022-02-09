import React from 'react';

import '../assets/CovidData.css'

const NorthAmerica = ({africa}) => {

    const convertNumbers = (number) => {
      const num = number.toLocaleString("en-US");
      return num
  }

  return(
    <>
    {africa.map((africa, index) => (
        <div className='covidData__main__container' key={index}>    
            <div className='covidData__container'>
                <span>Total Cases</span>
                <span>{convertNumbers(africa[4].cases)}</span>
            </div>
            <div className='covidData__container'>
                <span>Recovered</span>
                <span>{convertNumbers(africa[4].recovered)}</span>
            </div>
            <div className='covidData__container'>
                <span>Deaths</span>
                <span>{convertNumbers(africa[4].deaths)}</span>
            </div>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
