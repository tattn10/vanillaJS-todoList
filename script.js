const todos = [];
function renderTodos(){
  todoList.innerHTML = ""; 
   for (const todo of todos) { 
    const li = document.createElement("li"); 
    const span = document.createElement("span");
       const deleteButton=document.createElement("button");
       deleteButton.textContent="Delete";
       span.textContent=todo.text;
        li.appendChild(span);
     deleteButton.addEventListener("click",()=> { 
       const index = todos.findIndex(item => item.id === todo.id); 
       if (index !== -1) { 
        todos.splice(index, 1); 
    } 
        renderTodos();
     });
   
    li.appendChild(deleteButton);
    todoList.appendChild(li);
   
 }
}
// element selecting
const todoInput = document.getElementById("todo-input");

const addButton = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");

const totalTasks = document.getElementById("total-tasks");

const completedTasks = document.getElementById("completed-tasks");

const remainingTasks = document.getElementById("remaining-tasks");


addButton.addEventListener('click',()=>{
  const taskText= todoInput.value;
  if(taskText.trim()==="") return;
  const todo={
    id: Date.now(),
    text: taskText,
    completed: false
  }
  todos.push(todo);
  renderTodos();
  todoInput.value="";
})

