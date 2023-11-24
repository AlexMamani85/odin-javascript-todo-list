import LeftDOM from "./LeftDOM";
import RightDOM from "./RightDOM";

function containerDOM(todosAlone, projects) {

    let element = document.createElement('div');

    element.style = `
        display: grid;
        grid-template-columns: 1fr 4fr;
    `

    element.appendChild(LeftDOM(projects));
    element.appendChild(RightDOM(todosAlone, projects));
    
    return element;
}


export default containerDOM;

