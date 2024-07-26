const API = (function () {
	const baseUrl = "https://jsonplaceholder.typicode.com";

	const getTodos = () =>
		fetch([baseUrl, "todos"].join("/")).then((response) =>
			response.json()
		);

	const addTodo = (todo) => {
		return fetch([baseUrl, "todos"].join("/"), {
			method: "POST",
			body: JSON.stringify(todo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());
	};

	const deleteTodo = (id) =>
		fetch([baseUrl, "todos", id].join("/"), {
			method: "DELETE",
		});

	return { getTodos, deleteTodo, addTodo };
})();

export default API;