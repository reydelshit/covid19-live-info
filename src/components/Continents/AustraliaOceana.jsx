import React from 'react';

const NorthAmerica = ({australia}) => {
  return(
    <>
    {australia.map((australia, index) => (
        <div key={index}>    
          <h1>AUSTRALIA</h1>
          <p>Active Cases: <strong>{australia[5].active}</strong></p>
          <p>Deaths: <strong>{australia[5].deaths}</strong></p>
          <p>Recoveries: <strong>{australia[5].recovered}</strong></p>
          <p>Total: <strong>{australia[5].cases}</strong></p>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
