import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

class App extends Component {
  constructor(){
    super()
    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask(event){
    // stops the page from rerendering
    event.preventDefault()
    this.setState({
      task: event.target[0].value,
      date: event.target[1].value
  })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Navbar}/>
          <Route path="/" render={()=><Home addNewTask={this.addNewTask}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
