function getMilk(money , costperBottle) { 
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

   
    console.log("buy " + calcBottle(money , costperBottle) + " bottle of milk");
    
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

    return clac_change(money , costperBottle);
}


function calcBottle(starting_money , cost_bottle) {
     var numberOfBottle = Math.floor(starting_money / cost_bottle);
     return numberOfBottle;
}

function  clac_change(starting_money , cost_bottle) {
    var change = starting_money % cost_bottle;
    return change;
}

console.log("Hello master, here is " + getMilk(6 , 1.5) + " change");