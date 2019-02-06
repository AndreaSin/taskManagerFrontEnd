import React, { Component } from 'react';
import './App.css';
import Processes from './components/Processes/Processes';
import Ports from './components/Ports/Ports';
import Pranzo from './components/Pranzo/Pranzo';
import Market from './components/Market/Market';
import Cart from './components/Market/Cart/Cart';
import {Route, NavLink} from 'react-router-dom';
import Reducer from './Store/Reducer.js';
import {createStore } from 'redux';
import Menu from './components/menu';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Menu/>
      </BrowserRouter>
    );
  }
}


export default App;
