document.querySelector("button").addEventListener("click" , handleClick);

//(aam karvati badha button nai select thay only first button j select thay same niche e j kariu che
// document.querySelector(".w").addEventListener("click" , handleClick);
//                              .addEventListener("event type" , js function)
//addEventListener aa ek method che ane tene 2 parameter hoy 1st is event type => ex. click ,
// and 2nd is  java script function       
//ahi 2nd parameter js function che tema handleClick() aam breaket nai karva baki direct call thay jase but aapde jayre tiya click kari tiyare j te function kam kare evu joi che atle handleClick aam j lakvu without breaket)

function handleClick(){
    alert("i got click!!")
}

//instance of this we can reduce our code by writing anonymous function
//ama function laki ne je hatu e j kariu che but ahi function nu name nai aapvu pade
//set class ne selct karvati andar na badha button select thay gaya game tene click kari te function run karse

document.querySelector(".set").addEventListener("click" , function (){
    alert("i got click!!")
});


// aa j vastu jo set name no class no hoy to kem karvu using for loop

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0 ; i < numberOfDrumButton ; i++)
{
    //querySelectorAll ti drum class jya hoy te select thay ane 0 to 7 time loop fari
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        alert("i got click!!")
    });

}


for(var i=0 ; i < numberOfDrumButton ; i++)
{
    //querySelectorAll ti drum class jya hoy te select thay ane 0 to 7 time loop fari
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        this.style.color = "white"
    });

}

//this. aam kari atle jaya hoy tena par event lagu pade atle tene white color ni event aapi atle ama jya pan click karsi drum vado class hovo hoy tema jya pan click karsi teno text color white thay jase


document.addEventListener("keypress" , function(){
    alert("key is pressed")
});

//aama kai querySelectorAll nathi kariu atle keybord mathi game te press karo te run thase j 



document.addEventListener("keypress" , function(EVENT){
    console.log(EVENT);
});
//aam parameter pass kari atle kai key press kari te consol ma batavse



// class add karvo hoy tena mate 
document.querySelector("h1").classList;
document.querySelector("h1").classList.add("pressed");

