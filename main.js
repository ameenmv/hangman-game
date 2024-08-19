// letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letter
let lettersArray = Array.from(letters);

// select letter container
let letterContainer = document.querySelector(".the-letters")

// generate letters
lettersArray.forEach(letter =>{

    // create span 
    let span = document.createElement("span")

    // create letter text node
    let theLetter = document.createTextNode(letter)

    // append letter to span
    span.appendChild(theLetter)

    // add class to span
    span.className = 'letter-box';

    // apeend span to letters container 
    letterContainer.appendChild(span)
});

// objet=ct of word + categoty
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// get random property
let allKeys = Object.keys(words)

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// the choosen word
let randomValueValue = randomPropValue[randomValueNumber]

// set category info
document.querySelector(".game-info span").innerHTML = randomPropName

// select letter guess element
let lettersGuessContainer = document.querySelector(".the-letter-guess")

// convert choosen word to array
let letterAndSpace = Array.from(randomValueValue)

// creatte spans depend word
letterAndSpace.forEach(letter => {

    // create empty span()
    let emptySpan = document.createElement("span")

    // if letter is space
    if(letter === " "){
        // add class to the span
        emptySpan.className = "with-space"
    }

    // append span to the letter guess container
    lettersGuessContainer.appendChild(emptySpan)
})

// select guess span
let guessSpans = document.querySelectorAll(".the-letter-guess span")

// set wrong attemps
let wrongAttemps = 0;

// select the draw element
let theDraw = document.querySelector(".hangman-draw")


// handle clicking on letters
document.addEventListener("click", (e)=>{

    //set the choosen status
    let theStatus = false;

    if(e.target.className === "letter-box"){

        e.target.classList.add("clicked");

        // get clicked lettet
        let theclickedLetter = e.target.innerHTML.toLowerCase()

        // the chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        theChosenWord.forEach((wordLetter , wordIndex)=>{

            // if the clicked letter equal to one of the choosen word letter
            if(theclickedLetter == wordLetter ){

                // // set status to correct
                theStatus = true;

                // loop on all guess spans 
                guessSpans.forEach((span , spanIndex)=>{

                    if(wordIndex === spanIndex){

                        span.innerHTML = theclickedLetter

                    }

                    
                });

            }



        })

        // outside loop 

        // if letter is wrong
        if (theStatus !== true) {

            // increase the wrong attemps
            wrongAttemps++;

            // add class wtrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttemps}`)

            // play fail sound
            document.getElementById("fail").play();

            if(wrongAttemps === 8){

                endGame();

                letterContainer.classList.add("finished")

            }


        }else{
            // play success sound
            document.getElementById("success").play();
        }

    }

})

// End Game Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);

}