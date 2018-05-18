import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/Sidebar.js';
//import Description from './Description/Description.js'
class App extends Component {
  
  render() {
    return (
      <div className="App">
     <Sidebar/>
     </div>
    )
  }
}

export default App;
