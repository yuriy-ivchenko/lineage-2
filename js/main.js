"use strict";
////Оголошення змінної без ключового слова let або const призведе до помилки, якщо скрипт виконується в суворому режимі.

const svg = document.getElementById("svg");
const svgLines = [];
let nodeId = [];
let lineId = [];
for (let i = 0; i < nodes.length; i++) {
    const node = document.createElement("div");
    //node.classList.add('person');
    //node.classList.add('persons');
    node.id = nodes[i].id;
    nodeId = nodes[i].id;
    node.parentId = nodes[i].parentId;
    node.className = "node";
    // node.style.cssText = `left: ${nodes.left}px; top: ${nodes.top}px`;
    node.draggable = true;
    node.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", node.id);
        from = node.id;
    });

    document.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    document.addEventListener("drop", function (e) {
        e.preventDefault();
        to = e.target.id;
        elementDrag(e, from, to);
    });

    let image = document.createElement("img");
    image.src = nodes[i].path_photo;
    image.width = "30";
    image.style.margin = "10px";
    node.appendChild(image);

    let link = document.createElement("a");
    link.href = nodes[i].link;
    link.style.position = "absolute";
    link.style.top = "15px";
    link.style.textDecoration = "none";
    link.innerText = nodes[i].name;
    node.appendChild(link);
    document.body.appendChild(node);
    console.log(node.id);
}

document.addEventListener("DOMContentLoaded", function () {
    let from = [];
    let to = [];
    for (let i = 0; i < lineData.length; i++) {
        from = lineData[i].from;
        to = lineData[i].to;
        createLine(from, to);
        console.log("від: " + from + " до:" + to);

    }
    // Код малювання ліній

    function createLine(from, to) {
        const fromNode = document.getElementById(from);
        const toNode = document.getElementById(to);

        if (!fromNode || !toNode) {
            console.error(`Cannot find element with id "${from}" or "${to}"`);
            return;
        }

        const fromNodeRect = fromNode.getBoundingClientRect();
        const toNodeRect = toNode.getBoundingClientRect();

        const fromNodeX = fromNodeRect.left + (fromNodeRect.width / 2);
        const fromNodeY = fromNodeRect.top + (fromNodeRect.height / 2);

        const toNodeX = toNodeRect.left + (toNodeRect.width / 2);
        const toNodeY = toNodeRect.top + (toNodeRect.height / 2);

        let lineId;

        // перевіряємо, чи лінія з таким ідентифікатором уже існує
        let existingLine = svgLines.find(line => {
            lineId = from + "-" + to;
            return line.getAttribute('id') === lineId;
        });

        if (existingLine) {
            svg.removeChild(existingLine); // видаляємо лінію з SVG елементу
            svgLines.splice(svgLines.indexOf(existingLine), 1); // видаляємо лінію з svgLines
        }

        let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1", fromNodeX);
        line.setAttribute("y1", fromNodeY);
        line.setAttribute("x2", toNodeX);
        line.setAttribute("y2", toNodeY);

        //stroke-dasharray: 0, 500;
        line.setAttribute("stroke", "red");
        line.setAttribute("stroke-dasharray", 0, 500);
        line.style.strokeWidth = "3px";
        line.style.strokeDasharray = 8;
        line.style.strokeDashoffset = 6;
        lineId = from + "-" + to;
        line.setAttribute('id', lineId);
        svg.appendChild(line);
        svgLines.push(line);
    }

    createLine(from, to);
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>
    function addNodeAndLine(newNode) {
        nodes.push(newNode);
        const newLineFrom = newNode.id;
        const newLineTo = newNode.parentId;
        lineData.push({ from: newLineFrom, to: newLineTo });
        const newLineColor = newNode.background;
        lines[`${newLineFrom}-${newLineTo}`] = [newLineFrom, newLineTo, newLineColor];
        updateLines();
    }
});
function updateLines() {
    const lines = {

        'son-daugther-father': ['son-daugther', 'father', 'blue'],
        'son-daugther-mather': ['son-daugther', 'mather', 'green'],
        'father-gf1': ['father', 'gf1', 'blue'],
        'father-gm1': ['father', 'gm1', 'blue'],
        'mather-gf2': ['mather', 'gf2', 'green'],
        'mather-gm2': ['mather', 'gm2', 'green'],
        'gf1-_2gf1': ['gf1', '_2gf1', 'blue'],
        'gf1-_2gm1': ['gf1', '_2gm1', 'blue'],
        'gm1-_2gf2': ['gm1', '_2gf2', 'blue'],
        'gm1-_2gm2': ['gm1', '_2gm2', 'blue'],
        'gf2-_2gf3': ['gf2', '_2gf3', 'green'],
        'gf2-_2gm3': ['gf2', '_2gm3', 'green'],
        'gm2-_2gf4': ['gm2', '_2gf4', 'green'],
        'gm2-_2gm4': ['gm2', '_2gm4', 'green'],
        'God-_2gf1': ['God', '_2gf1', 'red'],
        'God-_2gf2': ['God', '_2gf2', 'red'],
        'God-_2gf3': ['God', '_2gf3', 'red'],
        'God-_2gf4': ['God', '_2gf4', 'red'],
        'God-_2gm1': ['God', '_2gm1', 'red'],
        'God-_2gm2': ['God', '_2gm2', 'red'],
        'God-_2gm3': ['God', '_2gm3', 'red'],
        'God-_2gm4': ['God', '_2gm4', 'red'],
    };

    const svgRect = document.getElementById('svg').getBoundingClientRect();
    const nodes = {};
    for (const line in lines) {
        const [startNodeId, endNodeId, color] = lines[line];
        const startNode = document.getElementById(startNodeId);
        const endNode = document.getElementById(endNodeId);
        const startX = (startNode.getBoundingClientRect().left + startNode.getBoundingClientRect().right) / 2;
        const startY = (startNode.getBoundingClientRect().top + startNode.getBoundingClientRect().bottom) / 2;
        const endX = (endNode.getBoundingClientRect().left + endNode.getBoundingClientRect().right) / 2;
        const endY = (endNode.getBoundingClientRect().top + endNode.getBoundingClientRect().bottom) / 2;
        nodes[line] = [startX - svgRect.left, startY - svgRect.top, endX - svgRect.left, endY - svgRect.top, color];
    }

    for (const line in nodes) {
        const [x1, y1, x2, y2, color] = nodes[line];
        const lineElement = document.getElementById(line);
        setAttributes(lineElement, {
            'x1': x1,
            'y1': y1,
            'x2': x2,
            'y2': y2,
            'stroke': color,
            'stroke-width': 14,
            'stroke-linecap': 'round'
        });
    }
}

function setAttributes(el, attrs) {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let i = 0; i < nodes.length; i++) {
    let id = nodes[i].id;
    dragElement(document.getElementById(id));

    //Make the DIV element draggagle:
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id)) {
            /* if present, the header is where you move the DIV from:
            если он присутствует, заголовок — это место, откуда вы перемещаете DIV:*/
            document.getElementById(elmnt.id).onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:
            в противном случае переместите DIV из любого места внутри DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            updateLines();
        }
        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


}
