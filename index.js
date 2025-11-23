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
            if (!cell.classList.contains('shaded')) {
                cell.classList.add('shaded');
                const rc = () => Math.floor(Math.random() * 256);
                cell.style.background = `rgb(${rc()}, ${rc()}, ${rc()})`;
            }
            else {
                cell.style.background = 
                `rgb(${cell.style.background
                .match(/\d+/g)
                .map(x => Math.floor(Number(x * 0.8)))})`;
            }
        });
        grid.appendChild(cell);
    }
}