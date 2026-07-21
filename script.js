// ======================================
// Application State
// ======================================

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// ======================================
// DOM Elements
// ======================================
const searchInput = document.getElementById("search-input");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");
const remainingTasks = document.getElementById("remaining-tasks");

// ======================================
// Helper Functions
// ======================================

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodoItem(todo){
 // Create Elements
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;
        
        const completeButton = document.createElement("button");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        // -------------------------
        // Completed State
        // -------------------------

        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }

        // -------------------------
        // Edit Button
        // -------------------------

        editButton.textContent = "Edit";

        // -------------------------
        // Delete Button
        // -------------------------

        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = todo.id;

        // ======================================
        // Event Listeners
        // ======================================
        searchInput.addEventListener("input", () => {

    renderTodos();

});
        completeButton.addEventListener("click", () => {
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
        });

        editButton.addEventListener("click", () => {

            const newText = prompt("Edit your todo:", todo.text);

            if (newText === null) return;

            const trimmedText = newText.trim();

            if (trimmedText === "") return;

            todo.text = trimmedText;

            saveTodos();
            renderTodos();
        });

        deleteButton.addEventListener("click", () => {

            const index = todos.findIndex(item => item.id === todo.id);

            if (index !== -1) {
                todos.splice(index, 1);
            }
             saveTodos();
            renderTodos();
        });

        // ======================================
        // Append Elements
        // ======================================

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

         return li;

    }

    function updateStats(){
        const total= todos.length;
        totalTasks.textContent=total;
        const completed= todos.filter(item=>item.completed).length;
        completedTasks.textContent=completed;
        remainingTasks.textContent=total-completed;
    }
// ======================================
// Render Function
// ======================================

function renderTodos() {

    todoList.innerHTML = "";

    const searchText= searchInput.value.toLowerCase().trim();
    const filteredTodos= todos.filter(todo=>todo.text.toLowerCase().includes(searchText));

    for (const todo of filteredTodos){
        const newItem= createTodoItem(todo);
        todoList.appendChild(newItem);
    }
    updateStats();

}

// ======================================
// Event Listeners
// ======================================

addButton.addEventListener("click", () => {

    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    const todo = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    todos.push(todo);

    saveTodos();
    renderTodos();

    todoInput.value = "";
});

// ======================================
// Initialize Application
// ======================================

renderTodos();
