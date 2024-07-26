// * ~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~
export const View = (() => {
	const elestr = {
		test: ".test",
		todocontainer: "#todolist_container",
		deletebtn: ".delete-btn",
		input: ".todolist__input",
	};

	const render = (element, tmp) => {
		element.innerHTML = tmp;
	};

	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((item) => {
			tmp += `
        <li>
          <span>${item.id} - ${item.title}</span>
          <button class="delete-btn" id="${item.id}">X</button>
        </li>
      `;
		});
		return tmp;
	};

	return {
		elestr,
		render,
		createTmp,
	};
})();