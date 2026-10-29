document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Select the form using its id
  const form = document.getElementById("create-task-form");
//Listen for the form being submitted 
  form.addEventListener("submit", (event) => {
    event.preventDefault();//Stop the browser's default behavior of reloading the page on submit
    //Read what the user typed into the text input
    const task = document.getElementById("new-task-description").value;
    //Pass the saved task to the function that builds the list item
    buildToDo(task);
  });
//Create a list item for the task and show it on the page
  function buildToDo(todo) {
    //Create a new <li> element
    const li = document.createElement("li");
    li.textContent = todo;
     // Add the <li> to the task list (<ul id="tasks">)
    document.getElementById("tasks").appendChild(li);
  }
});
