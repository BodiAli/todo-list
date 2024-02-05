const content = document.getElementById("content");
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
function todoDeleteButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("delete")) {
      ev.target.parentElement.parentElement.parentElement.remove();
    }
  });
}
function todoEditButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("edit")) {
      darkOverlay.classList.add("dark-overlay2");
      editTodoForm.style.display = "block";
    }
  });
}

export { todoDeleteButton, todoEditButton };
