// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
let counter = 0;

// Event listener for add button

addTask.addEventListener('click', function() {
    if (inputTask.value !== "") {
        counter += 1;
    }
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.textContent = `${inputTask.value}`;
    task.appendChild(li);
    let checkButton = document.createElement('button');
    checkButton.textContent = '✓';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '-';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
    if (inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
    checkButton.addEventListener('click', function() {
        checkButton.previousElementSibling.classList.toggle('line');
    })
    deleteButton.addEventListener('click', function() {
        deleteButton.parentElement.remove();
        counter -= 1;
        document.getElementById('length').textContent = counter;
    })
    document.getElementById('length').textContent = counter;
});
