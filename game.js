const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(randomChosenColour).on(() => {
        $(randomChosenColour).fadeToggle(100);
    }); 
    
    const playSound = new Audio("sound/" +  randomChosenColour);
    playSound.play();
    
}

$(".btn").on("click", (event) => {
    const userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
})

