document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingoBoard');
    createBingoBoard(board);
});

function createBingoBoard(board) {
    const items = ['Nice dono bait and switch', '"I wanna end stream"', 'I would beat (insert thing) in a fight guys', 'KOSS GIGACHAD spam', 'Plays games all night instead of sleeping', '"I have a lore degree"', 'Purposely words a story in a bad way to farm', 'Retells old story', '"I will be online tomorrow guys"', 'Mum doesnt say "love you" back', '"Im not reading that" fat laugh', 'Gaybaiting', 'IM SO LUCKY/ UNLUCKY', 'Ex again', '"I swear on my mums life"', 'Accidentally calls Bluey Blowey', 'Shit talks ela (Jealousy)', 'Depressed voice', '"I have anxiety"', 'Whines about mods not playing mediashare', 'Fat screaming', 'Gem hating in chat', 'Reddit joke', '"Dont clip that"'];
    let counter = 0;
    const today = new Date().toISOString().slice(0, 10);
    Math.seedrandom(today);

    shuffleArray(items);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div');
            cell.classList.add('bingo-cell');
            cell.innerHTML = `<span class="cross"></span>${items[counter++]}`;
            if (i === 2 && j === 2) {
                cell.innerHTML = `<span class="cross"></span><span class="special-text">DIESOFCRINGE spam (FREE)</span>`;
                cell.classList.add('free-space');
            }
            cell.addEventListener('click', function() {
                this.querySelector('.cross').classList.toggle('show');
            });
            board.appendChild(cell);
        }
    }
}

// Shuffle the array using the seeded random number generator
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}