const editTodoForm = document.getElementById("edit-todo");
const lowPriorityButton = document.getElementById("low-edit");
const midPriorityButton = document.getElementById("mid-edit");
const highPriorityButton = document.getElementById("high-edit");

function editFormUI() {
  editTodoForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "edit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-edit") {
        lowPriorityButton.style.border = "2px solid black";
        midPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid-edit") {
        midPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high-edit") {
        highPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        midPriorityButton.style.border = "none";
      }
    }
  });
}
export { editFormUI };
