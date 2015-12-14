// Problem: User interaction doesnt provide anything
// Solution: Add interactivity for managing daily task

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");  //completed-tasks
// Add a new task
var addTask = function () {
  console.log("Add task...");
  //When button is pressed...
  //Create new list item with the text from #new-task:
    //label
    //input (text)
    //button.edit
    //button.Delete
    //Each elements, needs modified and appended
};

// Edit an existing task
var editTask = function () {
  console.log("Edit task...");
  //When button is pressed...
    //if class of the parent is .editMode
      //Switch  from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text

      // Toggle .editMode on the parent
};

// Delete existing task
var deleteTask = function () {
  console.log("Delete task...");
  //When the Delete button is pressed...
    //Remove the parnt list item from the ul
};

// Mark task as complete
var taskCompleted = function () {
  console.log("Completed task...");
  // When the checkbox is checked...
    //Append the task item to the #completed-tasks
};

// Mark task as incomplete
var taskIncomplete = function () {
  console.log("Incomplete task...");
      //When the checkbox is unchecked...
        // Append the task item to #uncompleted-tasks
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler){
  console.log("Biding list item events...");
  //select taskListItem's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to check box
  checkbox.onchange = checkBoxEventHandler;
};

/*Wiring*/
//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
