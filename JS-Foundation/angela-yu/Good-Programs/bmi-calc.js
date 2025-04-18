function bmiCalc(height, weight){
    let bmi = weight/(height**2);
    return Math.round(bmi);
}

let myBmi = bmiCalc(1.67, 61.2);
console.log(myBmi);