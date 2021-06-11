import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Route';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <MainRoute />
    </div>
  </BrowserRouter>,
  document.querySelector('#root'),
);
