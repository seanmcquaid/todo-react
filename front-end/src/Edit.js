import React, {Component} from "react";
import axios from "axios";
import moment from "moment";

class Edit extends Component {
    constructor(){
        super()
        this.state= {
            task: {}
        }
    }

    changeTask = (event)=>{
        const value = event.target.value;
        let taskStateCopy = {...this.state.task}
        // let stateCopy = Object.assign({},this.state.task)
        // stateCopy is now an object with :
        // {taskName : "", taskDate : "date here"}
        taskStateCopy.taskName = value;
        this.setState({
            task : taskStateCopy
        })
    }

    changeDate = (event)=>{
        let value = event.target.value;
        let taskStateCopy = {...this.state.task};
        taskStateCopy.taskDate = value;
        this.setState({
            task : taskStateCopy
        })
    }

    componentDidMount(){
        // console.log(this.props)
        const tid = this.props.match.params.id
        axios({
            method: "GET",
            url: `http://localhost:3000/getTask/${tid}`
        }).then((taskFromBackEnd)=>{
            // console.log(taskFromBackEnd.data.task)
            this.setState({
                task : taskFromBackEnd.data.task
            })
        })
    }

    editTask = (event)=>{
        event.preventDefault()
        axios({
            method: "POST",
            data: {
                task : this.state.task,
                id : this.props.match.params.id,
            },
            url : `http://localhost:3000/edit`
        }).then((jsonData)=>{
            // console.log(jsonData.data)
            if(jsonData.data.msg === "updated"){
                // the backend succeeded
                // console.log(this.props.history)
                this.props.history.push("/");
            }
        })
    }
    render(){
        // console.log(this.state.task)
        return(
            <div className="container">
                <form onSubmit={this.editTask} className="add-box">
                    <input onChange ={this.changeTask} type="text" id="new-task" placeholder="New Task" value={this.state.task.taskName}/>
                    <input onChange = {this.changeDate} type="date" id="new-task-date" value={moment(this.state.task.taskDate).format("YYYY-MM-DD")}/>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}

export default Edit;