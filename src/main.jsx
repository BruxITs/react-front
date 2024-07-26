import React from 'react';
import { BrowserRouter } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <PrimeReactProvider>

    <App />
    </PrimeReactProvider>

  </React.StrictMode>
  </BrowserRouter>

);
