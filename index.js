const grid = document.querySelector('.grid');
grid.style.setProperty('--side-length', 16);
let sideLength = 16;

resizeGrid();

const resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', () => {
    const w = parseInt(prompt('Cells per side: '));
    resizeGrid(!Number.isInteger(w) || w <= 0 || w >= 100 ? 16 : w);
});

function resizeGrid() {
    grid.replaceChildren();
    grid.style.setProperty('--side-length', sideLength);

    for (let i = 0; i < sideLength ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', () => {
            cell.classList.add('shaded');
            const rc = () => Math.floor(Math.random() * 256);
            cell.style.backgroundColor = `rgb(${rc()}, ${rc()}, ${rc()})`;
        });
        grid.appendChild(cell);
    }
}