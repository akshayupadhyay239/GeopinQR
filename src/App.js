import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
//importing all the components
import Qrlayout from './components/QRlayout';
import Illustration from './components/Illustration';
import MapContainer from './components/Map';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      longitude:37.76,
      latitude:-122.4469157
    }
  }

  render(){return (
    <div className="App">
      <Illustration />
      <div className="main">
        <Qrlayout />
      </div> 
     <Map google={this.props.google}/>
    </div>
  );
  }
}

export default App;
