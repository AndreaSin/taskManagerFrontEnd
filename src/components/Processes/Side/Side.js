import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Aux from '../Aux2.js';
import axios from 'axios';
import './Side.css';

class Side extends Component {

  state = {
    id: 'aa',
    text : ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({id:nextProps});
    axios.get('http://localhost:8080/test/process/name?id=' + nextProps.nameId)
    .then( response => {
      this.setState({text:response.data});
      })
    }

    render() {
      return(<Aux>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="text">
            <h2>{this.props.nameId}</h2><br/>
            <p>{this.state.text}</p>
          </div>
          </div>
        </Aux>);
      }
    }
    export default Side;
