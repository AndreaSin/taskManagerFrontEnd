import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import ContainerMap from './ContainerMap';
import 'bootstrap/dist/css/bootstrap.css';

class Pranzo extends Component {



  render() {
    const style = {
      width: '1600px',
      height: '600px',
      margin: '0 auto'
    }
    return !this.props.isGeolocationAvailable
    ? <div>Your browser does not support Geolocation</div>
    : !this.props.isGeolocationEnabled
    ? <div>Geolocation is not enabled</div>
    : this.props.coords
    ? <div>
      <ContainerMap style={style} lat={this.props.coords.latitude} lng={this.props.coords.longitude}/>
    </div>
    : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Pranzo);
