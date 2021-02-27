import React from 'react';
import './App.css';
//importing all the components
import Qrlayout from './components/QRlayout';
import Illustration from './components/Illustration';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Illustration />
      <div className="main">
        <Qrlayout />
      </div>
      <Map />
    </div>
  );
}

export default App;
