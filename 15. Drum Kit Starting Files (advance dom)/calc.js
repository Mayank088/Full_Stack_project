function add(num1 , num2) {
    return num1+num2;
}
function multiply(num1 , num2) {
    return num1*num2;
}
function subtract(num1 , num2) {
    return num1-num2;
}
function divied(num1 , num2) {
    return num1/num2;
}

function calculator(num1 , num2 , oprator) {
    return oprator(num1 , num2);
}
//this calculator function is known as higher order function which take other function as input

calculator(3,4,multiply);
calculator(3,4,add);
calculator(3,4,divied);
calculator(3,4,subtract);


//use debugger;
debugger;
calculator(3,4,add);