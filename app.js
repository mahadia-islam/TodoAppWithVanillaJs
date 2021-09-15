/*
 * Author:mahadia islam neha
 * App-Name:Todo App
 * Date:25/08/2021
 */

// form input

let textInput = document.querySelector('.text-input');
let form = document.querySelector('form');

// task box

let incompleteList = document.querySelector('.incomplete-task');
let completeList = document.querySelector('.complete-task');

// functions

const createTask = function (task) {

    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;
    label.for = 'task';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

};

let addTask = function (event) {
    event.preventDefault();
    let task = textInput.value;
    let listItem = createTask(textInput.value);
    incompleteList.appendChild(listItem);
    textInput.value = '';
    // bind the incomplete task item to completed task item
    bindInCompleteItem(listItem,completeTask);
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='bx bxs-checkbox-minus' ></i>";
    deleteButton.setAttribute('class', 'delete-btn');
    listItem.appendChild(deleteButton);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeList.appendChild(listItem);

    bindCompleteTask(listItem,deleteTask);
}

let bindCompleteTask = function (listItem,deleteBtnClick) {
    let deleteBtn = listItem.querySelector('button');
    deleteBtn.onclick = deleteBtnClick;
}

let deleteTask = function () {
    let listItem = this.parentNode;
    listItem.remove();
}

let bindInCompleteItem = function (listItem,checkBoxClick) {
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

form.onsubmit = addTask;