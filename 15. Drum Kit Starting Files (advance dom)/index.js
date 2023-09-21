
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0 ; i < numberOfDrumButton ; i++)
{
    //querySelectorAll ti drum class jya hoy te select thay ane 0 to 7 time loop fari
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        Animation(buttonInnerHTML);
        
          
    });

}




document.addEventListener("keypress" , function(EVENT){

    makeSound(EVENT.key);

    Animation(EVENT.key);
});


function makeSound(KEY){

    switch (KEY) {
        case "w":                            
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();  
        break;

        // "w" aa innerHTML che je w lakiu hase html ma tene click kaarsi atle aa event thase

        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();  
            break;

        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();  
            break;

        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();  
            break;

        case "j":
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();  
            break;

        case "k":
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();  
            break;

        case "l":
            var audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();  
            break;


        default:
            break;
    }

}

// function Animation(currentKey){

//     [same => document.querySelector("h1").classList.add("pressed");]

//     var activeButton = document.querySelector("." + currentKey);   //.w , .k evi rite
//     activeButton.classList.add("pressed");

// }


//atlu kari to button press j rahe che but tene 1sec pachi pachu hatu evi position ma aavi jai evu karvu hoy to 
//settimeout no use karvu

// setTimeout(function, milliseconds, param1, param2, ...)
//here function = (Required) The function to execute.
//milliseconds = (Optional) Number of milliseconds to wait before executing. Default value is 0
//param1 = (Optional) Parameters to pass to the function.

//setTimeout(myGreeting, 5000);
// function myStopFunction()
// {
//   alert("myTimeout");
// }


function Animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);   //.w , .k evi rite
     activeButton.classList.add("pressed");

     setTimeout(function(){
        activeButton.classList.remove("pressed");
     } , 100);
}


setTimeout(function(){activeButton.classList.remove("pressed");} , 100);

//setTimeout(function() , 100)
//ahi koi function niche banviu hoy tenu name pan aapi saki pan ahi direct ahi j function banaviu