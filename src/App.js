
import './App.css';

import Header from './components/Header'


import { Outlet } from 'react-router-dom';

console.log(Outlet)

function App() {

  
  return ( 
    <div className="App">
      <div className='head__title'>
        <Header />
      </div>
      <Outlet/>
  </div>

  );
}

export default App;
