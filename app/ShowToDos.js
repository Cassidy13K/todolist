import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {observable, autorun, computed} from "mobx";
import toDoStore from "./toDoStore";
import {clearComplete, todoFilter, setSorting} from "./toDoStoreModifiers";
import {Label, Input, Ul} from "./style";


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

	toggleComplete (todo) {
		todo.complete = !todo.complete;
	}

	// TODO: doesn't work properly
	// somewhere i have to do this - maybe in the file to change the store? for setting initial value --> toDoStore.sorting = "none";
	sortList(todoList) {
		// sort by priority
		if (toDoStore.sorting === "priority") {
			// assemble different priority tasks in individual groups
			const aHighPrioTasks = todoList.filter (todo => todo.prio == "high");
			const bLowPrioTasks = todoList.filter (todo => todo.prio == "low");
			const cRecurringPrioTasks = todoList.filter (todo => todo.prio == "recurring");
			const dNonePrioTasks = todoList.filter (todo => todo.prio == "none");
			return [].concat(aHighPrioTasks, bLowPrioTasks, cRecurringPrioTasks, dNonePrioTasks);
		} else if (toDoStore.sorting === "ABC") {
			return todoList.sort((a, b) =>  a.title > b.title);
		} else if (toDoStore.sorting === "none") {
			return todoList.sort((a, b) => a.taskNumber > b.taskNumber);
		}
		return todoList;
	}

	render () {
		// const {todos} = toDoStore;		// use this instead of toDoStore.whatever if more of the toDoStore is used
		//const shouldSort = true;
		const sortedList = this.sortList(toDoStore.filteredTodos, toDoStore.sorting);
		const todoList =  sortedList.map( (todo, index) => {
			return (
				<li style={this.getStyle(todo.prio)} key={index} > 
					<Input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)} />
					{todo.title}<br></br>{todo.note}
				</li>
			)
		})


		return (
			<div className="ShowToDos">
				<h1 className="title">Current Tasks</h1>
				{/* <div>{toDoStore.filter}</div> */}
				<Input id="filter" className="todofilter" value={toDoStore.filter} onChange={(event) => todoFilter(event.target.value)} placeholder="filter tasks" />
				<a href="#" onClick={() => clearComplete()}>*Clear completed tasks*</a>

				<div className="list-sorting" onChange={(event) => setSorting(event.target.value)} >
					<input type="radio" name="sorting" value="none" checked={toDoStore.sorting == "none"} /> <Label>No sorting</Label>
					<input type="radio" name="sorting" value="priority" checked={toDoStore.sorting == "priority"} /> <Label>Sort tasks by priority</Label>
					<input  type="radio" name="sorting" value="ABC" checked={toDoStore.sorting == "ABC"} /> <Label>Sort tasks alphabetically</Label>
				</div>

				<Ul>{todoList}</Ul>
			</div>
		);
	}
}


export default ShowToDos;