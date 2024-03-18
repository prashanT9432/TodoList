function render() {

  document.querySelector("#push").onclick = function () {    // onClick event on Add button.

    if (document.querySelector("#newtask input").value.length == 0) {      // checking if input field is empty.
      alert("Please Enter a Task!");
    } else {      //this will add task items to div elememt of id='tasks'.

      document.querySelector("#tasks").innerHTML += `
                  <div class="task">
                      <span id="taskname"><input type='checkbox' id='checkbox' alt='Input field'>
                          ${document.querySelector("#newtask input").value}
                      </span>
                      <button class="delete">
                      <i class="fa-regular fa-trash-can fa-xl" style="color: #f75d02;"></i></button>
                  </div>`;

      let current_tasks = document.querySelectorAll(".delete");
      const totalTask = document.getElementById("taskLeft");
      for (let i = 0; i < current_tasks.length; i++) {        // delete tasks functionality.

        current_tasks[i].onclick = function () {
          let current_tasks = document.querySelectorAll(".delete");
          this.parentNode.remove();
          totalTask.textContent = `${current_tasks.length - 1}`;
        };
      }
      let task = document.querySelectorAll("#checkbox");
      let taskList = task.length;
      for (let i = 0; i < task.length; i++) {        // task checked/unchecked functionality.

        task[i].onclick = function () {
          if (task[i].checked) { // checked
            taskList = taskList - 1;
            totalTask.textContent = `${taskList}`;
            this.parentNode.style.textDecoration = "line-through";
            task[i].setAttribute("checked", true);
          } else {    // unchecked
            taskList = taskList + 1;
            totalTask.textContent = `${taskList}`;
            this.parentNode.style.textDecoration = "none";
            task[i].setAttribute("checked", false);
          }
        };
      }
      totalTask.textContent = `${current_tasks.length}`; // footer section > total task count.
      document.querySelector("input").value = ""; // clearing input field.
    }
  };
}
render();
