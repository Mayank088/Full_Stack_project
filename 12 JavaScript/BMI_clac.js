function bmiCalculator(weight , height) {
    var bmi = weight / (height * height);
    return bmi;
}

console.log(bmiCalculator(65 , 1.8));