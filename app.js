// game values

let min=4,
    max=10,
    winningnum=getwinninnum(min,max),
    guessesleft=3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guess_btn = document.querySelector('#guess-btn'),
      guess_input  = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Add min and Max from JS

minNum.textContent = min;
maxNum.textContent = max;

// Play again even listner

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
});

// Listern from user 

guess_btn.addEventListener('click',function(){
    let guess = parseInt(guess_input.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please select Numbers in range ${min} and ${max}`,'red')
    }

    if(guess === winningnum){
        // Game over won
        gameover(true,'Congratulations!')
    } else{
        // wrong number
        guessesleft -= 1
        
        if(guessesleft === 0){
            // Game over Lost!
            gameover(false,`Game over, you Lost. The correct number was ${winningnum}`)
        }else{
            guess_input.value='';
            guess_input.style.borderColor = 'red'
            // Game continues answer wrong
            setMessage(`${guess} is not correct, you have ${guessesleft} guesses left`,'red')
        }
    }
});


function gameover(won,msg){
    let color;
    won === true ? color ='green' : color = 'red';
    // Disable Input
    guess_input.disabled = true;
    // Make border green
    guess_input.style.borderColor = color;
    // set message
    setMessage(msg,color)

    // Play Again?

    guess_btn.value = 'Play Again';
    guess_btn.className += 'play-again';
    
}

function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}


function getwinninnum(min,max){
    return Math.floor(Math.random()*(max-min+min));
}






