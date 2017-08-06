import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun} from "mobx";
import ToDoStore from "./ToDoStore";


@observer
class AddToDos extends Component {
	constructor(props) {
		super(props);
	}

	createToDo () {
		ToDoStore.todos.push({"title": ToDoStore.inputTodo, "note": ToDoStore.inputDescription, "prio": ToDoStore.inputPriority});
		// this.resetData();
	}

	resetData () {		// TODO: doesn't work with this function, only works if input type= reset and all encapsuled by form
		// let dataInputs = document.getElementsByClassName("dataInput");
		// for (let dataInput = 0; dataInput < dataInputs.length; dataInput++) {
		// 	dataInput.value = "";
		// }
		ToDoStore.inputTodo = "";
		ToDoStore.inputDescription = "";
		ToDoStore.inputPriority = "";
	}

	resetList() {			// TODO: problem - gets called/re-rendered all the time without clicking the button
		// ask for confirmation
		//if (confirm("Are you sure that you want to remove all your tasks?") == true ) {
		// have all todos removed
		ToDoStore.todos = [];
		ToDoStore.filter = "";
		ToDoStore.inputTodo = "";
		ToDoStore.inputDescription = "";
		ToDoStore.inputPriority = "";			
		//}
	}

	createTitle (event) {
		this.props.ToDoStore.inputTodo = event.target.value;
		event.target.value = "";
	}

	render () {
		return (
			// <div>
			// 	<input type="text" onChange={e => ToDoStore.inputTodo = e.target.value} />
			// 	<button onClick={() => this.createToDo()}>add</button> 
			// </div>
			// GOOGLE HOW TO EMPTY THE VALUE OF THE INPUT ON BUTTON CLICK
			// "required" form validation only works with input submit not button

			<div className="AddToDos">
				<div>
					<form>
					<div className="title-input">
							Title of your task:
						<input className="dataInput" type="text" onChange={this.createTitle.bind(this)} placeholder="finish todolist" required />							
					</div>

					<div className="note-input">
							Optional Note/Description:
						<textarea className="dataInput" rows="3" cols="20" onChange={e => ToDoStore.inputDescription = e.target.value} placeholder="ask Senpai Steve for help..." />								
					</div>

					<div className="taskprio"> 
						Choose priority of this task: <br></br>
						<input className="dataInput" type="radio" name="taskprio" value="high" onChange={e => ToDoStore.inputPriority = e.target.value} required /> High Prio
						<input className="dataInput" type="radio" name="taskprio" value="low" onChange={e => ToDoStore.inputPriority = e.target.value} required /> Low Prio
						<input className="dataInput" type="radio" name="taskprio" value="reocurring" onChange={e => ToDoStore.inputPriority = e.target.value} required /> Reocurring
						<input className="dataInput" type="radio" name="taskprio" value="none" onChange={e => ToDoStore.inputPriority = e.target.value} required /> Note only					
					</div>

					<input type="button" value="CREATE TASK" onClick={() => this.createToDo()}/>	
					<input type="reset" value="Reset all fields" onClick={() => this.resetData()}/>	

					<button onClick={this.resetList()} >REMOVE ALL TODOS</button>		
					</form>		
				</div>
			</div>
		);
	}
}


export default AddToDos;