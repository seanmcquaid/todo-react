import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Edit from "./Edit";
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
      // console.log(taskListFromBackEnd.data);
      this.setState({
        taskList : taskListFromBackEnd.data
      })
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
          <Route exact path="/edit/:id" component={Edit}/>
        </div>
      </Router>
    );
  }
}

export default App;
