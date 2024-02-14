const editTodoForm = document.getElementById("edit-todo");
const lowPriorityButton = document.getElementById("low-edit");
const midPriorityButton = document.getElementById("mid-edit");
const highPriorityButton = document.getElementById("high-edit");

function editFormUI() {
  editTodoForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "edit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-edit") {
        lowPriorityButton.style.outline = "2px solid black";
        midPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid-edit") {
        midPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high-edit") {
        highPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        midPriorityButton.style.outline = "none";
      }
    }
  });
}
export { editFormUI };
