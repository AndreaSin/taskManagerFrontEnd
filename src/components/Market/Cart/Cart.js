import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import 'bootstrap/dist/css/bootstrap.css';
import './Cart.css';
import { connect } from 'react-redux';
import {remove} from '../../../Store/actions/actions';

class Cart extends Component {

  state = {
    productsIn: this.props.products,
    counter : 0
  }

  removeProduct(pr) {
    let filtered = this.state.productsIn.filter(function(el) { return el.cod != pr.cod; });
    this.setState({productsIn:filtered})
  }

  render() {
    const productsList = this.state.productsIn.map((product, index) => {
      return (index !=0 ? <div key={index} className="col-lg-6">
        <Product key={index}
          name={product.name}
          description={product.description}
          cod={product.cod}
          price={product.price}
          click={() => this.removeProduct(product)}
          buttonText = "RIMUOVI"/></div> : <div/>);
      });
      return (
        <div className="container-fluid">
          <div className="row">
            {productsList}
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      ctr : state.counter,
      products : state.products
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      removeProduct : (product) => dispatch(remove(product))
    };
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Cart)
