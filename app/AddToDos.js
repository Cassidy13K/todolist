import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun} from "mobx";
import toDoStore from "./toDoStore";
import ShowToDos from "./ShowToDos";
import {P, Button, Submit, Label, Input, Textarea} from "./style";

@observer
class AddToDos extends Component {
	constructor(props) {
		super(props);
	}

	createToDo () {
		if (toDoStore.inputTodo != "" && toDoStore.inputPriority != "") {
			toDoStore.todos.push({"title": toDoStore.inputTodo, "note": toDoStore.inputDescription, "prio": toDoStore.inputPriority, "complete": toDoStore.complete=false});
			toDoStore.resetData();
		}
		else {
			toDoStore.errorCreate = "Please choose a title & priority for your task!"
		}
	}

	// example of external function instead of inline
	createTitle (event) {
		toDoStore.inputTodo = event.target.value;
	}

	render () {
		return (
			// <div>
			// 	<input type="text" onChange={e => toDoStore.inputTodo = e.target.value} />
			// 	<button onClick={() => this.createToDo()}>add</button> 
			// </div>

			<div className="AddToDos">
				<div>
					
					<div className="title-input">
							<P>Title of your task: </P>
						<Input className="dataInput" type="text" value={toDoStore.inputTodo} onChange={(event) => this.createTitle(event)} placeholder="finish todolist" />							
					</div>

					<div className="note-input">
							<P>Optional Note/Description: </P>
						<Textarea className="dataInput" rows="3" cols="20"  value={toDoStore.inputDescription} onChange={e => toDoStore.inputDescription = e.target.value} placeholder="ask Senpai Steve for help..." />								
					</div>

					<div className="taskprio" onChange={e => toDoStore.inputPriority = e.target.value} > 
						<P>Choose priority of this task: </P><br></br>
						<Input className="dataInput" type="radio" name="taskprio" value="high"  checked={toDoStore.inputPriority =="high"}/> <Label>High Prio</Label>
						<Input className="dataInput" type="radio" name="taskprio" value="low" checked={toDoStore.inputPriority == "low"}/> <Label>Low Prio</Label>
						<Input className="dataInput" type="radio" name="taskprio" value="recurring" checked={toDoStore.inputPriority == "recurring"}/> <Label>Recurring</Label>
						<Input className="dataInput" type="radio" name="taskprio" value="none" checked={toDoStore.inputPriority == "none"}/> <Label>None / Note only</Label>				
					</div>

					<div className="submit-buttons">
						<Submit onClick={() => this.createToDo()}>CREATE TASK</Submit>
						<Button onClick={() => toDoStore.resetData()}>RESET ALL FIELDS</Button>

						<Button onClick={() => toDoStore.resetList()}>REMOVE ALL TASKS</Button>	
					
						<P id="errorCreate">{toDoStore.errorCreate}</P>
					</div>

				</div>
			</div>
		);
	}
}


export default AddToDos;