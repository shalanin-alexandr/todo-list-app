// A simple console application to manage a to-do list.
// It uses a single object to store tasks and methods for manipulation.

let todoList = {
    // Array to store all task objects.
    tasks: [],

    /**
     * Adds a new task to the list.
     * @param {string} taskName - The name of the task.
     * @param {string} taskPriority - The priority of the task.
     */
    addTask: function(taskName, taskPriority){
        // Create a new task object with default status.
        let newTask = {
            name: taskName,
            status: "In Progress...",
            priority: taskPriority
        };
        // Add the new object to the tasks array.
        this.tasks.push(newTask);
        console.log(`Task '${newTask.name}' added successfully.`);
    },

    /**
     * Displays all tasks in the console.
     */
    displayTasks: function(){
        for (let i = 0; i < this.tasks.length; i++){
            console.log(`[${this.tasks[i].status}] ${this.tasks[i].name} (Priority: ${this.tasks[i].priority})`);
        }
    },

    /**
     * Marks a task as completed.
     * @param {string} taskName - The name of the task to complete.
     */
    completeTask: function(taskName){
        for (let i = 0; i < this.tasks.length; i++){
            if(taskName === this.tasks[i].name){
                this.tasks[i].status = "Completed";
                console.log(`Task '${this.tasks[i].name}' marked as completed!`);
                break; // Stop the loop after finding and completing the task.
            };
        }
    },

    /**
     * Deletes a task from the list.
     * @param {string} taskName - The name of the task to delete.
     */
    deleteTask: function(taskName){
        for (let i = 0; i < this.tasks.length; i++){
            if(taskName === this.tasks[i].name){
                this.tasks.splice(i, 1);
                console.log(`Task '${taskName}' was deleted!`);
                break; // Stop the loop after finding and deleting the task.
            };
        }
    }
};

// --- PROGRAM EXECUTION AND TESTING ---

// 1. Add some initial tasks.
todoList.addTask("Go to the gym", "High");
todoList.addTask("Finish JavaScript project", "High");
todoList.addTask("Buy groceries", "Low");

// 2. Display the initial list of tasks.
console.log("--- Current Task List ---");
todoList.displayTasks();

// 3. Mark one task as completed.
console.log("\n--- Completing the task 'Buy groceries' ---");
todoList.completeTask("Buy groceries");

// 4. Display the updated list to see the changes.
console.log("\n--- Updated Task List ---");
todoList.displayTasks();

// 5. Delete one task from the list.
console.log("\n--- Deleting the task 'Go to the gym' ---");
todoList.deleteTask("Go to the gym");

// 6. Display the final task list.
console.log("\n--- Final Task List ---");
todoList.displayTasks();
