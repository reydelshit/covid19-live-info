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
        <Route index element={<Main />} />
          <Route path="dummy" element={<Dummy />} />
          <Route path="countries" element={<Countries />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
