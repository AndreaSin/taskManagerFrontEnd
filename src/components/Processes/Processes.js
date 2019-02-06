import React, { Component } from 'react';
import axios from 'axios';
import Process from './Process/Process';
import Side from './Side/Side';
import ProcessesTable from './ProcessesTable/ProcessesTable';
import 'bootstrap/dist/css/bootstrap.css';
import './Processes.css';

class Processes extends Component {

  state = {
    clickedId: '',
    processes: []
  }

  componentDidMount () {
    axios.get('http://localhost:8080/test/process/listProcRest')
    .then( response => {
      this.setState({processes: response.data});
    });
  }

  openNav(nomeId) {

    if (nomeId !== this.state.clickedId)
    {
      this.setState({showPane: !this.state.showPane});
      this.setState({clickedId: nomeId});
      document.getElementById("mySidenav").style.width = "500px";
    }
    else
    {
      document.getElementById("mySidenav").style.width = "0";
      this.setState({clickedId: ''});
    }
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    this.setState({clickedId: ''});
  }

  render() {
    var classes;
    const procesesList = this.state.processes.map((process, index) => {
      index % 2 !== 0 ? classes = 'bg-light' : classes = 'bg-white';
      return (<tr className={classes} key={index}>
        <Process key={index} nomeImmagine={process.nomeImmagine}
          pid={process.pid} nomeSessione={process.nomeSessione}
          memUse={process.memUse} click={ () =>this.openNav(process.nomeImmagine)}/>
        </tr>);
      });
      return (
        <div>
          <Side nameId = {this.state.clickedId} paneState={this.state.showPane} close={() => this.closeNav()}/>
          <ProcessesTable className="main" processesList={procesesList}/>
        </div>
      );
    }
  }

  export default Processes;
