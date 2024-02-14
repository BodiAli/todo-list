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
        lowPriorityButton.style.outline = "2px solid black";
        midPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid") {
        midPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high") {
        highPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        midPriorityButton.style.outline = "none";
      }
    }
  });
  addTodoInProjectForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form-in-project") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-in-project") {
        lowPriorityButtonProject.style.outline = "2px solid black";
        midPriorityButtonProject.style.outline = "none";
        highPriorityButtonProject.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid-in-project") {
        midPriorityButtonProject.style.outline = "2px solid black";
        lowPriorityButtonProject.style.outline = "none";
        highPriorityButtonProject.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high-in-project") {
        highPriorityButtonProject.style.outline = "2px solid black";
        lowPriorityButtonProject.style.outline = "none";
        midPriorityButtonProject.style.outline = "none";
      }
    }
  });
}
