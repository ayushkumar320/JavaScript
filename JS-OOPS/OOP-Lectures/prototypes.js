
let computer = {
    cpu: 12,
    ram: 16,
};
let lenovo = {
    screen: "HD",
    __proto__: computer, // __ is called dunder
};
let tomHardware = {
    __proto__:lenovo,
};
// console.log(`Lenovo`, lenovo.__proto__);
// console.log(lenovo);

// console.log(tomHardware.__proto__);

let genericCar = {
    tyre: 4,
};

let tesla = {
    driver: "AI", 
};

Object.setPrototypeOf(tesla, genericCar);

console.log(tesla, Object.getPrototypeOf(tesla));
