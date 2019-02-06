import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './PortsTable.css';
import Aux from '../Aux2.js';

const portsTable = (props) => (
  <Aux>
    <table className="table table-condensed active header-fixed main">
      <thead>
        <tr className='bg-success text-white'>
          <th>PROTOCOLLO</th>
          <th>INDIRIZZO LOCALE</th>
          <th>INDIRIZZO ESTERNO</th>
          <th>STATO</th>
        </tr>
      </thead>
      <tbody>
        {props.portList}
      </tbody>
    </table>
  </Aux>
);

export default portsTable;
