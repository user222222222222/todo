document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = document.getElementById('task').value;
        const dueDate = document.getElementById('dueDate').value;
        addTodo(task, dueDate);
    });

    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('toggle')) {
            toggleComplete(event.target.dataset.id);
        } else if (event.target.classList.contains('delete')) {
            deleteTodo(event.target.dataset.id);
        }
    });

    loadTodos();
});

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderTodos(todos);
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(task, dueDate) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
        id: Date.now().toString(),
        task,
        dueDate,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
}

function toggleComplete(id) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        renderTodos(todos);
    }
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    renderTodos(todos);
}

function renderTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${todo.task} (Fällig: ${todo.dueDate})</span>
            <div>
                <button class="toggle" data-id="${todo.id}">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete" data-id="${todo.id}">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}
