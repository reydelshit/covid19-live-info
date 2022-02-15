import React from 'react';
import '../assets/Header.css'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <Link to="/">homee</Link>  
      <ul>
          <li>
            <Link to="/countries">country</Link>
          </li>
      </ul>
        <div>
          <h1>dark</h1>
        </div>
        
    </header>

  );
}

export default Header;
