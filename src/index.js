import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Countries from "./routes/Countries"
import Dummy from "./routes/Dummy"

import Main from "./Main"



const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" index element={<Main />} />
        <Route path="/countries" element={<Countries />}>
          <Route path=':country' element={<Dummy />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
