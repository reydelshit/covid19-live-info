import React from 'react';

const NorthAmerica = ({asia}) => {
  return(
    <>
    {asia.map((asia, index) => (
        <div key={index}>    
          <h1>Asia</h1>
          <p>Active Cases: <strong>{asia[1].active}</strong></p>
          <p>Deaths: <strong>{asia[1].deaths}</strong></p>
          <p>Recoveries: <strong>{asia[1].recovered}</strong></p>
          <p>Total: <strong>{asia[1].cases}</strong></p>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
