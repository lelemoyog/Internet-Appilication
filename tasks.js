window.onload = function() {
var tasks = [];
let taskz = document.getElementById('task');
function addTask(){
let task = document.getElementById('task').value;

let taskObject = {
taskItem:task
}

tasks.push(taskObject);
console.log(tasks);

var ul = document.getElementById('tasks');
var li = document.createElement('li');
li.appendChild(document.createTextNode(task));
ul.appendChild(li);


button.disabled = true;
document.getElementById('task').value = ""; // Clear input field after adding task
}

function enableButton(){
    button.disabled = false;
}

var button = document.getElementById('submit');
button.disabled = true;
button.addEventListener('click',addTask);
taskz.addEventListener("input",enableButton);

}
