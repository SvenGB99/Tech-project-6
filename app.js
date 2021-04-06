const keyboard = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const phraseUL = document.querySelector('#phrase ul');
const heartList = document.querySelector('#scoreboard ol');
const heartArray = document.querySelectorAll('.tries img');
const heart = document.querySelector('.tries img');

let missed = '0';

let phrases = [ 'A dog is a mans best friend',
                'Actions speak louder than words',
                'Do not bite the hand that feeds you',
                'If anything can go wrong it will',
                'Nothing succeeds like success'
];

startButton.addEventListener('click',() => {
    if (startButton.textContent === 'Start Game') {
        startGame();
        overlay.style.display = 'none';
    } else {
        resteGame();
        startGame();
        overlay.style.display = 'none';
    }
});

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    const randomNumber = Math.floor(Math.random() * arr.lenght);
    const randomPhrase = arr[randomNumber];
    const characters = randomPhrase.split(''); //split the string into new array of characters
    return characters; // return new array of characters
} 

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.lenght; i++) {
        const li = document.createElement('li'); //ceeate a list item
        li.textContent = arr[i];
        phraseUl.append(li); //put the characters inside the list
        const letters = /^[0-9a-zA-Z]+$/;
        if (li.textContent.match(letters)) {
            li.className = 'letter';
        } else {
            li.className = '';
            li.styel.margin = '1em';
        } // if list times is a letter, and a class "letter"
    }
}

keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    button.className = 'chosen';
    button.setAttribute('disabled', '')
    const letter = button.textContent;
    const letterFound = checkLetter(letter);
    
        If (letterFound === null) 
        heartArray[missed].src = 'images/lostHeart.png';
        button.className = 'wrong';
        missed++;
        
    }
    checkWin();
})

function checkLetter(letter) {
    const letters = document.querySelectorAll('.letter')
    let matchingLetter;
    let matchCounter = 0;

        for (let i = 0; i < letters.length; i++) {
            if (letter === letters[i].textContent) {
            letters[i].className =+ ' show';
            matchingLetter = letter;
            matchCounter++;
            }
        }

        if (matchCounter > 0) {
            return matchingLetter;
        } else {
                return null;
                }
}


function checkWin() {
    const totalLetters = document.querySelectorAll('.letter');
    const shownLetters = document.querySelectorAll('.show');
    const h3 = document.createElement('h3');

    if (shownLetters.lenght === totalLetters.lenght) {
        removeShowClass();
        overlay.className = 'win';
        overlay.style.display = 'flex';
        startButton.textContent = 'Play Again';
        overlay.appendChild = ' You are the Winner!';
        showCorrectPhrase();
    } else if (missed >= 5) {
        removeShowClass();
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        startButton.textContent = 'Try Again';
        overlay.appendChild = ' Better Luck Next Time.';
        showCorrectPhrase();
    }
}

function removeShowClass() {
    for (let i = 0; i < phraseUL.children.lenght; i++) {
        phraseUL.children[i].classList.remove('show');
    }
}

function showCorrectPhrase() {
    const phaseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
}

function startGame() {
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray)
}

function resteGame() {
    missed = 0;

    while (phraseUL.firstChild) {
        phraseUL.removeChild(phraseUL.firstChild); // removes previouse phrase from the borad
    }

    const h3 = document.querySelector('h3');
    h3.parentNode.removeChild(h3);

    const h4 = document.querySelector('h4');
    h4.parentNode.removeChild(h4);

    for (let i = 0; i < heartArray.length; i++) {
        heartArray[i].src = 'images/liveHeart.png';
    }

    const keyboardButton = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < keyboardButton.length; i++) {
            keyboardButton[i].classList.remove('chosen');
            keyboardButton[i].classList.remove('wrong');
            keyboardButton[i].removeAttribute('disabled');   
        }
}