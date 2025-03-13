import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@ant-design/v5-patch-for-react-19';
import store from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store} >
    <App></App>
  </Provider>
);
