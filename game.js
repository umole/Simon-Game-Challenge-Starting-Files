const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).on(() => {
        $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    }); 
    
    playSound(randomChosenColour);
    animatePress(randomChosenColour);

    level++;
    $("h1").html("Level " + level);
    
    
}

function playSound(name) {
    const audio = new Audio("sounds/" +  name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $(`.${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`.${currentColour}`).removeClass('pressed');
      }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
              }, 1000);
              userClickedPattern = [];
        }
    } else {
        wrongAudio = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").html("Game Over, Press Any Key to Restart");
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

let firstKeyPress = false;
$(document).on("keydown", () => {
    if (!firstKeyPress) {
        firstKeyPress = true;
        nextSequence();

        $(".btn").on("click", (event) => {
            const userChosenColour = event.target.id;
            userClickedPattern.push(userChosenColour);
            checkAnswer(userClickedPattern.length - 1)
        
            playSound(userChosenColour);
        });

        //nextSequence();
    }
})



