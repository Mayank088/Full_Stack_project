var arr = [];
var count = 1;

function FizzBuzz() {

    while (count<=100)
    {
         if ((count%3)===0 && (count%5)===0) {
        arr.push("FizzBuzz");
        }
        else if ((count%3)===0) {
        arr.push("Fizz");
        }
        else if ((count%5)===0) {
        arr.push("Buzz");
        }
        else{
        arr.push(count);
        }
        
        count++; 
    }
    console.log(arr);
}