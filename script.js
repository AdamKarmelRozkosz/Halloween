const cssCursors = [
    'auto',
    'default',
    'none',
    'context-menu',
    'help',
    'pointer',
    'progress',
    'wait',
    'cell',
    'crosshair',
    'text',
    'vertical-text',
    'alias',
    'copy',
    'move',
    'no-drop',
    'not-allowed',
    'grab',
    'grabbing',
    'all-scroll',
    'col-resize',
    'row-resize',
    'n-resize',
    'e-resize',
    's-resize',
    'w-resize',
    'ne-resize',
    'nw-resize',
    'se-resize',
    'sw-resize',
    'ew-resize',
    'ns-resize',
    'nesw-resize',
    'nwse-resize',
    'zoom-in',
    'zoom-out'
];
let cursorIndex = 0;

function changeCursor() {
    document.body.style.cursor = cssCursors[cursorIndex];
    cursorIndex = Math.floor(Math.random() * 35) + 1;
}

setInterval(changeCursor, 100);