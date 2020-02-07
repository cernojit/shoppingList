var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");



// add button next to the list items
function createBtn(index){
	var btn = document.createElement("button");
	btn.innerHTML = "Remove";
	btn.setAttribute("class", "remove");
	var newList = document.querySelectorAll("li");
	newList[index].after(btn);
}

function addRemoveBtn () {
	for (i=0; i < li.length; i++){
		createBtn(i);
	}
}

addRemoveBtn();

// adding items by clicking or pressing enter
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var index = document.querySelectorAll("li").length-1;
	createBtn(index);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// toggle .done on list item after clicking
function toggleDone (event) {
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done")
	}
}

ul.addEventListener("click", toggleDone);

// remove item after click remove button
function selectItem(event){
	var btn = event.target;
	if(btn.tagName === "BUTTON"){
		btn.previousSibling.remove();
		btn.remove();
	}
}

ul.addEventListener("click", selectItem);


