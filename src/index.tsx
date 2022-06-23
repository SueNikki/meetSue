import React from 'react';
import ReactDOM from 'react-dom/client';
import { AliveScope } from 'react-activation';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AliveScope>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AliveScope>
  </React.StrictMode>
);

