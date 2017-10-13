import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tasks: [
                {
                    id: 0,
                    name: "alfa",
                    starred: true
                },
                {
                    id: 1,
                    name: "beta",
                    starred: false
                }, 
                {
                    id: 2,
                    name: "gamma",
                    starred: false
                }
            ], 
            visibilityFilter: null
        };
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.refs.newTaskInput.value.length > 0) {
            let previousTasks = this.state.tasks,
                newTask = {
                    id: previousTasks.length,
                    name: this.refs.newTaskInput.value,
                    starred: false
                };
            previousTasks.push(newTask);
            let currentTasks = previousTasks;
            this.setState({
                tasks: currentTasks
            });
        }
        this.refs.newTaskInput.value = null;
    }
    
    handleRemove = (e) => {
        let taskToRemove = parseInt(e.target.parentElement.dataset.taskid, 10),
            currentTasks = this.state.tasks,
            updatedTasks = currentTasks.filter(task => {
            return task.id !== taskToRemove;
        });
        this.setState({
            tasks: updatedTasks
        });
    }
    
    handleToggleStar = (e) => {
        let taskToToggleStar = parseInt(e.target.parentElement.dataset.taskid, 10),
            currentTasks = this.state.tasks,
            taskObject = currentTasks[taskToToggleStar],
            starValue = taskObject.starred,
            newStarValue = starValue ? false : true;
        taskObject.starred = newStarValue;
        currentTasks.splice(taskToToggleStar, 1, taskObject);
        let updatedTasks = currentTasks;
        this.setState({
            tasks: updatedTasks
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="input-form">
                    <form>
                        <input ref="newTaskInput" id="new-task" type="text" placeholder="add task" />
                        <input type="submit" value="Add" onClick={this.handleSubmit}/>
                    </form>
                </div>
                <div className="task-display-controller">
                    <span></span>
                    <span></span>
                </div>
                <div className="task-display">
                    <ul>
                    {this.state.tasks.map(task => (
                        <li key={task.id} data-taskid={task.id}>
                            <span className={"task-name " + (task.starred ? "starred" : "unstarred")}>{task.name}</span>
                            <button ref="removeBtn" className="remove-btn" onClick={this.handleRemove}>Remove</button>
                            <button ref="toggleStarBtn" className="toggle-star-btn" onClick={this.handleToggleStar}>Star</button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
