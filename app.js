document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingoBoard');
    const items = ['Nice dono bait and switch', 
                   '"I wanna end stream"', 
                   'I would beat (insert thing) in a fight', 
                   'KOSS GIGACHAD spam', 
                   'Plays games all night instead of sleeping', 
                   '"I have a lore degree"', 
                   'Purposely words a story in a bad way to farm', 
                   'Retells old story', 
                   '"I will be online tomorrow guys"', 
                   'Mum doesnt say "love you" back', 
                   '"Im not reading that" fat laugh', 
                   'Gaybaiting', 
                   'IM SO LUCKY / UNLUCKY', 
                   'Ex again', '"I swear on my mums life"', 
                   'Accidentally calls Bluey Blowey', 
                   'Shit talks Ela (Jealousy)', 'Depressed voice', 
                   '"I have anxiety"', 
                   'Mods scam mediashare', 
                   'Fat screaming', 
                   'Reddit joke', 
                   '"Dont clip that"', 
                   'Slams desk', 
                   '"I dont have shit hair"', 
                   'someone raids and does "better streamer" bit',
                   '"I will practice this run"', 
                   '"My controller fell"', 
                   'Animal noises (oink, bark, meow etc)', 
                   'Cringe / WAYTOODANK media share', 
                   '"All achievements run soon"', 
                   'Blowey is told off by nemz', 
                   'Gem says something based in chat', 
                   '"Ashley is not a girls name', 
                   'Less than 10 likes on tweet',
                   'nemz has insane freakout and keeps streaming', 
                   'Gets a run past Pontiff (rare)'];
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
