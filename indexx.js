document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inp");
  const taskList = document.getElementById("box");

  function addTask() {
    const inpVal = inputField.value.trim();

    if (inpVal === "") {
      const prom = prompt("Please enter a task:");
      if (prom !== null && prom.trim() !== "") {
        taskList.innerHTML += `<li>
                    <input type="checkbox"> ${prom}
                    <button class="edit-btn">Edit</button>
                </li>`;
      }
    } else {
      taskList.innerHTML += `<li>
                <input type="checkbox"> ${inpVal}
                <button class="edit-btn">Edit</button>
            </li>`;
    }

    document.getElementById("inp").value = "";
  }

  document.getElementById("b1").addEventListener("click", addTask);

  // fazet el entre kifeh tekhdem
  inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
      
      const listItem = event.target.parentElement;
      const textNode = listItem.querySelector(
        "input[type='checkbox']"
      ).nextSibling;

      const currentText = textNode.textContent.trim();
      const newText = prompt("Edit the task:", currentText);

      if (newText !== null && newText.trim() !== "") {
        textNode.textContent = ` ${newText}`;
      }
    } else if (event.target.type === "checkbox") {
      // ken chked 3sc w ttfaskh
      const checkbox = event.target;
      if (checkbox.checked) {
        alert("Congrats on completing the task! It will be deleted shortly.");
        setTimeout(function () {
          checkbox.parentElement.remove();
        }, 3000); // tedhem bel milliseconds
      }
    }
  });
});
