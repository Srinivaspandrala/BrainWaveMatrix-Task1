// Get elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add a new task
addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.textContent = taskText;

    // Add complete and delete buttons
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    // Clear input field
    todoInput.value = '';
});
