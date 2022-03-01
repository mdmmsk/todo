let VERIABLE = {};
VERIABLE.BLOCKTASK = getElementsByClassName('todo__task')

function getElementsByClassName(className){
	let res= document.body.getElementsByClassName(className);
	return res;
};

for (let key of getElementsByClassName('form')) {
	key.onsubmit = add;
};

for (let key of getElementsByClassName('input__btn')) {
	key.onclick = add;
};



function cloneForPaste() {
	VERIABLE.CLONE = VERIABLE.BLOCKTASK[0].cloneNode(true);
	VERIABLE.CLONE.classList.add('new__task');
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

function addTask() {
	cloneForPaste();
	VERIABLE.PARENT_BLOCKINPUT.style.border = '';
	VERIABLE.BLOCKTASKS = VERIABLE.PARENT_BLOCKINPUT.nextElementSibling;
	let Label = VERIABLE.CLONE.getElementsByTagName('label');
	Label[0].innerHTML = VERIABLE.INPUTLINE_VALUE;
	VERIABLE.BLOCKTASKS.append(VERIABLE.CLONE);
	VERIABLE.BLOCKTASK.style = 'display:block';
	VERIABLE.INPUTLINE.value = '';
	assignmentOfClickingRemoval();
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

function deleteTask(event) {
	let buttonDelete = event.currentTarget;
	let parentTask = buttonDelete.parentElement.parentElement;
	parentTask.remove();
};

function assignmentOfClickingRemoval() {
	VERIABLE.DELETEBTN = document.body.getElementsByClassName('todo__deleteTask');
	for (let key of VERIABLE.DELETEBTN) {
		key.onclick = deleteTask;
	};
};

function changeStatus(){
	
}