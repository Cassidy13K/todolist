import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";
import {injectGlobal} from "styled-components";

ReactDOM.render(<ToDoList />, document.getElementById("root"));

// USING Provider & inject // instead of importing/exporting files

// import {Provider} from "mobx-react";
// import toDoStore from "./toDoStore";

// ReactDOM.render(<Provider toDoStore={toDoStore} > <ToDoList /> </Provider>, document.getElementById("root"));

injectGlobal`
body{
font-family: "Sedgwick Ave", cursive;
}
`;