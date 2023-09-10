//print 1 to 100 and number is divisible by 3 then print Fizz ,
//if number is divisible by then print Buzz and 
//number is divisible by 3 and 5 both then print FizzBuzz.

var arr = [];
var count = 1;
function FizzBuzz() {
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
    count++;              //count = count + 1;
    console.log(arr);
}

//FizzBuzz();   call karvo