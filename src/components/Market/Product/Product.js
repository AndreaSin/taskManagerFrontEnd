import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Wrap from './Wrap';
import './Product.css';

const product = (props) => (
  <div className="prod">
    <h1>{props.name}</h1>
    <img style={{width: '100px', height: '100px'}} src="http://italiano.eoialmeria.org/imagenes/libro.png"/>
    <p>"{props.description}"</p>
    <h4>{props.price} €</h4>
    <p><button onClick={props.click}>{props.buttonText}</button></p>
  </div>
);

export default product;
