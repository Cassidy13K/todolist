import React, {Component} from "react";
import AddToDos from "./AddToDos";
import ShowToDos from "./ShowToDos";
import ToDoStore from "./ToDoStore";
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
				{/* {ToDoStore.todos} */}
			</div>
		);
	}
}

export default ToDoList;