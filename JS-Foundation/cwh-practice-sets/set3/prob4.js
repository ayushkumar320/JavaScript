function Mean(num1, num2, num3, num4, num5){
    let meanOfNum = (num1+num2+num3+num4+num5)/5;
    return meanOfNum;
}

const calcMean = (n1, n2, n3, n4, n5) => {return (n1+n2+n3+n4+n5)/5;};

let myMean = calcMean(1,2,3,4,5);
console.log(myMean);