import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun, computed} from "mobx";
import ToDoStore from "./ToDoStore";


@observer
class ShowToDos extends Component {
		constructor(props) {
		super(props);
	}

	// TODO: this shit ain't working
	getStyle(prioType) {
		let color = "";
		let fontWeight = "";
		let fontStyle = "";

		if (prioType =="high") {
			color = "red";
			fontWeight = "bold";
		}
		else if (prioType == "low") {
			color = "yellow";
		}
		else if (prioType == "reocurring") {
			color = "blue";
		}
		else if (prioType == "none") {
			fontStyle = "italic";
		}

		// TODO: why do i even need return
		return {
			color: prioType == this.prioType ? color : "",
			fontStyle: prioType == this.prioType ? fontStyle : "",
			fontWeight: prioType == this.prioType ? fontWeight : ""
		}
	}

	todoFilter() {
		// let filterObject = document.getElementById("filter");
		let filterValue = event.target.value;
		ToDoStore.filter = event.target.value;
		console.log(ToDoStore.filter);
	}

	render () {
		const {todos, filter} = ToDoStore;
		const todoList =  todos.map( (todo, index, prioType) => {
			 {let prioType=todo.prio} 			
			return ( 
				<li style={this.getStyle(prioType)} key={index}>{todo.title} <br></br> {todo.note}</li>
			)  
		})

		return (
			<div className="ShowToDos">
				<h1>current todos</h1>
				<div>{ToDoStore.filter}</div>
				<input id="filter" className="todofilter" onChange={event => ToDoStore.filter = event.target.value} placeholder="filter todos" />
				<ul>{todoList}</ul>
			</div>
		);
	}
}


export default ShowToDos;