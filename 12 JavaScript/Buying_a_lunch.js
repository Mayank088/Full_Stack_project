function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today."
}

var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(name);


