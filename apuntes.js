
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

class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if(index==-1) {
            this.todos.splice(index, 1);
        }
    }
}

const defaultProject1 = new Project('Proyecto 1');
const defaultProject2 = new Project('Proyecto 2');


// Create Todos
const todo1 = new Todo('Task 1', 'Description for Task 1', '2023-12-01', 'tarea no tan importante', 'low');
const todo2 = new Todo('Task 2', 'Description for Task 2', '2023-12-05', 'tarea MAS importante', 'high');
  
// Output
defaultProject1.addTodo(todo1);
defaultProject1.addTodo(todo2);
defaultProject2.addTodo(todo2);
defaultProject2.addTodo(todo1);

projects=[defaultProject1,defaultProject2]
console.log(projects);

todosAlone=[todo2,todo1]
console.log(todosAlone)


