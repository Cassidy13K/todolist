import {observer, inject} from "mobx-react";
import {observable, autorun, computed} from "mobx";


class ToDoStore {
	@observable inputTodo = ""
	@observable inputDescription = ""
	@observable inputPriority = ""
	@observable complete = ""
	@observable todos = []
	@observable filter = ""
	@observable errorCreate = ""
	@observable sorting = ""

	@computed get filteredTodos() {
		let matchesFilter = new RegExp(this.filter, "i")
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title) || matchesFilter.test(todo.note) || matchesFilter.test(todo.prio) || matchesFilter.test(todo.complete))
	}


// various store clearing functions below -- replace store parts but inputs outside this don't update/re-render to the new value
	// clears all inputs
	resetData () {		
		this.inputTodo="";
		this.inputDescription = "";
		this.inputPriority = "";
		this.filter = "";
		this.errorCreate = "";
	}

	// resets all tasks & inputs & toDoStore
	resetList() {			
		if (confirm("Are you sure that you want to remove all your tasks?") == true ) {
			this.todos = [];
			this.resetData();
		}
	}

	// removes completed tasks
	clearComplete= () => {
		const incompleteTodos = this.todos.filter( todo => !todo.complete)
		this.todos.replace(incompleteTodos)
	}

}

// make an instance of this class; have to instantiate cuz made by coder not react (react doesn't auto-instantiate this via constructor/dom/render)
const toDoStore = new ToDoStore();

// export the instance of the class - use camelCase!
export default toDoStore;

// autorun(() => {
// 	console.log(store.filter)
// 	console.log(store.todos[0])
// })