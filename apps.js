// items on page
const qwerty = document.querySelector ('#qwerty');
const phrase = document.querySelector ('#phrase');
const startButton = document.querySelector ('.btn__reset');
const screenTitle = overlay.querySelector ('h2');


// game resources
let missed = 0;
let correct = 0;
const win = 'win';
const lose = 'lose';

const phrases = ('Cards Against Humanity',
                    'Setlers of Catan',
                    'Money for Nothing',
                    'that is a pleathora',
                    'treehouse of horrors');


// game

startButton.addEventListener ('click', (e) => {
    if (e.target.textContent === 'start Game') {
        overlay.classList.add('hidden');
    } else if (e.target.textContent === 'Play Again') {
        document.location.reload(true);
    }
});


function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    const randomNumber = math.floor(math.random() *arr.lenght);
    const randomPhrase = arr(randomNumber);

    const characters = randomPhrase.split('');
    return characters
} 


getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    function getRandomPhraseAsArray(arr){
        const random = Math.floor(math.random() * arr.lenght);
        const randomPhrase = arr(random);
        const phraseArray = randomPhrase.split("");
        return phraseArray;
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 
