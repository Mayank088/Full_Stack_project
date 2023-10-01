var colorName = ["green" , "red" , "yellow" , "blue"];


//step - 5  it is use for start the game or when first time is clicked on the game
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started)
    {
      nextSequence();
      $("#level-title").text("Level " + level);
      started = true;
    }
});




//step 2 - user click petern
var user_Clicked_Color_store = [];

$(".btn").click(function(){
  var user_Clicked_Color = $(this).attr("id");

  user_Clicked_Color_store.push(user_Clicked_Color)
  
  animatePress(user_Clicked_Color)
  playSound(user_Clicked_Color);

  checkAnswer(user_Clicked_Color_store.length-1);

});



//step 6 - it is for cheking the ans thet user is clicked right or wrong..
function checkAnswer(current_Level){

    if(computer_chooesn[current_Level] === user_Clicked_Color_store[current_Level])
    {
      // console.log("success");

      if(computer_chooesn.length === user_Clicked_Color_store.length)
      {
        //all okey then its computer's trun so we call random to click computer so we can call nextSequence
          setTimeout(function () {
          nextSequence();
          }, 1000);
      }
    }

    else
    {
      // console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");           // <body class="game-over">  ..... </body>

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();

    }

} 



//step - 1
var computer_chooesn = [];

function nextSequence()
{

  //this one line code is step - 6
  user_Clicked_Color_store = [];


  //first two line of code is step 5
  level++;
  $("#level-title").text("Level " + level);


  var random_Number = Math.floor(Math.random()*4);
  var random_color = colorName[random_Number];
  computer_chooesn.push(random_color);

  playSound(random_color);
  $("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);

}




//step 3 -sound for perticuler button
function playSound(name){
  var playsong = new Audio("sounds/" + name + ".mp3");
  playsong.play();
}



//step 4 - when user press then button got litle bit darker..
function animatePress(current_Color){

  $("#" + current_Color).addClass("pressed");

  setTimeout(function(){
    $("#" + current_Color).removeClass("pressed");
  },100);

}



//step - 7 
function startOver() {

  level = 0;
  computer_chooesn = [];
  started = false;
}
