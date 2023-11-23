import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import {Todo} from './Modules/Class/Todo.js';
import {Project} from './Modules/Class/Project.js';
import container from './Modules/DOM/containerDOM.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(container);
const todo1 = new Todo('Task 1', 'Description for Task 1', '2023-12-01', 'low');
const todo2 = new Todo('Task 2', 'Description for Task 2', '2023-12-05', 'high');

let todosAlone=new Project('todosAlone')
todosAlone.addTodo(todo2)
todosAlone.addTodo(todo1)

const defaultProject1 = new Project('Proyecto 1');
const defaultProject2 = new Project('Proyecto 2');

defaultProject1.addTodo(todo1);
defaultProject1.addTodo(todo2);
defaultProject2.addTodo(todo2);
defaultProject2.addTodo(todo1);

let projects=[defaultProject1,defaultProject2]

defaultProject1.setTodoAsComplete(todo1)

defaultProject1.changeTodoPriority(todo1,'high')
defaultProject1.changeTodoPriority(todo1,'low')