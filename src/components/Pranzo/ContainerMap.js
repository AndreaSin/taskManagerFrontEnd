import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Map from './Map';
import Pranzo from './Pranzo';

class ContainerMap extends Component {




  render() {

    return (

      <div>
        <Map google={this.props.google}
          zoom={18}
          style={this.props.style}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}>

          <Marker
            title={'HERE WE ARE'}
            name={'HERE WE ARE NAME'}
            position={{lat: this.props.lat, lng: this.props.lng}} />

          </Map>
        </div>
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCKEMqJRqo-F4vPNovw4zqXcABB1pYEqvU'
  })(ContainerMap)
