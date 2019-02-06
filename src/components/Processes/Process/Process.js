import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Wrap from './Wrap';

const process = (props) => (
  <Wrap>
    <td>{props.nomeImmagine}</td>
    <td>{props.pid}</td>
    <td>{props.nomeSessione}</td>
    <td><button className='btn btn-success btn-md' onClick={props.click}>INFO</button></td>
    <td>{props.memUse}</td>
  </Wrap>
);

export default process;
