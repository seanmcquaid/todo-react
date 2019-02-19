import React from "react";

function Home(props){
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
                    <form onSubmit={props.addNewTask} className="add-box">
                        <input type="text" id="new-task" placeholder="New Task" />
                        <input type="date" id="new-task-date" />
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
                            
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Home;