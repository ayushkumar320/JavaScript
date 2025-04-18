const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
// console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        let data = this.responseText;
        console.log(typeof data)
        data = JSON.parse(this.responseText);
        console.log(typeof data)
        console.log(data.followers)
    }
};
xhr.send()