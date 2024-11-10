// Random number generate karna
var randomNumber = Math.floor(Math.random() * 20) + 1;
var guessedNumbers = document.getElementsByClassName('guessednumber');


// check function
var score = document.getElementsByClassName ('remainingscore')[0];
score = 20
var highScore= document.getElementsByClassName('highscore')[0];
highScore=0
var guessedValue = guessedNumbers[0].value;
var i = guessedValue.lenght
function check() {
    var guessedValue = guessedNumbers[0].value;
    console.log('Guessed Number:', guessedValue);
    if (guessedValue == randomNumber) {
        console.log("Correct Guess!");
        document.getElementsByClassName('replacebleText')[0].innerText = "Correct Guess!"
            if(score>highScore){
                highScore=score                
                document.getElementsByClassName('highscore')[0].innerText=highScore;
            }
        } else if(guessedValue != randomNumber && guessedValue <=20 && score>0){
            console.log("Wrong Guess! Try again.");
            document.getElementsByClassName('replacebleText')[0].innerText = "Incorrect Guess!"
            score = score-1;
            document.getElementsByClassName('remainingscore')[0].innerText = score;
        }
        else if(guessedValue>20){
            // document.getElementsByClassName('replacebleText')[0].innerText = "Guess number in the range of 1 to 20 not more then that!"
            document.getElementsByClassName('replacebleText')[0].innerText = "Guess in the given range from 1 to 20 !!"
            document.getElementsByClassName('remainingscore')[0].innerText = score;
        }
        else if (score==0){
            alert("score 0")
            var playAgain =document.createElement('button')
            playAgain.innerText="Retry"
            playAgain.classList.add('checknumber', 'special');
            document.getElementsByClassName('rightarea')[0].appendChild(playAgain);
            playAgain.addEventListener('click', function() {
                console.log("user choose to play again");
                score=20
                playAgain.style.display = 'none';
                document.getElementsByClassName('remainingscore')[0].innerText = score;
                randomNumber = Math.floor(Math.random() * 20) + 1;
                check()
            })
        }   
        else if (isNaN(guessedValue) || guessedValue === "") {
            document.getElementsByClassName('replacebleText')[0].innerText = "Please enter a valid guess number";
        }
        
    }
    
    
    function tryAgain(){
        score = 20
        randomNumber = Math.floor(Math.random() * 20) + 1;
        document.getElementsByClassName('remainingscore')[0].innerText = score;
    }
    function reset(){
        score=20
        highScore=0
        randomNumber = Math.floor(Math.random() * 20) + 1;
        document.getElementsByClassName('remainingscore')[0].innerText = score;
        document.getElementsByClassName('highscore')[0].innerText=highScore;
    }