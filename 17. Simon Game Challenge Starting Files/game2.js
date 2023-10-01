var button_Colours = ["green" , "red",  "yellow" , "blue"];  
var game_Random_Pattern = [];

function nextSequence(){

    level++;
    $("#level-title").text("Level " + level);            //niche keypress vadu function che tena mate

    var random_Number = Math.floor(Math.random()*4);
    var random_Choosen = button_Colours[random_Number];
    game_Random_Pattern.push(random_Choosen);

    $("#" + random_Choosen).fadeIn(100).fadeOut(100).fadeIn(100);


    // var audio_Chooesn_Random = new Audio("sounds/" + random_Choosen + ".mp3")
    // audio_Chooesn_Random.play();
    
    PlaySound(random_Choosen);
}


var user_Clicked_Color_store = [];

 //badha btn vada class select karse and temathi jena par click thase tena par function run thase 
$(".btn").click(function() {                      
   
    var user_Clicked_Color = $(this).attr("id");           //html ma je id nu name che te aapse 
    //  => alert(user_Clicked_Color);

    user_Clicked_Color_store.push(user_Clicked_Color);
    //console.log(user_Clicked_Color_store);


    // var audio_chooes_by_user = new Audio("sounds/" + user_Clicked_Color + ".mp3");
    // audio_chooes_by_user.play();

    PlaySound(user_Clicked_Color);

    animate_on_click(user_Clicked_Color);

    checkAnswer(user_Clicked_Color_store.length - 1);

});



function PlaySound(name){
    var audio_chooes = new Audio("sounds/" + name + ".mp3");
    audio_chooes.play(); 
}




function animate_on_click(currentColour){

    $("#" + currentColour).addClass(".pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}





//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var start = false;         // false hoy to game chalu nai karvani 

var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!start) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);

    nextSequence();
  

    start = true;             
    //atyre true che atle if ma !true thase to andar nai aave atle ek var game chalu thay jai pachi keybord ma game te key press kari toi kai no thay aa khali first time chalu karva mate koi key press karvanu hatu....
  }
});




//baki ahi ti

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(current_Level) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (game_Random_Pattern[current_Level] === user_Clicked_Color_store[current_Level]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (user_Clicked_Color_store.length === game_Random_Pattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }

}


function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}