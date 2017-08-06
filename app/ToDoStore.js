import {observer, inject} from "mobx-react";
import {observable, autorun, computed} from "mobx";

class ToDoStore {
	@observable inputTodo = ""
	@observable inputDescription = ""
	@observable inputPriority = ""
	@observable todos = []
	@observable filter = ""
	@computed get filteredTodos() {
		let matchesFilter = new RegExp(this.filter, "i")
		return this.todos.filter(todo => !hthis.filter || matchesFilter.test(todo))
	}
}
const store = new ToDoStore();

export default store;

// autorun(() => {
// 	console.log(store.filter)
// 	console.log(store.todos[0])
// })