import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ReduxStor from './store/indexStore';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStor()}>
      <App />
    </Provider>
  </React.StrictMode>
);

