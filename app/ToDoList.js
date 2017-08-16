import React, {Component} from "react";
import AddToDos from "./AddToDos";
import ShowToDos from "./ShowToDos";
import toDoStore from "./toDoStore";
import {observer, inject} from "mobx-react";
import {observable, autorun} from "mobx";
// import * as style from "./style";						// this is how to import everything from the style file ---> type this to use: style.Button // style.Input etc.
//this is not recommended to do as it requires more ressources & more typing in the long run

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