import API from "./api.js";

// * ~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~
export const Model = ((api) => {
	return {
		...api,
	};
})(API);

export class State {
	#todolist = [];

	constructor(view) {
		this.view = view;
		this.ele = document.querySelector(this.view.elestr.todocontainer);
	}

	get todolist() {
		return this.#todolist;
	}

	set todolist(newtodos) {
		this.#todolist = newtodos;

		const tmp = this.view.createTmp(this.#todolist);
		this.view.render(this.ele, tmp);
	}
}

export class Todo {
	constructor(title) {
		this.completed = false;
		this.userId = 23;
		this.title = title;
	}
}
