import { todos } from "./storetodos.js";
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
function editTodos(element) {
  editTodoForm.addEventListener("submit", saveEdit);
  function saveEdit(ev) {
    ev.preventDefault();
    const titleEditValue = document.getElementById("title-edit").value;
    const descriptionEditValue = document.getElementById("textarea-edit").value;
    const dueDateEditValue = document.getElementById("date-edit").value;
    const lowPriorityEditButton = document.getElementById("low-edit");
    const midPriorityEditButton = document.getElementById("mid-edit");
    const highPriorityEditButton = document.getElementById("high-edit");
    element.title = titleEditValue;
    element.description = descriptionEditValue;
    element.dueDate = dueDateEditValue;
    if (lowPriorityEditButton.style.border.includes("solid")) {
      element.priority = "low";
    } else if (midPriorityEditButton.style.border.includes("solid")) {
      element.priority = "mid";
    } else if (highPriorityEditButton.style.border.includes("solid")) {
      element.priority = "high";
    }
    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    console.log(element);
  }
}
export { editTodos };
