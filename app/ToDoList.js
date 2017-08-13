import React, {Component} from "react";
import AddToDos from "./AddToDos";
import ShowToDos from "./ShowToDos";
import toDoStore from "./toDoStore";
import {observer, inject} from "mobx-react";
import {observable, autorun} from "mobx";



@observer
class ToDoList extends Component {
	constructor(props) {
		super (props);
	}

	render () {
		return (
			<div className="ToDoList">
				<AddToDos/>
				<ShowToDos/>  
			</div>
		);
	}
}

export default ToDoList;