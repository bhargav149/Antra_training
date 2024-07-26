import { Model, State, Todo } from "./model.js";
import { View } from "./view.js";

// * ~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~
export const Controller = ((model, view) => {
	const state = new State(view);

	const deleteTodo = () => {
		const ele = document.querySelector(view.elestr.todocontainer);
		ele.addEventListener("click", (e) => {
			if (e.target.className === "delete-btn") {
				const id = +e.target.id;

				state.todolist = state.todolist.filter((todo) => {
					return +todo.id !== id;
				});
				model.deleteTodo(id);
			}
		});
	};

	const addTodo = () => {
		const todoinput = document.querySelector(view.elestr.input);
		todoinput.addEventListener("keyup", (e) => {
			if (e.code === "Enter" && e.target.value.trim() !== "") {
				const todo = new Todo(e.target.value);

				model.addTodo(todo).then((newtodo) => {
					state.todolist = [newtodo, ...state.todolist];
				});

				e.target.value = "";
			}
		});
	};

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = todos.reverse();
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
	};

	return { bootstrap };
})(Model, View);
