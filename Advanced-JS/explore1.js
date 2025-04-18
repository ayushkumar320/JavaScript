// Asynchronous - having pauses/ code doesn't work on sequence

console.log("Chai code");

setTimeout(() => {
    console.log("I am a timer function and gets printed after 4 seconds");
}, 4000);

for (let c = 0; c < 10; c++) {
    console.log(c);   
}