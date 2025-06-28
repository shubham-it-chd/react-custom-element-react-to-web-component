import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import r2wc from 'react-to-webcomponent';

const wcApp = r2wc(App, React, ReactDOM);

customElements.define('my-react-app', wcApp);
