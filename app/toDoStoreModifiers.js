import toDoStore from "./toDoStore";

// do these have to be observer?

// toDoStore.totalTaskNumber = 0;
// toDoStore.complete = "false";
// @ first opening of program


// make this do --> totalTaskNumber + 1
const createToDo = () => {		
	if (toDoStore.inputTodo != "" && toDoStore.inputPriority != "") {
		toDoStore.todos.push({
			"title": toDoStore.inputTodo, 
			"note": toDoStore.inputDescription, 
			"prio": toDoStore.inputPriority,
			"complete": toDoStore.complete,
			"taskNumber": toDoStore.totalTaskNumber
		});
		resetData();
		toDoStore.totalTaskNumber++; 
	}
	else {
		toDoStore.errorCreate = "Please choose a title & priority for your task!";
	}
};

// various store clearing functions below -- replace store parts but inputs outside this don't update/re-render to the new value
// clears all inputs
const resetData = () => {		
	toDoStore.inputTodo="";
	toDoStore.inputDescription = "";
	toDoStore.inputPriority = "";
	toDoStore.filter = "";
	toDoStore.errorCreate = "";
};

// resets all tasks & inputs & toDoStore
const resetList = () => {				
	if (confirm("Are you sure that you want to remove all your tasks?") == true ) {
		toDoStore.todos = [];
		resetData();
	}
};

// removes completed tasks
const clearComplete = () => {
	const incompleteTodos = toDoStore.todos.filter( todo => !todo.complete);
	toDoStore.todos.replace(incompleteTodos);
};

const todoFilter = (value) => {		
	toDoStore.filter = value;
	// console.log(toDoStore.filter);
};

// const setTitle = (value) => {
// 	toDoStore.inputTodo = value;
// };

const setToDo = (input, value) => {
	switch (input) {
	case "title":
		toDoStore.inputTodo = value;
		break;
	case "description":
		toDoStore.inputDescription = value;
		break;	
	case "priority":
		toDoStore.inputPriority = value;
		break;
	default:
		console.log("toDoStoreModifiers.setToDo (input, value) {ERROR: default called; input not working}");	
		break;		
	}
};

const setSorting = (value) => {
	toDoStore.sorting = value;
};

// put all the functions in here, export separately

export { createToDo, resetData, resetList, clearComplete, todoFilter, setToDo, setSorting };