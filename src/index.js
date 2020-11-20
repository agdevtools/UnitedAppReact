import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { AppProvider } from './context2'

ReactDOM.render(
<AppProvider>
    <App />
</AppProvider>,
  document.getElementById('root')
);

