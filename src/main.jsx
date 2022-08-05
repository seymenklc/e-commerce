import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);