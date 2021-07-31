// add a grid composed of 8 x 4 squeres

const ROWS = 16;
const COLS = 16;

const body = document.querySelector("body");
const mainContent = document.createElement("main");
mainContent.setAttribute("id", "container");
body.append(mainContent);
mainContent.style.setProperty('--grid-rows', ROWS);
mainContent.style.setProperty('--grid-cols', COLS);
const  cells = [];

const createCells = () =>{
    for(let index = 0; index < (ROWS * COLS); index++){
        const div = document.createElement("div");
        div.setAttribute("id", `${index}`);
        div.setAttribute("class", "grid-item");
        // div.innerText = `${index + 1}`;
        cells.push(div);
    }
}

const addCellsToMain = () => {
    for (const cell of cells) {
        mainContent.append(cell);
    }
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
const fadeOutEffect = (fadeTarget) => {
    if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
        requestAnimationFrame(() => {
            fadeOutEffect(fadeTarget);
        }); 
    }
    if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.0015;
        requestAnimationFrame(() => {
            fadeOutEffect(fadeTarget);
    });
    }
    else{
        fadeTarget.style.background = "white";
        fadeTarget.style.opacity = 1;
    }


}

const changeCellBgColor = (cell, color = null) => {
     {
        if(color !== null){
            fadeOutEffect(cell)
        }else{
            if(cell.getAttribute("style") === null || cell.getAttribute("style") === ""){
                cell.setAttribute("style", `background-color: ${getRandomColor()}`);
                // cell.style.backgroundColor = getRandomColor();
            }else if(cell.getAttribute("style") !== null){
                cell.setAttribute("style", `background-color: ${getRandomColor()}`);
                // cell.style.backgroundColor = getRandomColor();

            }
        }
    }
}

// add click eventlisteners to each of the cells
const attachEventListenersClick = () => {
    for(const cell of cells){
        cell.addEventListener("mousedown", event => {
            changeCellBgColor(cell);
        });
        cell.addEventListener("mouseup", event => {
            changeCellBgColor(cell, "white");
        });
    }
}

// add hover eventlisteners to each of the cells
const attachEventListenersHover = () => {
    for(const cell of cells){
        cell.addEventListener("mouseover", event => {
            changeCellBgColor(cell);
        });
        cell.addEventListener('mouseleave', event => {
            changeCellBgColor(cell, "white");
        });
    }
}

createCells();
addCellsToMain();
attachEventListenersClick();
attachEventListenersHover();