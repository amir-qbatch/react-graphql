import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App.jsx';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes.jsx';

  ReactDOM.render((
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ), document.getElementById('app'))

