import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product/Product';
import 'bootstrap/dist/css/bootstrap.css';
import './Market.css';
import { connect } from 'react-redux';
import {increment} from '../../Store/actions/actions';
import {add} from '../../Store/actions/actions';
import {remove} from '../../Store/actions/actions';
import {load} from '../../Store/actions/actions';
import {loadTrue} from '../../Store/actions/actions';

class Market extends Component {

  state = {
    products: [
      {
        name: '',
        description: '',
        cod: '',
        price: 0
      }
    ]
  }

  componentDidMount () {
    axios.get('http://localhost:8090/process/getProducts')
    .then( response => {
      this.setState({products: response.data});
    });
  }

  render() {
    const productsList = this.state.products.map((product, index) => {
      return (<div key={index} className="col-lg-3">
        <Product key={index}
          name={product.name}
          description={product.description}
          cod={product.cod}
          price={product.price}
          click={() => this.props.addProduct(product)}
          buttonText = "AGGIUNGI"
        /></div>);
      });

      return (
        <div class="container-fluid">
          <div className="row">
            <h1><span class="ctrContainer">{this.props.ctr}</span></h1>
            <div className="col-lg-12"><img className="cart" src="https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-shopping-cart-6-by-vexels.png"/></div>
          </div>
          <div className="row">
            {productsList}
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {   //fuori dalla classe
    return {
      ctr : state.counter,   //state.counter va a prenderlo dal mio file reducer
      products : state.products
    };  				  // potro usare ctr in questo component come
    // this.props.ctr
  }

  const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter : () => dispatch(increment()),
      addProduct : (product) => dispatch(add(product)),
      loadTrue : () => dispatch(loadTrue()),
      removeProduct : (product) => dispatch(remove(product))
    };
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Market)
