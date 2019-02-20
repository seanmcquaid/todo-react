import React,{Component} from "react";
import moment from "moment";
import {Link} from "react-router-dom";

class Home extends Component{
    constructor(){
        super()
        this.state = {
            task : "",
            date : ""
        }
        this.addNewTask = this.addNewTask.bind(this);   
        this.changeTask = this.changeTask.bind(this);
        this.changeDate = this.changeDate.bind(this)
    }

    addNewTask(event){
        // prevents a new http request
        event.preventDefault();
        // console.log("submitted form")
        this.props.addNewTask(this.state.task, this.state.date)
    }
    // event is everything that has happened - including typing when will cause a re render
    changeTask(event){
        // target == input box in this case
        this.setState({
            task: event.target.value,
        })
    }

    changeDate(event){
        this.setState({
            date: event.target.value,
        })
    }
    render(){
        // proof that state updates on every key stroke in input
        // console.log(this.state)
        const taskArray = this.props.taskList.map((task, index)=>{
            return (
                <tr key={task.id}>
                    <td>{task.taskName} - {moment(task.taskDate).format("MM-DD-YYYY")}</td>
                    <td><button className="btn red">Delete</button></td>
                    <td><Link to={"/edit/"+task.id}><button className="btn blue">Edit</button></Link></td>
                </tr>
            )
        })
        // console.log(taskArray)
        return(
            <div className="to-do-app">      
                    <div className="section no-pad-bot" id="index-banner">
                        <div className="container">
                            <h1 className="header center orange-text">To-Do List</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">Made with React and Express</h5>
                            </div>
                        </div>
                    </div>    
                    <div className="container">
                        <form onSubmit={this.addNewTask} className="add-box">
                            <input onChange={this.changeTask} type="text" id="new-task" placeholder="New Task" value={this.state.task}/>
                            <input onChange={this.changeDate} type="date" id="new-task-date" value={this.state.date}/>
                            <button type="submit" className="btn btn-primary">Add Task</button>
                        </form>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taskArray}
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default Home;