
// Variables
const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const listUl = document.querySelector('ul');


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

// get random phrase from arry via random number selection
function getRandomPhrase(arr) {
    const randomP = arr[Math.floor(Math.random() * arr.length)];
    getRandomPhrase(list);
}

// displaying the phrase in the gameshow
function addPhraseToDisplay(arr) {
    let phrase = getRandomPhrase(list);
    for(let i = 0; i < arr.length; i++) {
        
        // let addListItem = document.creatElement('li');
        // listUl.appendChild(addListItem)
        // addListItem.textContent = array[i]
    }
}