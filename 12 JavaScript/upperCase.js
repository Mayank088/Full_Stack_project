var name = prompt("what is your name??");  //mAYANK enter this
//enter the name is small latter and in the output you get first letter is capital..

var nameSlice = name.slice(0,1);
nameSlice = nameSlice.toUpperCase();
name = name.slice(1 , name.length);     //print after 1st letter 0 th position is capitalize in nameSlice..
name = name.toLocaleLowerCase();  //2nd is whatever but its small now 

alert("Hello " + nameSlice + name);