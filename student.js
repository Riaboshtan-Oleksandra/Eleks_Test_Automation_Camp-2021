//preconditions

//import
import Randomstring from "randomstring";
import Fs from "fs";
const fileName = "studentResults.txt";

//capitalize first letter
Object.defineProperty(String.prototype, "capital", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
});

// Steps
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

Fs.writeFile(fileName, JSON.stringify(student), (error) => {
  if (error) throw error;
});

Fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    throw error;
  } else {
    let studentFromFile = JSON.parse(data);
    if (studentFromFile.rate > 70) {
      studentFromFile.result = "pass";
    } else {
      studentFromFile.result = "fail";
    }
    Fs.appendFile(fileName, "\n" + JSON.stringify(studentFromFile), (error) => {
      if (error) throw error;
    });
  }
});
