
// Variables
const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset')


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


// event listener for click of start button
startGame.addEventListener('click', () =>{
    overlay.style.display = 'none'
    console.log('this made it through');
});

// using the length to get a randome number 
// function getRandomPhraseChoice( arr ) {
//     let rP = Math.floor(Math.random() * arr.length );
//     return rP;
//     // this will chose the phrase from the array
//     const randomPhrase = arr[rP];
//     alert(getRandomPhraseChoice);
// }

function getRandomPhrase(arr) {
    const randomP = arr[Math.floor(Math.random() * arr.length)+1];
    // call random number;
    console.log(randomP);
    // getRandomNumber()
    // alert(randomNumber)
    
    
}

