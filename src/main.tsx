import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
);

