import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Wrap from './Wrap';
import './Port.css';

const port = (props) => (

  <Wrap>
    <td>{props.prot}</td>
    <td>{props.localAddress}</td>
    <td>{props.extAddress}</td>
    <td>{props.status}<p className={props.status}></p></td>
  </Wrap>
);

export default port;
