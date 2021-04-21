
// Variables
const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const listUl = document.querySelector('ul');
const hearts = document.querySelector('.tries');
const letter = document.querySelector('letters');


// missed start at 0 always
let missed = 0;


// phrases
const list = [
    'I had the time of my life',
    'bouncing is what tiggers do best',
    'if i had a million dollars',
    'lets get dangerous',
    'fuzzy wazzy was a bear',
    'running down a dream'
];


// Variables

// event listener for click of start button
startGame.addEventListener('click', () => {
    overlay.style.display = 'none'
    console.log('this made it through');
});

// get random phrase from arry via random number selection and split the em up
function getRandomPhrase(arr) {
    let randomP = arr[Math.floor(Math.random() * arr.length)];
    return randomP;
}

let newP = getRandomPhrase(list);

// creat addPhraseToDisplay function

function addPhraseToDisplay(arr) {
    for( let i = 0; i < newP.length; i++) {
        const li = document.createElement('li');
        listUl.appendChild(li);
        li.textContent = arr[i];

        if (arr[i] === ' ') {
            li.classList.add("space");
        } else {
            li.classList.add('letter');
        }
    }
}

const randomPhrase = getRandomPhrase(list);

addPhraseToDisplay(randomPhrase)

// check if a letter is in the phrase
const checkletter = (button) => {
    let matched = null;
    for( i = 0; i < letter.length; i++ ) {
        if (keyBoard === letters[i].textContent.toUppeCase()) {
            letter[i].classList.add('show');
            matched = true;
        }
    }
    return matched;
}

// adding event listener for the keyboard

keyBoard.addEventListener('click', e => {
    if (e.target.tagName === "button") {
        e.target.className = 'chosen';
        e.target.disabled = true;

        const match = checkLetter(e.target.textContent.toUppeCase());
        if (match === null) {
            hearts[missed].src = 'images/lostHeart.png'; // if you gess a letter wrong this will change the heart to a light blue.
            missed++;
        }
        checkWin();
    }
    // this will allow you to rest the game
    reset();
});

// winner winner chicken dinner

function checkWin () {
    const show = document.querySelectorAll('.show');
    let message = document.querySelector('.title');
    if (letters.length === show.length) {
        homepage.className = "win";
        message.textContent = `you are the winner!!`;
        homepage.style.display = 'flex';
    } else {
        homepage.className = "lose";
        message.textContent = `sorry try again...`;
        homepage.style.display = 'flex';
    }
}

// lets try that again with a reset function

function reset () {
    startGame.textContent = 'new puzzle';
    startGame.addEventListener('click', ()=> {
        location.reload();
        startGame.styel.transistion = '5s';
    });
}