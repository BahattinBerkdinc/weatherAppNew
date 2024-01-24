import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { Provider as StoreProvider } from "react-redux";
import App from './App';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

