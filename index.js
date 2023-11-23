// Todo Class
class Todo {
    constructor(title, description, dueDate, priority, notes) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.completed = false;
    }
}

// Create Todos
const todo1 = new Todo('Task 1', 'Description for Task 1', '2023-12-01', 'tarea no tan importante', 'low');
const todo2 = new Todo('Task 2', 'Description for Task 2', '2023-12-05', 'tarea MAS importante', 'high');
  
todosAlone=[todo2,todo1]
console.log(todosAlone)

