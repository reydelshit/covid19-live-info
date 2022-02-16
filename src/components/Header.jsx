import React from 'react';

import "../App.css"

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <Link to="/">Homee</Link>  
      <ul>
          <li>
            <Link to="/countries">Country Data</Link>
          </li>
      </ul>
        <div className='github__icon'>
            <a href="https://github.com/reydelshit/covid19-live-info"><i class="fa-brands fa-github"></i></a>
        </div>
        
    </header>

  );
}

export default Header;
