
export class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    setTodoAsComplete(todo) {
        const index = this.todos.indexOf(todo);
        if(index!=-1) {
            this.todos[index].completed = true;
        }
    }

    changeTodoPriority(todo, priority) {
        const index = this.todos.indexOf(todo);
        if(index!=-1) {
            this.todos[index].priority = priority;
        }
    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if(index==-1) {
            this.todos.splice(index, 1);
        }
    }
}
