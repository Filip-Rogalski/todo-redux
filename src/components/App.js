import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let text = this.refs.newTaskInput.value;
        console.log(text);
        this.props.addTodo(text);
        
        /*
        if (this.refs.newTaskInput.value.length > 0) {
            
            
            let previousTasks = this.props.value.tasks,
                counter = this.state.counter,
                newTask = {
                    id: counter,
                    name: this.refs.newTaskInput.value,
                    starred: false
                };
            previousTasks.push(newTask);
            let currentTasks = previousTasks;
            this.setState({
                tasks: currentTasks,
                counter: counter + 1
            });
        }
        */
        this.refs.newTaskInput.value = null;
    }
    
    handleRemove = (e) => {
        let taskToRemove = parseInt(e.target.parentElement.dataset.taskid, 10);
        console.log(taskToRemove);
        this.props.removeTodo(taskToRemove);
        
        /*
            currentTasks = this.state.tasks,
            updatedTasks = currentTasks.filter(task => {
            return task.id !== taskToRemove;
        });
        this.setState({
            tasks: updatedTasks
        });
        */
    }
    
    handleToggleStar = (e) => {
        /*
        let taskToToggleStar = parseInt(e.target.parentElement.dataset.taskid, 10),
            currentTasks = this.state.tasks,
            taskObject = currentTasks.find(task => task.id === taskToToggleStar),
            taskPosition = currentTasks.indexOf(taskObject),
            starValue = taskObject.starred,
            newStarValue = starValue ? false : true;
        taskObject.starred = newStarValue;
        currentTasks.splice(taskPosition, 1, taskObject);
        let updatedTasks = currentTasks;
        this.setState({
            tasks: updatedTasks
        });
        */
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
                    {this.props.value.tasks.map(task => (
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
