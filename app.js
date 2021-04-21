//Variables as per the guide
const keyboard = document.querySelector('#qwerty');   
const phrase = document.getElementById=('phrase');  
const startButton = document.querySelector('.btn__reset');
let missed = 0;


// Phrase array
let phrases = [
  'I had the time of my life',
  'bouncing is what tiggers do best',
  'if i had a million dollars',
  'lets get dangerous',
  'fuzzy wazzy was a bear',
  'running down a dream'
];

// event listener for click of start button
const homepage = document.querySelector('#overlay');
startButton.addEventListener('click', ()=>{
    homepage.style.display = 'none';
  });

/* Use the variable to select an index inside of the array*/
function getRandomPhraseAsArray(arr) {
    let randomArr = arr[Math.floor(Math.random() * phrases.length)];   
    return splitArray = randomArr.split([,]);
}      

// creat addPhraseToDisplay function
const phraseList = document.querySelector('#phrase ul');
function addPhraseToDisplay (arr)  {
  //create list li item loop
  for(let i = 0; i < arr.length; i++) {     
    const li = document.createElement('li');
    phraseList.appendChild(li);
    li.textContent = arr[i];
    // insert an if statement here to check if arr[i] is a space, if it is give it the class of "space"
    if (arr[i] === ' '){
      li.classList.add("space");
    } else {
      li.classList.add("letter");
    }
  }
}


//To use the function, you’ll get the value returned by the getRandomPhraseAsArray, save it to a variable 
const RandomPhrase = getRandomPhraseAsArray(phrases); 

//and pass it to addPhraseToDisplay as an argument
addPhraseToDisplay(RandomPhrase);


//check letter function
const letters = document.querySelectorAll('.letter');
const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letters.length; i++) {
            if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
    }
        return matched;
  }


//Add an event listener to the keyboard
const liveHeart = document.querySelectorAll('.tries img');
keyboard.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
        e.target.className = 'chosen';
        e.target.disabled = true;

        const match = checkLetter(e.target.textContent.toLowerCase());

        if (match === null) {
            // code to change heart icon from liveHeart.png to lostHeart.png would go here
            liveHeart[missed].src = 'images/lostHeart.png';
            missed++;
        }
        // checkWin() function call would go here, the function is created as below
        checkWin();
    }
    reset();  //reset game after win or lose, the function is at the end
});


//create checkWin function
function checkWin () {
  const show = document.querySelectorAll('.show');
  let message = document.querySelector('.title')
  if (letters.length === show.length) {
      homepage.className = "win"; 
      message.textContent = `Congrats you guessed the puzzle!`;
      homepage.style.display = "flex";
  } else if (missed > 4) {
      homepage.className = "lose"; 
      message.textContent = `Try again next time`;
      homepage.style.display = "flex";
      }   
}


// create reset function

function reset () {
  startButton.textContent = 'play again';
  startButton.addEventListener('click', ()=> {
      location.reload();
      startButton.style.transition = '5s';
  });

}   
