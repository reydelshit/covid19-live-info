import React from 'react'
import "../App.css"

const ContinentsButton = ({changeIndex}) => {
  return (
    <div className='button__container'>
          <button onClick={() => changeIndex(0)}>North America</button>
          <button onClick={() => changeIndex(1)}>Asia</button>
          <button onClick={() => changeIndex(2)}>South America</button>
          <button onClick={() => changeIndex(3)}>Europe</button>
          <button onClick={() => changeIndex(4)}>Africa</button>
          <button onClick={() => changeIndex(5)}>Australia Oceania</button>
    </div>
  )
}

export default ContinentsButton