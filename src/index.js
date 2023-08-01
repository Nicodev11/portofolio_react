import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/_navigation'
import Footer from './Components/_footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
        <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
