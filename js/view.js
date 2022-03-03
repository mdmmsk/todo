export let VERIABLE = {};

function cloneForPaste() {
	VERIABLE.CLONE = VERIABLE.BLOCKTASK[0].cloneNode(true);
	VERIABLE.CLONE.classList.add('new__task');
};

function assignmentOfClickingRemoval() {
	VERIABLE.DELETEBTN = document.body.getElementsByClassName('todo__deleteTask');
	for (let key of VERIABLE.DELETEBTN) {
		key.onclick = deleteTask;
	};
};

export function addTask() {
	cloneForPaste();
	VERIABLE.PARENT_BLOCKINPUT.style.border = '';
	VERIABLE.BLOCKTASKS = VERIABLE.PARENT_BLOCKINPUT.nextElementSibling;
	let Label = VERIABLE.CLONE.getElementsByTagName('label');
	Label[0].onclick = changeStatus;
	let divcheckbox = VERIABLE.CLONE.getElementsByClassName('checkbox');
	divcheckbox[0].onclick = changeStatus;
	Label[0].innerHTML = VERIABLE.INPUTLINE_VALUE;
	VERIABLE.BLOCKTASKS.append(VERIABLE.CLONE);
	VERIABLE.BLOCKTASK.style = 'display:block';
	VERIABLE.INPUTLINE.value = '';
	assignmentOfClickingRemoval();
}

export function deleteTask(event) {
	let buttonDelete = event.currentTarget;
	let parentTask = buttonDelete.parentElement.parentElement;
	parentTask.remove();
}

export function getElementsByClassName(className) {
	let res = document.body.getElementsByClassName(className);
	return res;
}

function changeStatus(event) {
	let element = event.currentTarget
	let blockTodoTask = element.parentElement.parentElement;
	blockTodoTask.classList.toggle('new__task2');
	let div = document.createElement('div');
	div.className = 'circle';
	if (blockTodoTask.classList.contains("new__task2")) {
		element.before(div)
	} else {
		let dc=blockTodoTask.getElementsByClassName('circle');
		dc[0].remove();
	}
}