const taskInput = document.getElementById('newTask');
const  addTaskButton = document.getElementById('addTaskButton');
const incompleteTasks = document.getElementById('toDo');


const addTask = function() {
    let text = taskInput.value;
    let li = document.createElement('li');
    li.innerHTML = text;
    li.onclick = completeTask; 
    incompleteTasks.appendChild(li);
    taskInput.value = ''; 
}
const completeTask = function() {
    let li = this;
    li.classList.add('done'); // 
    completedTasks.appendChild(li); 
    li.onclick = incompleteTask; 
}
addTaskButton.onclick = addTask;