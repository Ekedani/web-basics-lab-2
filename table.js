document.querySelectorAll('.task-table td')
    .forEach(el => {
        el.addEventListener('mouseover', onCellMouseOver);
        el.addEventListener('mouseout', onCellMouseOut);
        el.addEventListener('click', onCellClick);
        el.addEventListener('dblclick', onCellDblClick);
    });


function onCellMouseOver(e) {
    e.target.originalColor = e.target.style.backgroundColor;
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColorHex}`;
}

function onCellMouseOut(e) {
    e.target.style.backgroundColor = e.target.originalColor;
}

function onCellClick(e) {
    const colorPicker = document.querySelector('#color-picker');
    e.target.originalColor = colorPicker.value;
    e.target.style.backgroundColor = colorPicker.value;
}

function onCellDblClick(e) {
    const colorPicker = document.querySelector('#color-picker');
    const parentElement = e.target.parentElement;
    const cells = Array.from(parentElement.children);
    cells.forEach(cell => cell.style.backgroundColor = colorPicker.value);
}

