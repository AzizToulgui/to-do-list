let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

function addTask() {
  let taskText = inp.value.trim();
  // Check if the input field is empty
  if (taskText === "") {
    taskText = prompt("Give a task");
  }
  if (taskText !== null && taskText !== "") {
    // Create a new li element for the task
    let li = document.createElement("li");
    li.textContent = taskText;
    // Create the delete button
    let dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";
    // Add event listener to delete the task
    dltbtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
    // Create the edit button
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    // Add event listener to edit the task
    editbtn.addEventListener("click", () => {
      let editText = prompt("Edit your task", taskText);
      if (editText !== null && editText.trim() !== "") {
        li.textContent = editText.trim();
        li.appendChild(editbtn);
        li.appendChild(dltbtn);
      }
    });
    // Append the buttons to the li
    li.appendChild(editbtn);
    li.appendChild(dltbtn);
    // Append the li to the ul
    ul.appendChild(li);
    // Clear the input field
    inp.value = "";
  }
}
// Bind the addTask function to the button click
btn.addEventListener("click", addTask);

// Bind the addTask function to the Enter key press
inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
