import React from 'react';

const NorthAmerica = ({southAmerica}) => {
  return(
    <>
    {southAmerica.map((south, index) => (
        <div key={index}>    
          <h1>SOUTH AMERICA</h1>
          <p>Active Cases: <strong>{south[2].active}</strong></p>
          <p>Deaths: <strong>{south[2].deaths}</strong></p>
          <p>Recoveries: <strong>{south[2].recovered}</strong></p>
          <p>Total: <strong>{south[2].cases}</strong></p>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
