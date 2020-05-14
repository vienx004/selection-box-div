var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");

var selectionBox = {};
var isMouseClick = false;

function init() {
    body.addEventListener('mousedown', mouseDown);
    body.addEventListener('mouseup', mouseUp);
}

function mouseMove(event) {
    if(isMouseClick) {
        selectionBox.endX = event.x;
        selectionBox.endY = event.y;

        selectionBox.width = selectionBox.endX - selectionBox.startX;
        selectionBox.height = selectionBox.endY - selectionBox.startY;

        if( selectionBox.width < 0 ) {
            div.style.left = selectionBox.startX + selectionBox.width + 'px';
        }

        if( selectionBox.height < 0 ) {
            div.style.top = selectionBox.startY + selectionBox.height + 'px';
        }

        div.style.width = Math.abs(selectionBox.width) + 'px';
        div.style.height = Math.abs(selectionBox.height) + 'px';
    }
}

function mouseDown(event) {
    isMouseClick = true;

    selectionBox.startX = event.x;
    selectionBox.startY = event.y;

    div.id = 'selectionBox';
    div.style.left = selectionBox.startX + 'px';
    div.style.top = selectionBox.startY + 'px';
    body.appendChild(div);
    body.addEventListener('mousemove', mouseMove);
}

function mouseUp(event) {
    div.style.width = '1px';
    div.style.height = '1px';
    body.removeChild(div);
    isMouseClick = false;
}

init();