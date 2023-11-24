import TodoCard from './TodoCard.js';

function rightDOM(todosAlone, projects) {

    let element = document.createElement('div');

    element.style = `
    height: 100%;
    background-color: #eee;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    `
    todosAlone.todos.forEach(todo => {
        element.appendChild(TodoCard(todo));
    });

    return element;
}

export default rightDOM;
