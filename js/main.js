import {VERIABLE, addTask, deleteTask, getElementsByClassName} from './view.js';

VERIABLE.BLOCKTASK = getElementsByClassName('todo__task')

for (let key of getElementsByClassName('form')) {
	key.onsubmit = add;
};

for (let key of getElementsByClassName('input__btn')) {
	key.onclick = add;
};

function checkForInputData() {
	if (!VERIABLE.INPUTLINE_VALUE) {
		VERIABLE.PARENT_BLOCKINPUT.style.border = '1px solid #ff0000';
		VERIABLE.INPUTLINE.placeholder = 'Введите задачу';
		return false
	} else {
		return true
	}
};

function add(event) {
	let buttonInput = event.currentTarget;
	VERIABLE.PARENT_BLOCKINPUT = buttonInput.parentElement;
	VERIABLE.INPUTLINE = VERIABLE.PARENT_BLOCKINPUT.querySelector('input');
	VERIABLE.INPUTLINE_VALUE = VERIABLE.INPUTLINE.value;
	if (checkForInputData()) {
		addTask();
	}
};

