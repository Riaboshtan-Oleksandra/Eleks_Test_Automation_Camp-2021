//Write a JavaScript function to get the last element of an array
const last_element = (arr) =>
  arr.length == 0 ? "array is empty" : arr[arr.length - 1];
console.log(`Last element of an array = ${last_element([44, 2, 17, 9])}`);

//Write a simple JavaScript program to join all elements of the following array into a string
const array = [
  "This",
  "string",
  "is",
  "formed",
  "using",
  "join method to concatenate",
  "array's",
  "elements",
];
const str_from_array = array.join(" ");
console.log(str_from_array);

//Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
const rectangle = {
  width: 12,
  height: 5,
  getArea: function () {
    return this.width * this.height;
  },
  getPerimeter: function () {
    return (this.width + this.height) * 2;
  },
};
console.log(
  `For rectangle with parameters: width = ${rectangle.width} and height = ${
    rectangle.height
  } calculated Perimeter = ${rectangle.getPerimeter()} and Area = ${rectangle.getArea()}`
);

//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array

const ar1 = [11, 22, 33];
const ar2 = [44, 55, 66, 4, 5, 7, 3];
const sum_arrs = [];

function sum_two_arrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    const dif = arr1.length - arr2.length;
    if (dif < 0) {
      for (let i = 0; i < Math.abs(dif); i++) {
        arr1.push(0);
      }
    } else {
      for (let i = 0; i < Math.abs(dif); i++) {
        arr2.push(0);
      }
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    sum_arrs.push(arr1[i] + arr2[i]);
  }
  return sum_arrs;
}

console.log(sum_two_arrays(ar1, ar2));

//---------------------------------------
// old version

// if (arr1.length === arr2.length) {
//   for (let i = 0; i < arr1.length; i++) {
//     sum_arr.push(arr1[i] + arr2[i]);
//   }
// } else {
//   throw new Error(
//     "Arrays should have the same length, otherwise sum calculation is not possible"
//   );
// }
