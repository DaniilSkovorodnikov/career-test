import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').style.height = '100%';
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);