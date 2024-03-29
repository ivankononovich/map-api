import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/createStore';
import App from './App';
import './style/index.css';


render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('root')
)