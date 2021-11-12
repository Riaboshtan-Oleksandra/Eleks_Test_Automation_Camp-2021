//preconditions

//import
import Randomstring from "randomstring";
import Fs, { fstat } from "fs";
const fileName = "studentResults.txt";
//let fs = require("fs");
//capitalize first letter
Object.defineProperty(String.prototype, "capital", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
});

// 1. Create student object and set ‘name’, ‘surname’ and ‘rate: random
// 2. Use JSON.stringify() method to make student a JSON string and write it into file (not existed)
// 3. Read previous string from file and convert to object
// 4. Make some change to object and append it as new line to existed file

const student = {
  name: Randomstring.generate({
    length: Math.floor(Math.random() * 16),
    charset: "abcdefghijklmnopqrstuvwxyz",
  }).capital(),
  surname: Randomstring.generate({
    length: Math.floor(Math.random() * 26),
    charset: "abcdefghijklmnopqrstuvwxyz",
  }).capital(),
  rate: Math.floor(Math.random() * 100) + 1,
};

let newStudent = JSON.stringify(student);
console.log("first data " + newStudent);

Fs.writeFile(fileName, newStudent, (error) => {
  if (error) throw error;
});

let studentFromFile;
Fs.readFile(fileName, (error, data) => {
  if (error) {
    throw error;
  } else {
    studentFromFile = data.toString();
    console.log("data from file: " + studentFromFile);
  }
});
