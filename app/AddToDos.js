import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun} from "mobx";
import toDoStore from "./toDoStore";
import { createToDo, resetData, resetList, setToDo } from "./toDoStoreModifiers";
import ShowToDos from "./ShowToDos";
import {P, Button, Submit, Label, Input, Textarea, Radio} from "./style";
import styled from "styled-components";

@observer
class AddToDos extends Component {
	constructor(props) {
		super(props);
	}

	// example of external function instead of inline
	// onChange={(event) => this.createTitle(event)}
	// createTitle (event) {
	// 	toDoStore.inputTodo = event.target.value;
	// }
	// inline --> onChange={e => toDoStore.inputDescription = e.target.value}

	submitStyle () { 
		console.log("test submitStyle");
	// 	if (toDoStore.inputTodo !== "" && toDoStore.inputPriority !== "") {
	// 		styled `cursor: pointer;`;
	// 	} else {
	// 		styled `cursor: not-allowed;`;
	// 	}
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
						<Input className="dataInput" type="text" value={toDoStore.inputTodo} onChange={(event) => setToDo("title", event.target.value)} placeholder="finish todolist" />							
					</div>

					<div className="note-input">
							<P>Optional Note/Description: </P>
						<Textarea className="dataInput" rows="3" cols="20"  value={toDoStore.inputDescription} onChange={(event) => setToDo("description", event.target.value)} placeholder="ask Senpai Steve for help..." />								
					</div>
					{/* toDoStore.inputPriority = event.target.value */}
					{/* this doesn't work for priority cuz of delay {(event) => setToDo("priority", event.target.value)} */}
					<div className="taskprio" onChange={(event) => setToDo("priority", event.target.value)} > 
						<P>Choose priority of this task: </P><br></br>
						<Label><Radio className="dataInput" type="radio" name="taskprio" value="high"  checked={toDoStore.inputPriority =="high"}/> High Prio</Label>
						<Label><Radio className="dataInput" type="radio" name="taskprio" value="low" checked={toDoStore.inputPriority == "low"}/> Low Prio</Label>
						<Label><Radio className="dataInput" type="radio" name="taskprio" value="recurring" checked={toDoStore.inputPriority == "recurring"}/> Recurring</Label>
						<Label><Radio className="dataInput" type="radio" name="taskprio" value="none" checked={toDoStore.inputPriority == "none"}/> None / Note only</Label>				
					</div>

					<div className="submit-buttons">
						<Button style={this.submitStyle()} onClick={() => createToDo()}>CREATE TASK</Button>
						<Button onClick={() => resetData()}>RESET ALL FIELDS</Button>

						<Button onClick={() => resetList()}>REMOVE ALL TASKS</Button>	
					
						<P id="errorCreate">{toDoStore.errorCreate}</P>
					</div>

				</div>
			</div>
		);
	}
}


export default AddToDos;