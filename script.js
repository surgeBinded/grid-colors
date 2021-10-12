let ROWS = 16;
let COLS = 16;

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
        div.setAttribute("style", `background-color: #000000`);
        cells.push(div);
    }
}

// brush color
const brushColor = document.createElement("div");
const inputColor = document.createElement("input");
const labelColor = document.createElement("label");

// default color of the brush
inputColor.setAttribute("type", "color");
inputColor.setAttribute("value", "#ffffff");
inputColor.setAttribute("id", "inputColor");
labelColor.setAttribute("for", "inputColor");
brushColor.append(inputColor);
brushColor.append(labelColor);
body.append(brushColor);

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
  
const changeCellBgColor = (cell, color = null) => {
     {
        if(color !== null){
            // fadeOutEffect(cell)
        }else{
            if(cell.getAttribute("style") === null || cell.getAttribute("style") === ""){
                cell.setAttribute("style", `background-color: ${inputColor.value}`);
                // cell.style.backgroundColor = getRandomColor();
            }else if(cell.getAttribute("style") !== null){
                cell.setAttribute("style", `background-color: ${inputColor.value}`);
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
    }
}

const rgbToHex = (rgb) => {
    // console.log(rgb);
    let array = rgb.split("(")[1].split(")")[0];
    array = array.split(",");
    let b = array.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    return "0x"+b.join("");
}

const cellCollors = () =>{
let exportedMatrix = [];
    cells.forEach((element, index) => {
        exportedMatrix.push(rgbToHex(element.style.backgroundColor));
    });

    console.log(exportedMatrix.join(","));
}

const matrix = [
    0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x00ccff,0x00ccff,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,
    0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,
    0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,
    0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,
    0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,
    0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,
    0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,
    0x00ccff,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0xbb00ff,0x2b00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x00ccff,
    0x00ccff,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0x2b00ff,0xbb00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x00ccff,
    0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,
    0xff0000,0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,0xff0000,
    0xffbb00,0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,0xffbb00,
    0xffffff,0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,0xffffff,
    0xffffff,0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,0xffffff,
    0xbb00ff,0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff,0x2b00ff,
    0xbb00ff,0xbb00ff,0xffffff,0xffffff,0xffbb00,0xff0000,0x04ff00,0x00ccff,0x00ccff,0x04ff00,0xff0000,0xffbb00,0xffffff,0xffffff,0x2b00ff,0x2b00ff
]

const importMatrix = (array) => {
    cells.forEach((element, index) => {
        element.setAttribute("style", `background-color: ${array[index] === 0 ? "rgb(0,0,0)" : "#" + array[index].toString(16)}`);
    })
}

createCells();
addCellsToMain();
attachEventListenersClick();
importMatrix(matrix);
