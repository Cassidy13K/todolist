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
	@observable totalTaskNumber = ""

	@computed get filteredTodos() {
		let matchesFilter = new RegExp(this.filter, "i")
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title) || matchesFilter.test(todo.note) || matchesFilter.test(todo.prio))
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