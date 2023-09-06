var name = "mayank"
name.slice(1,5);     // they don't include 5 and starting form 0 , upper bound - lower bound ==> 5 - 1 = 4 char

var tweet = prompt("write a tweet!! (only 15 Character is allow to write..)");
var tweetUnder15 = tweet.slice(0,15);
alert(tweetUnder10);
var tweetUnder15Count = tweetUnder15.length;
alert("you written " + tweetUnder15Count + " Character " + "and remaning Character is " + (15-tweetUnder15Count) );