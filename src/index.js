// const newTask = document.getElementById('new-task-description');
const createTask = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');
// const submit = document.querySelector('input[type="submit"]');
// console.log(submit)

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  createTask.addEventListener('submit', (e) => {
    e.preventDefault();
    createNewTask(e.target['new-task-description'].value)
    createTask.reset();
  })
});


function createNewTask(task){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteBtn);
  btn.textContent = 'X'
  li.textContent = task;
  li.appendChild(btn)
  taskList.appendChild(li);
}

const deleteBtn = function (e) {
  e.target.parentNode.remove();
}