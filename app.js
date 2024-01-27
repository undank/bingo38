document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingoBoard');
    let items = [];

    fetch('list.txt') // import items from list.txt
        .then(response => response.text())
        .then(text => {
            items = text.split('\n');
            randomizeBoard(board, [...items]);
        })
        .catch(err => console.error('Error fetching the list:', err));
    
    randomizeBoard(board, [...items]); // Default to random seed

    document.getElementById('randomizeButton').addEventListener('click', () => {
        randomizeBoard(board, [...items]);
    });

    document.getElementById('dailySeedButton').addEventListener('click', () => {
        resetWithDailySeed(board, [...items]);
    });
});

function createBingoBoard(board, items) {
    board.innerHTML = '';
    let counter = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div');
            cell.classList.add('bingo-cell');
            cell.innerHTML = `<span class="cross"></span>${items[counter++]}`;
            if (i === 2 && j === 2) {
                cell.innerHTML = `<span class="cross"></span><span class="special-text">DIESOFCRINGE SPAM </br>(FREE)</span>`;
                cell.classList.add('free-space');
            }
            cell.addEventListener('click', function() {
                this.querySelector('.cross').classList.toggle('show');
            });
            board.appendChild(cell);
        }
    }
}

function randomizeBoard(board, items) {
    shuffleArray(items);
    createBingoBoard(board, items);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetWithDailySeed(board, items) {
    const today = new Date().toISOString().slice(0, 10);
    Math.seedrandom(today);
    shuffleArray(items);
    createBingoBoard(board, items);
}
