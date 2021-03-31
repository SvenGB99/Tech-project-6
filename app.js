const keyboard = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn_reset');

let missed = '0';

let phrases = [ 'A dog is a mans best friend',
                'Actions speak louder than words',
                'Do not bite the hand that feeds you',
                'If anything can go wrong it will',
                'Nothing succeeds like success'
];

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    const randomNumber = Math.floor(Math.random() * arr.lenght);
    const randomPhrase = arr[randomNumber];

    const characters = randomPhrase.split('');

    return characters;
} 


function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.lenght; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        phraseUl.append(li);
        const letters = /^[0-9a-zA-Z]+$/;
        if (li.textContent.match(letters)) {
            li.className = 'letter';
        } else {
            li.className = '';
            li.styel.margin = '1em';
        }
    }
}

