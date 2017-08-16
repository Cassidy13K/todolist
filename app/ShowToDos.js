import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun, computed} from "mobx";
import toDoStore from "./toDoStore";
import {Label, Input} from "./style";


@observer
class ShowToDos extends Component {
		constructor(props) {
		super(props);
	}

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

		// return here all style-elements which got changed above
		return {
			color,
			fontStyle,
			fontWeight
		}
	}

	todoFilter(value) {
		toDoStore.filter = value;
		// console.log(toDoStore.filter);
	}

	toggleComplete (todo) {
		todo.complete = !todo.complete;
	}

	// TODO: doesn't work properly
	// sort by priority
	sortList(todoList) {
		if (toDoStore.sorting === "priority") {
			// assemble different priority tasks in individual groups
			const aHighPrioTasks = todoList.filter (todo => todo.prio == "high");
			const bLowPrioTasks = todoList.filter (todo => todo.prio == "low");
			const cRecurringPrioTasks = todoList.filter (todo => todo.prio == "recurring");
			const dNonePrioTasks = todoList.filter (todo => todo.prio == "none");
			return [].concat(aHighPrioTasks, bLowPrioTasks, cRecurringPrioTasks, dNonePrioTasks);
		} else if (toDoStore.sorting === "ABC") {
			return todoList.sort((a, b) =>  a-b)
		// } else if (toDoStore.sorting === "none") {
		// 	return todoList.sort()
		}
		return todoList;
	}

	render () {
		// const {todos} = toDoStore;		// use this instead of toDoStore.whatever if more of the toDoStore is used
		//const shouldSort = true;
		const sortedList = this.sortList(toDoStore.filteredTodos, toDoStore.sorting);
		const todoList =  sortedList.map( (todo, index) => {
			return (
				<li style={this.getStyle(todo.prio)} key={index}> 
					<Input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)} />
					{todo.title}<br></br>{todo.note}
				</li>
			)
		})


		return (
			<div className="ShowToDos">
				<h1 className="title">Current Tasks</h1>
				{/* <div>{toDoStore.filter}</div> */}
				<Input id="filter" className="todofilter" value={toDoStore.filter} onChange={(event) => this.todoFilter(event.target.value)} placeholder="filter tasks" />
				<a href="#" onClick={toDoStore.clearComplete}>*Clear completed tasks*</a>

				<div className="list-sorting" onChange={e => toDoStore.sorting = e.target.value} >
					<input type="radio" name="sorting" value="none"  defaultChecked/> <Label>No sorting</Label>
					<input type="radio" name="sorting" value="priority" /> <Label>Sort tasks by priority</Label>
					<input  type="radio" name="sorting" value="ABC" /> <Label>Sort tasks alphabetically</Label>
				</div>

				<ul>{todoList}</ul>
			</div>
		);
	}
}


export default ShowToDos;