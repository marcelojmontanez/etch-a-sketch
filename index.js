const grid = document.querySelector('.grid');
grid.style.setProperty('--grid-width', 16);

resizeGrid(16);

const resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', () => {
    const w = parseInt(prompt('How many cells?'));
    resizeGrid(!Number.isInteger(w) || w <= 0 || w >= 100 ? 16 : w);
});

function resizeGrid(gridWidth) {
    grid.replaceChildren();
    grid.style.setProperty('--grid-width', gridWidth);

    for (let i = 0; i < gridWidth ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', () => {
            cell.classList.add('shaded');
        });
        grid.appendChild(cell);
    }
}