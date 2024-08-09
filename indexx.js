document.addEventListener("DOMContentLoaded", function () {
  //bech mano93odech nekteb fi hedhka el kol donc hata a const (hasitha ashel)
  const inputField = document.getElementById("inp");
  const taskList = document.getElementById("box");

  function addTask() {
    var inpVal = document.getElementById("inp").value;

    if (inpVal.trim() === "") {
      inpVal = prompt("Please enter a task:");

      if (inpVal !== null && inpVal.trim() !== "") {
        taskList.innerHTML += `<li>
                    <input type="checkbox"> ${inpVal}
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </li>`;
      }
    } else {
      taskList.innerHTML += `<li>
                <input type="checkbox"> ${inpVal}
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </li>`;
    }

    inputField.value = "";
  }

  document.getElementById("b1").addEventListener("click", addTask);

  // ki nenzel ala entre yzidha fel lista
  inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Event delegation for delete and edit buttons
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      // Remove the parent <li> element
      event.target.parentElement.remove();
    } else if (event.target.classList.contains("edit")) {
         // hedhy ritha men chatgpt manich fehemha blgde khater mzeelt ma9ritech jquery
         const listItem = event.target.parentElement;
         const textElement = listItem.querySelector("input[type='checkbox']").nextSibling;

         const currentText = textElement.textContent.trim();
         const newText = prompt("Edit the task:", currentText);

         if (newText !== null && newText.trim() !== "") {
             textElement.textContent = ` ${newText}`;
      }
    }
  });
});
