
//Variables
const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementById('btn__reset')
const headding= document.querySelector('h2')
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
startGame.addEventListener('click', ()=> {
    // overlay.style.display = 'none'
    alert('this made it throgh')
});

//using the length to get a randome number 
function getRandomPhrase(arr) {
    const randomPhrase = Math.floor( Math.random() * phrases.length) + 1
    alert(randomPhreae)
}

//get random phrase from array
function phraseChoice(arr) {
    for (  let i = 0; i = arr.length; i++) {

    }
}