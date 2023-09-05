import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylesheets/style.css"
import {Provider} from 'react-redux';
import ReduxStore from './store/index';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={ReduxStore()}>
      <App />
    </Provider>
  </>
);


