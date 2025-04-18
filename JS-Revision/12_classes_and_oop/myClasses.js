// ES6 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@code.com", "xyz");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function funcUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

funcUser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

funcUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new funcUser("tea", "tea@code.com", "xyz");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());