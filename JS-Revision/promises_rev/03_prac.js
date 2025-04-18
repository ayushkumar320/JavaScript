function userData(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

let userOne = new userData("abc", 11, true);
let userTwo = new userData("xyz", 12, false);
console.log(userOne);