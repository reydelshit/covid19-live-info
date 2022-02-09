import React from 'react';

const NorthAmerica = ({northAmerica}) => {
  return(
    <>
    {northAmerica.map((north, index) => (
        <div key={index}>    
          <h1>NORTH AMERICA</h1>
          <p>Active Cases: <strong>{north[0].active}</strong></p>
          <p>Deaths: <strong>{north[0].deaths}</strong></p>
          <p>Recoveries: <strong>{north[0].recovered}</strong></p>
          <p>Total: <strong>{north[0].cases}</strong></p>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
