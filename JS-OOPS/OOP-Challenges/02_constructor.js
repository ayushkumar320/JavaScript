function Person(name, age){
    this.name = name;
    this.age = age;
    if(this.age<=0){
        throw new Error('Age must be a positive number');
    }
}
Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`
}
let me = new Person("Ayush", 19);
console.log(me.greet());