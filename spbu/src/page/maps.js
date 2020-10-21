import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import datatempat from './tempatspbu';
import './maps.css'

class Maps extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    render() {
        return (
            <div className="containermaps">
                <div className="maps">
                    <Map onClick={this.onMapClicked} google={window.google} initialCenter={{lat: -7.651733, lng: 111.530217}} zoom={9}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Telkom Witel'} 
                                position={{lat: -7.651733, lng: 111.530217}}/>
                        {datatempat.map((item, index) => {
                          return(
                            <Marker key={index} onClick={this.onMarkerClick}
                                    p={item.witel}
                                    name={item.nama} 
                                    position={item.posisi}/>
                          )
                        })}
                        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                                <p>{this.state.selectedPlace.p}</p>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBhNKoO0zok-G32_cVLTOEeXqu4l5cPtDU'
})(Maps)
