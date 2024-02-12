export default function getFormData() {
  const addForm = document.getElementById("add-todo");
  const lowPriorityButton = document.getElementById("low");
  const midPriorityButton = document.getElementById("mid");
  const highPriorityButton = document.getElementById("high");
  const lowPriorityButtonProject = document.getElementById("low-in-project");
  const midPriorityButtonProject = document.getElementById("mid-in-project");
  const highPriorityButtonProject = document.getElementById("high-in-project");
  const addTodoInProjectForm = document.getElementById("add-todo-in-project");

  addForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low") {
        lowPriorityButton.style.border = "2px solid black";
        midPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid") {
        midPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high") {
        highPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        midPriorityButton.style.border = "none";
      }
    }
  });
  addTodoInProjectForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form-in-project") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-in-project") {
        lowPriorityButtonProject.style.border = "2px solid black";
        midPriorityButtonProject.style.border = "none";
        highPriorityButtonProject.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid-in-project") {
        midPriorityButtonProject.style.border = "2px solid black";
        lowPriorityButtonProject.style.border = "none";
        highPriorityButtonProject.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high-in-project") {
        highPriorityButtonProject.style.border = "2px solid black";
        lowPriorityButtonProject.style.border = "none";
        midPriorityButtonProject.style.border = "none";
      }
    }
  });
}
