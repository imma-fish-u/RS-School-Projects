//Select DOM
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const deleteBtn = document.getElementById("trash-btn");
const completeBtn = document.getElementById("complete-btn");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  if (todoInput.value.length > 0) {
    let li = document.createElement('li');
    li.className = 'chip';
    li.innerHTML = `<button class="chip__icon complete-btn" id="complete-btn">
      <i class="uil uil-circle" id="complete-btn"></i></button>
      <p>${todoInput.value}</p>
      <button class="chip__close trash-btn">
        <i class="uil uil-times" id="trash-btn"></i>
      </button>
    </div>`;
    todoList.appendChild(li);
    saveLocalTodos(todoInput.value);
    }
}

function deleteTodo(e) {
  const item = e.target;
  const todo = item.parentElement.parentElement;

  if (item.id === "trash-btn") {
    todo.classList.toggle("deleted");
    removeLocalTodos(todo);
    setTimeout(() => todo.remove(), 1000);
  }
  if (item.id === "complete-btn" && todo.classList[1] !== "completed") {
    todo.classList.toggle("completed");
    item.classList.replace("uil-circle", "uil-check-circle");
  }
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
    let li = document.createElement('li');
    li.className = 'chip';
    li.innerHTML = `
      <button class="chip__icon complete-btn"><i class="uil uil-circle" id="complete-btn"></i></button>
      <p>${todo}</p>
      <button class="chip__close trash-btn">
        <i class="uil uil-times" id="trash-btn"></i>
      </button>`;
    todoList.appendChild(li);
  });
}