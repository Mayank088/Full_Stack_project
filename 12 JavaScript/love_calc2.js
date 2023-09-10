prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;   //0 to 99
loveScore = Math.floor(loveScore) + 1;  //0 t0 11

if (loveScore > 70) {
   alert("your love Score is " + loveScore + "%" + " your love is like lela and majnu."); 
}

if (loveScore > 30 && loveScore <=70) {
    alert("your love Score is " + loveScore + "%");
}
if (loveScore <= 30) {
     alert("your love Score is " + loveScore + "%" + " you go together like oil and water.");
}


