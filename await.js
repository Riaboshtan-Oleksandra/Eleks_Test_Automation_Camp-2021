//Create a first function (which takes argument `data`) that always returns a promise and:
//1.If data is not a number, the function returns a promise rejected instantly and give the word "error" (in a string
//2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
//3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
//4.Create a second function (which takes argument "result") which should be executed after the first function is done and print the final message like `Your number is ${result}` ONLY for cases when the first function doesn't return " error“

//5. Write same tasks(1-4) using async/await

function first(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject("error");
    } else if (data % 2 !== 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject("even");
      }, 2000);
    }
  });
}

function second(result) {
  return `Your number is ${result}`;
}

async function promiseFromFirstF() {
  try {
    const resolution = await first("hdufjqs");
    console.log(second(resolution));
  } catch (rejection) {
    console.log(rejection === "even" ? second(rejection) : rejection);
  }
}

promiseFromFirstF();

// first("gtyhuj")
//   .then((result) => {
//     console.log(result + " from then");
//   })
//   .catch((result) => {
//     console.log(result + " from catch");
//   });
