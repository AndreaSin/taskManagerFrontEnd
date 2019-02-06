import React, { Component } from 'react';
import Processes from './Processes/Processes';
import Ports from './Ports/Ports';
import Pranzo from './Pranzo/Pranzo';
import Market from './Market/Market';
import Cart from './Market/Cart/Cart';
import {Route, NavLink} from 'react-router-dom';
import Reducer from '../Store/Reducer.js';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const styles = {
  title: {
    fontFamily: 'Audiowide',
    float:'right',
    fontSize : '36px',
    marginRight : '95px'
  },
  navbar: {
    fontFamily: 'Audiowide',
    fontSize : '19px',
  },
  bar: {
    position: 'fixed',
    top: '0',
    overflow: 'hidden',
    width: '100%',
    zIndex: '999'
  },
  sign: {
    fontFamily: 'Sedgwick Ave Display',
    fontSize : '23px',
  },
  bod: {
    marginTop : '80px'
  }
}

class Menu extends Component {
  render() {
    // const store = createStore(Reducer);
    // var ctr = store.getState().counter;
    // console.log(ctr);
    // var counterCart;
    // ctr === 0 ? counterCart = 2 : counterCart = ctr;

    //<li id="crt" style={styles.navbar}><NavLink exact to="/cart">SHOPPING CART</NavLink></li>
    //<li style={styles.navbar}><NavLink exact to="/market">MARKET</NavLink></li>

    return (
      <div style={styles.bod}>
        <header>
          <nav style={styles.bar}>
            <ul>
              <li style={styles.navbar}><NavLink exact to="/">PROCESSI</NavLink></li>
              <li style={styles.navbar}><NavLink exact to="/ports">STATO PORTE</NavLink></li>
              <li style={styles.navbar}><NavLink exact to="/map">MAPPA</NavLink></li>
              <li style={styles.title}>TASK MANAGER!<span style={styles.sign}>(Sinatora Andrea)</span></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Processes}/>
        <Route path="/ports" exact component={Ports}/>
        <Route path="/map" exact component={Pranzo}/>
        <Route path="/market" exact component={Market}/>
        <Route path="/cart" exact component={Cart}/>
      </div>
    );
  }
}




export default Menu;
