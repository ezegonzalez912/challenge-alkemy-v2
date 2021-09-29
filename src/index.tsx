import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import "./styles/config.css";
import "./styles/index.css";
import "./styles/login.css";
import "./styles/home.css";
import "./styles/home-card.css";
import "./styles/search.css";
import "./styles/modal.css";
import "./styles/ui.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
