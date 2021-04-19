
//Variables
const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('btn__reset')
const headding= document.querySelector('h2')

//missed start at 0 always
let missed = 0;


// phrases
const phrases = [
    'I had the time of my life',
    'bouncing is what tiggers do best',
    'if i had a million dollars',
    'lets get dangerous',
    'fuzzy wazzy was a bear',
    'running down a dream'
];


//event listener for click of start button
startGame[0].addEventListener('click', () =>{
    overlay.style.display = 'none'
    console.log('this made it through');
});

//using the length to get a randome number 
function getRandomPhraseChoice(arr) {
    const rP = Math.floor(Math.random() * arr.length );
    // this will chose the phrase from the array
    const randomPhrase = arr[rP];
    alert(randomPhraseChoice);
}

