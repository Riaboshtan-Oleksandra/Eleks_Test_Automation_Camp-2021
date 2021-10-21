// Write a JS program to compute and print the sum of the two given integers
const x = 22;
const y = -156;
console.log(`Sum of ${x} and ${y} is ${x + y}`);

// Write a JS program to create a new string adding “Test_" in front of a given string
const given_string = "strings_concatenation";
const new_string = "Test_" + given_string;

// Write a JS program to combine and print your first, last name and age
const first_name = "Oleksandra";
const last_name = "Riaboshtan";
const age = 24;
console.log(
  "I am " + first_name + " " + last_name + ". I am " + age + " years old."
);

// Write a JS program to check a given integer is bigger than 100
const given_integer = 15;
const checker = given_integer > 100;

// Write a JS program to find if the first number is larger from the two given positive integers
const first_number = 123;
const second_number = 10;
const find_larger = first_number > second_number;

// Write a JS program to check two given numbers and print true if one of the number is 50 or if their sum is 50
const given_number1 = 500;
const given_number2 = 45;
console.log(
  given_number1 == 50 ||
    given_number2 == 50 ||
    given_number2 + given_number1 == 50
);

// Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7
const given_positive_number = 123;
const check1 = given_positive_number % 3 == 0;
const check2 = given_positive_number % 7 == 0;
console.log(
  `Given number ${given_positive_number} is${
    check1 === true ? "" : " not"
  } a multiple of 3 and is${check2 === true ? "" : " not"} a mulpiple of 7`
);
