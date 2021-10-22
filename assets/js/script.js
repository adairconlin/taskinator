let buttonEl = document.querySelector("#save-task");
let tasksToDoEl = document.querySelector("#tasks-to-do");


let createTaskHandler = function(){
    let taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task.";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
};

buttonEl.addEventListener("click", createTaskHandler());