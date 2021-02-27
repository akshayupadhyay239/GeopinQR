import React from 'react';
import './App.css';
//importing all the components
import Qrlayout from './components/QRlayout';
import Illustration from './components/Illustration';
import Map from './components/Map';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      longitude:37.76,
      latitude:-122.4469157
    }
  }

  componentDidMount(){
    var latitude = this.state.latitude
    var longitude = this.state.longitude
    var latlng = new google.maps.LatLng(latitude,longitude);
     // Set map options
     var myOptions = {
     zoom: 16,
     center: latlng,
     panControl: true,
     zoomControl: true,
     scaleControl: true,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     // Create map object with options
     map = new google.maps.Map(document.getElementsByClassName("mapcanvas"), myOptions);
     // Create and set the marker
     marker = new google.maps.Marker({
     map: map,
     draggable:true,
     position: latlng
     });
     
     // Register Custom "dragend" Event
     google.maps.event.addListener(marker, 'dragend', function() {
     
     // Get the Current position, where the pointer was dropped
     var point = marker.getPosition();
     // Center the map at given point
     map.panTo(point);
     // Update the textbox
     this.setState({
       latitude:point.lat(),
       latitude:point.lng()
      })

     });

  }

  render(){return (
    <div className="App">
      <Illustration />
      <div className="main">
        <Map />
        <Qrlayout />
      </div>
      <div className="mapcanvas">
      </div> 
    </div>
  );
  }
}

export default App;
