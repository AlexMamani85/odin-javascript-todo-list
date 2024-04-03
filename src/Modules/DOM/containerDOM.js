import LeftDOM from "./LeftDOM";
import RightDOM from "./RightDOM";

function containerDOM(todosAlone, projects) {

    let element = document.createElement('div');

    element.style = `
        display: grid;
        grid-template-columns: 1fr 4fr;
    `

    let projectActual=todosAlone;
    function setProjectOrTodo(project) {
        projectActual=project;
        document.querySelector('.rightDOM').remove();
        element.appendChild(RightDOM(projectActual));
    }
    element.appendChild(LeftDOM(todosAlone, projects, setProjectOrTodo));
    element.appendChild(RightDOM(projectActual));
    
    return element;
}


export default containerDOM;

