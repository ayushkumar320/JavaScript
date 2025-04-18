let marksOfStudents = {
    harry: 98,
    ayush: 90,
    rohan: 70,
    shubham: 77,
};

for(const key in marksOfStudents){
    console.log("The marks of " + key + " is: " + marksOfStudents[key]);
}