import { todos } from "./storetodos.js";
const editTodoForm = document.getElementById("edit-todo");
function editTodos() {
  editTodoForm.addEventListener("submit", saveEdit);
  function saveEdit(ev) {
    ev.preventDefault();
    todos.forEach(function (todo) {
      const titleEdit = document.getElementById("title-edit").value;
      todo.title = titleEdit;
      console.log(todo);
    });
  }
}
export { editTodos };
