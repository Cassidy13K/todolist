import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";
// import {Provider} from "mobx-react";
// import ToDoStore from "./toDoStore";

// ReactDOM.render(<Provider {...ToDoStore}> <ToDoList /> </Provider>, document.getElementById("root"));
ReactDOM.render(<ToDoList />, document.getElementById("root"));