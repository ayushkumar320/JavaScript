const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
let picture;
let followers;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        followers = data.followers;
        picture = data.avatar_url;
        // console.log(followers)
        // console.log(picture)
        // console.log(picture)
        const pic = document.querySelector(".pic");
        const follow = document.querySelector(".follow");
        pic.innerHTML = `<img src="${picture}" width="120px"; >`
        follow.innerHTML = `<h3> Followers : ${followers}</h3>`
    }
};
xhr.send();
