import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Navbar}/>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
