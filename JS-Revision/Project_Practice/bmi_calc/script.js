const form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector(".results")
    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height. Your Height : ${height}`;
    }
    else if(weight == "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight. Your Weight : ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi>=24.8){
            var msg = "Overweight";
        }
        else if (bmi > 18.6 && bmi < 24.8){
            msg = "Normal Range"
        }
        else{
            msg = "Underwight"
        }
        results.innerHTML = `<span> Your BMI : ${bmi} </span><br><span>${msg}</span>`
    }
});