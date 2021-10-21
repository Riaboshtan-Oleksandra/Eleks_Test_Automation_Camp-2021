//Write a JavaScript function to check if given string includes given symbol.
function symbol_in_string(str, symb) {
  if (str.indexOf(symb) === -1) {
    return `1.1. There is no '${symb}' symbol in the '${str}'`;
  } else {
    return `1.2. '${str}' includes '${symb}' symbol`;
  }
}
console.log(symbol_in_string("serghjk", "r"));
console.log(symbol_in_string("serghjk", "a"));

//Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).
function is_blank(text) {
  let new_text = text.replace(/ /g, "");
  //replaceAll give an error
  if (new_text.length === 0) {
    return `2.1. given string is blank`;
  } else {
    return `2.2. given string has ${text.length} symbols`;
  }
}
console.log(is_blank("as vf 123"));
console.log(is_blank("   "));

//Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)
const convert_to_abbrev = function (meaning) {
  let abbreviated = "3. ";
  const arr = meaning.split(" ");
  for (let i = 0; i < arr.length; i++) {
    abbreviated = abbreviated.concat(arr[i][0].toUpperCase(), ".");
  }
  return abbreviated;
};
console.log(convert_to_abbrev("What Do You Mean By That"));

//Write a JavaScript function that accept two integers and display the larger
const larger = (a, b) =>
  a > b ? `4. ${a} larger than ${b}` : `4. ${b} larger than ${a}`;
console.log(larger(123, 321));

//Write a JavaScript function with conditional statement to sort three numbers
function sort_three_number(a, b, c) {
  if (a < b) {
    let t = a;
    a = b;
    b = t;
  }
  if (a < c) {
    let t = a;
    a = c;
    c = t;
  }
  if (b < c) {
    let t = b;
    b = c;
    c = t;
  }
  return [a, b, c];
}
console.log("5. Sorted numbers: " + sort_three_number(1, -15, 12));
