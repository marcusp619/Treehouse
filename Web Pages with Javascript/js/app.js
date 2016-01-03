//Problem: User ineraction dosn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks
// Add a new task
var addTask = function () {
  // When the button is pressed
  //Create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
};

// Edit an existing task
var editTask = function () {
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
        //Switch to .editMode
        //input value becomes the label's text

        //Toggle .editMode on the parent
};

// Delete an existing task
var deleteTask = function () {
  //when the Delete button is pressed
    //Remove the parent list item from the ul
};

// Mark a Task as complete
var taskCompleted = function () {
  //when the checkbox is checked
    //Append the task list item to the #completed-tasks
};

// Mark a task as incomplete
var taskIncomplete = function () {
  //when the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};
