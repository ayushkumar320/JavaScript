const requestUrl = "https://api.github.com/users/ayushkumar320";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
        const data = JSON.parse(this.responseText);
        const img  = data.avatar_url;
        const name = data.name;
        const followers = data.followers;
        const image = document.querySelector(".pic")
        const myName = document.querySelector(".name")
        const follow = document.querySelector(".followers")
        image.innerHTML = `<img src = "${img}" width="121px">`
        myName.innerHTML = `<h2>Name : ${name}</h2>`
        follow.innerHTML = `<h2>Followers : ${followers}</h2>`
    }
};
xhr.send();