import React, { Component } from 'react';
import axios from 'axios';
import Port from './Port/Port';
import PortTable from './PortsTable/PortsTable';
import 'bootstrap/dist/css/bootstrap.css';
import './Ports.css';

class Ports extends Component {

  state = {
    connections: []
  }

  componentDidMount () {
    axios.get('http://localhost:8080/test/process/ports')
    .then( response => {
      console.log(response.data);
        this.setState({connections: response.data});
    });
  }

  render() {
    var classes;
    const portsList = this.state.connections.map((port, index) => {
      index % 2 !== 0 ? classes = 'bg-light' : classes = 'bg-white';
      return (<tr className={classes} key={index}>
        <Port key={index} prot={port.prot}
          localAddress={port.localAddress} extAddress={port.extAddress}
          status={port.status}/>
        </tr>);
      });
      return ( <div>
        <PortTable portList={portsList}/>
      </div>
    );
  }
}

export default Ports
