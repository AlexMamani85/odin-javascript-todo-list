import TodoCard from './TodoCard.js';

function rightDOM(todosAlone, projects) {
    let container = document.createElement('div');
    let title = document.createElement('div');
    let element = document.createElement('div');

    title.innerHTML = todosAlone.title;

    title.style = `
        text-align: center;
        margin: 0;
        padding: 10px 0;
        background-color: lightblue;
        font-size: 2rem;
        weight: bold;
        letter-spacing: 32px;
        text-transform: uppercase
    `

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

    container.appendChild(title);
    container.appendChild(element);
    return container;
}

export default rightDOM;
