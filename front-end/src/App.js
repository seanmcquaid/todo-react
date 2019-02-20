import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      taskList : []
    }
  }

  componentDidMount(){
    axios({
      method: "GET",
      url : "http://localhost:3000/getTasks",
    }).then((taskListFromBackEnd)=>{
      
    })
  }

  // we can use arrow functions so you DONT HAVE TO BIND!!!
  addNewTask = (task,date)=>{
    console.log(task,date)
    axios({
      method: "POST",
      url : "http://localhost:3000/addTask",
      data: {
        taskName : task,
        taskDate : date
      }
    }).then((backEndResponse)=>{
      // console.log(backEndResponse)
      this.setState({
        taskList: backEndResponse.data
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path="/" render={()=><Home addNewTask={this.addNewTask} taskList={this.state.taskList}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
