document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inp");
    const taskList = document.getElementById("box");

    function addTask() {
        var inpVal = inputField.value;

        if (inpVal.trim() === "") {
            inpVal = prompt("Please enter a task:");

            if (inpVal !== null && inpVal.trim() !== "") {
                taskList.innerHTML += `<li>
                    <input type="checkbox"> ${inpVal}
                    <button class="edit-btn">Edit</button>
                </li>`;
            }
        } else {
            taskList.innerHTML += `<li>
                <input type="checkbox"> ${inpVal}
                <button class="edit-btn">Edit</button>
            </li>`;
        }

        inputField.value = ""; // Clear the input field
    }

    document.getElementById("b1").addEventListener("click", addTask);

    // Add Enter key functionality
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Event delegation for edit buttons and checkboxes
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
            // Edit the task text
            const listItem = event.target.parentElement;
            const textNode = listItem.childNodes[1]; // This should be the text node

            const currentText = textNode.textContent.trim();
            const newText = prompt("Edit the task:", currentText);

            if (newText !== null && newText.trim() !== "") {
                textNode.textContent = ` ${newText}`;
            }
        } else if (event.target.type === "checkbox") {
            // If the checkbox is checked, wait 3 seconds before removing the task
            const checkbox = event.target;
            if (checkbox.checked) {
                alert("congrats on compliting the task it will be deleted")
                setTimeout(function () {
                    checkbox.parentElement.remove();
                }, 3000);
            }
        }
    });
});
