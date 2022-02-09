import React from 'react';

const NorthAmerica = ({europe}) => {
  return(
    <>
    {europe.map((europe, index) => (
        <div key={index}>    
          <h1>AFRICA</h1>
          <p>Active Cases: <strong>{europe[3].active}</strong></p>
          <p>Deaths: <strong>{europe[3].deaths}</strong></p>
          <p>Recoveries: <strong>{europe[3].recovered}</strong></p>
          <p>Total: <strong>{europe[3].cases}</strong></p>
        </div>
      ))}
    </>
  );
};

export default NorthAmerica;
