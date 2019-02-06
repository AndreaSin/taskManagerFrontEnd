import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Store/Reducer.js';
import thunk from 'redux-thunk';
import axios from 'axios';

const store = createStore(Reducer,applyMiddleware(thunk));
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
