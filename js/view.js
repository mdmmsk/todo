
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

function deleteTask(event) {
	let buttonDelete = event.currentTarget;
	let parentTask = buttonDelete.parentElement.parentElement;
	parentTask.remove();
};

function getElementsByClassName(className){
	let res= document.body.getElementsByClassName(className);
	return res;
};