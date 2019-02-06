import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ProcessesTable.css';
import Aux from '../Aux2.js';

const processesTable = (props) => (
  <Aux>
    <table id="main" className="table table-condensed active header-fixed main">
      <thead>
        <tr className='bg-success text-white'>
          <th>NOME PROCESSO</th>
          <th>ID PROCESSO</th>
          <th>NOME SESSIONE</th>
          <th>INFO</th>
          <th>USO MEMORIA (MB)</th>
        </tr>
      </thead>
      <tbody>
        {props.processesList}
      </tbody>
    </table>
  </Aux>
);

export default processesTable;
