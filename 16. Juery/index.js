// document.querySelector("h1").innerHTML = "hi"  
// is same in Jquery is => $("h1").innerHTML = "hi"    (ahi innerHTML anati nai thay tena mate biju lakvu pade aato example aavi rite selct kari sako em) 
//or  
//JQuery("h1").innerHTML = "hi";


//aa tag ma jquery ti css add karvu hoy to .css kari ne () ama pela proprty and pachi teni value 
//.css("proprty" , "value")
$("h1").css("color" , "red");


//agad js ma jou document.querySelector("button") aam select karta html tag button ne to khali ek j pelu button select thatu 
//but ahi $("button")  aam karsi to badha button select thase

//class add karvo hoy to

$("h1").addClass("big-title");
$("h1").addClass("big-title margin-50"); 
 //aam 2 class pan aapi saki 

 //aane query pan puchi saki
 $("h1").hasClass("margin-50");
 //ans aam avse=> true


// $("h1").removeClass("big-title");


//aagd je aapde innerHTML ti karta text change karta te aama thase
$("h1").text("bye..")


//anati html file ni andar HTML tag pan add kari saki

$("button").html("<em>don't click me.</em>")
// $("button").text("<em>don't click me.</em>")  ahi aam karsi to <em> don't click me. </em> aa tag sahit aavi jase o/p ma but .html ti karsi to  don't click me. aatlu j aavse



//attr => attribute 
//aagd js ma jem attribute change karta same j 
//.attr("attribute je change karvo hoy tenu name" , "je change karvu hoy link te navi link")
$("a").attr("href"  , "https://www.yahoo.com");

console.log($("h1").attr("class"));
//ans => first-hello big-title margin-50

//eventListener pan ama use kari saki badhi event hale click , press etc

$("h1").click(function (){
    $("h1").css("color" , "blue");
});


//aa j h1 par click kari to h1 no color blue thase



//game te button par click karsi to color blue thay tem karvu che

// for(var i = 0 ; i<5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click" , function(){
//         document.querySelector("h1").style.color = "blue";
//     });
// }

//js ma aatlu badhu lakvu pade tene badle
//but jquery ma aatlu j same upar nu kaarva mate


$("button").click(function(){
    $("h1").css("color" , "green")
})

//same j lakiu che but function upar banviu ene badle niche baniu ane tene parameter ma pass kariu

$("button").click(colorChange);

function colorChange(){
    $("h1").css("color" , "green")
}


//keybord event mate keypress use karvu

$("input").keypress(function(event){
    console.log(event.key)       //kai key press kari che te console ma batavse but only input ma j
});


// $(document).keypress(function(event){
//     console.log(event.key)       
//kai key press kari che te console ma batavse ahi aa webpage open karo pachi je kai press karo te batvase key andar console ma
// });



//have aa webpage open kari ane je pan key dabave te h1 ma batave tevu joi che
$(document).keypress(function(event){
    $("h1").text(event.key);
})



//have aavu keypress ne click ne mouseover ne evi badhi event mate tenu name lakvu pde tena ti pan selu
//$("h1").on("je event karvi hoy te js ni", function)
$("h1").on("click",function(){
    $("h1").css("color" , "yellow");
});

//aane same biji rite aam pan laki sakai
//ahi .on kari ne () aam breaket ma game te event ane te event ti su chage karvu che te aapi saki
// $("h1").on("click" , changeCss1)

// function changeCss1(){
//     $("h1").css("color" , "black")
// }



//mouse tiya ti jai atle color change thase
// $("h1").on("mouseover",function(){
//     $("h1").css("color" , "yellow");
// });

//html pan add kari saki ana ti
//h1 ni upar aavi jase navo button tag
$("h1").before("<button>New</button>");
// <button>New</button> <h1> hello </h1> 

//h1 puro thase pachi aavse button tag
$("h1").after("<button>New</button>");
//  <h1> hello </h1> <button>New</button>

//h1 tag ni andar pan hello lakiu che teni just pela aavse
$("h1").prepend("<button>New</button>");

//  <h1> <button>New</button>hello </h1> 

// same upar ni jem pan hello lakiu che teni just pachi j pan h1 ma j 
$("h1").append("<button>New</button>");

//  <h1> hello <button>New</button> </h1> 


//badha button remove kari nakse
// $("button").remove();


//hide thay jase h1 but aa hamesha mate hide j rese atle kayak event aapi devai ke aam kari to hide thay em
$("h1").hide();

//pachu aavi jase hide hase to
$("h1").show();


//button par click karsi to hide thay jase h1
// $("button").on("click" , function(){
//     $("h1").hide();
// })

//toggle kari atle hide hase to show thase and show hase to hide thase
// $("button").on("click" , function(){
//     $("h1").toggle();
// })


// hide no use kari to e tarat j hide and show thatu jevu click kari em but ama todi var lage 1sec thay hide thatu hoy dekhai 
//fadeOut te same hide jevu j che
$("button").on("click" , function(){
    $("h1").fadeOut();
})


//show  jevu j che
// $("button").on("click" , function(){
//     $("h1").fadeIn();
// })

//toggle a badha ma lagu pade evo che fadein hase to fadeout thase..

$("button").on("click" , function(){
    $("h1").fadeToggle();
})


//slide thay ne upar jse 
$("button").on("click" , function(){
    $("h1").slideUp();
})

//slied thay ne niche aavse
$("button").on("click" , function(){
    $("h1").slideDown();
})

//Drop down menu hoy te jem upar niche thatu hoy tevu j che tena mate use thay
//slideup hase to slide down kari nakse toggle
$("button").on("click" , function(){
    $("h1").slideToggle();
})

//animate({opacity : 0.5}); ti css pan add kari saki animate() ama {} aa karvo andar ane teni andar css add karvi
// note = ama only te j css halse jevi numric value vadi property hoy atle margin = 60; etc 
//ahi color = red avi nai hale
$("button").on("click" , function(){
    $("h1").animate({opacity : 0.5});
})


$("button").on("click" , function(){
    $("h1").animate({margin : "20"});   //ahi "" ama aapi atle % che tem ganse margin = 20%
    // $("h1").animate({margin : 20});   aa margin = 20  
})

//multiple method pan ek sate aapi saki
$("button").on("click" , function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
})