let $ = (selector) => document.querySelector(selector); // this is to avoid typing document.querySelector again and again

const user = $(`.user`);
const userName = $(`#userName`);
const form = $(`.register-form`);

let allNames = [];

const addName = (event) => {
	event.preventDefault();

	if (user.value === "" || user.value == null) {
		alert("you have to put a username");
		allNames.pop;
	}

	let name = user.value;
	allNames.push(name);

	userName.textContent = "Name: " + allNames[allNames.length - 1];

	if (allNames.length > 0 && user.value != "") {
		$(`.login-page`).style.width = "0%";
		$(`.container`).style.display = "flex";
		$(`.results`).style.display = "grid";
	}

	form.reset();
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("btn").addEventListener("click", addName);
});
