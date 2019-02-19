import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import axios from "axios";

class App extends Component {
  // we can use arrow functions so you DONT HAVE TO BIND!!!
  addNewTask = (task,date)=>{
    // console.log(task,date)
    axios({
      method: "POST",
      url : "http://localhost:3000/addTask",
      data: {
        taskName : task,
        taskDate : date
      }
    }).then((backEndResponse)=>{
      console.log(backEndResponse)
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
