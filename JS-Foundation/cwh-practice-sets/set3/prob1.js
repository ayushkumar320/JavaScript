let marksOfStudents = {
    harry: 98,
    ayush: 90,
    rohan: 70,
    shubham: 77,
};

for(let key = 0; key < Object.keys(marksOfStudents).length; key++){
    console.log("The marks of " + Object.keys(marksOfStudents)[key] + " are " + marksOfStudents[Object.keys(marksOfStudents)[key]]);
}

// console.log(Object.keys(marksOfStudents)[3]);  // --> gives the key, here shubham

// We can access any element of an object using Object.keys(object)[index]; where the index is the count of key in object.