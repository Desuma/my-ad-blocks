import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const rootDom = document.createElement('div');
const root = ReactDOM.createRoot(rootDom);

rootDom.className = 'my-ad-blocks';

document.body.appendChild(rootDom);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
