
document.querySelector("ul").lastElementChild.innerHTML = "parmar"   
//last vadu j lye aa ignore karse select kariu  toi

//or
document.getElementsByTagName("li")[2].innerHTML = "mayank"       
//[0] start form 0 and here we have 3 li so last is 2 to change


document.getElementsByTagName("li")[2].style.color = "pink";

document.getElementsByClassName("btn")[0].style.color = "green";

// getElementsByClassName  , getElementsByTagName aa bei ma pachad [0] aam index aapvi pade beacuse te khali array j aape che atle indexx aapvi pade to eni andar nu change kari saki 

//but getElementById ama pachad index nai aapvi pade because id unique j hoy aakha html page ma

document.getElementById("hello").innerHTML = "good morning"



//querySelector ama () ani ander css ma jem select kari tem j select karvana element 
//ex  document.querySelector("#hello") id hoy to aam 
//class hoy to document.querySelector(".btn")
//tag name hoy to document.querySelector("h1") direct aam j
//multiple class na name aapi ne koi ek perticuler select karvo hoy to pan css ni jem j thay 
//document.querySelector("li a") aavi rite

document.querySelector("#item a").style.color = "red";

document.querySelector(".btn").innerHTML = "don't click"


// aam kari to item id ni andar 3 list class che but te khali 1st j selct karse badha 3 nai kare select 
document.querySelector("#item .list") 

//jo badha list vada class select karva hoy to All lagavu pade
document.querySelectorAll("#item .list") 


//QUE => querySelector kayre use karvu ??
//ANS => jayre bov deficult hoy koi ek perticuler element select karvo te getElementsByTagName ana ti ke koi biji rite selct no kari saki tiyare querySelector no use karvo jema vadhu class hoy id hoy te badha naki atle te perticuler element madi jai

document.querySelector("h1").style.fontSize = "5rem" 
// style.fontSize aa pan camcle case ma lakvu fontsize aam nai hale no made to w3 school ma jovu DOM Style ma

document.querySelector(".btn").style.backgroundColor = "yellow"



//button html tag che tema jetla class che te batavse class na name
document.querySelector("button").classList

//have aa html tag button ma ek j class che btn name no pan tema haji ek class add karvo hoy to js ti pan kari saki
document.querySelector("button").classList.add("invisible")

//inspent kari to tema invisible name no pan class dekhase button tag ma have aa invisible class ne style aapvu hoy to css ma pan aapi saki .invisible{} kari ne


document.querySelector("button").classList.add("invisibleTWO")
document.querySelector("button").classList.remove("invisibleTWO")   //remove class invisibleTWO


//toggle atle class hoy invisibleTWO name to remove kari nakse and nai hoy to add kari nakse
//light on off karva mate aavu use thay
document.querySelector("button").classList.toggle("invisibleTWO")

document.querySelector("h1").classList.add("huge")

document.querySelector("h1").innerHTML = "hi";
//aane badle aa niche nu use karvu add karva saru che
document.querySelector("h1").textContent = "good night"  //bei innerHTML , textContent same j kam kare but easy che niche textContent


//attribute atle html ma je sky color vaddi color na dekahi te attribute che ex => class , href 

//ana ti a tag ni andar href ma je link che te aapse 
document.querySelector("a").getAttribute("href") 

//have tene link ne change karvi hoy to setAttribute ti thay
// ahi 2 parameter apava padse
document.querySelector("a").setAttribute("href" , "https://www.bing.com")