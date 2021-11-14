// 1. Develop a simple calculator function (+, -, /, * operations), like calc(3, 3, “+”) should return 6 (3+3). Also, handle a cases when not supported math operation is provided or wrong data format
// 2. Create a test suite file to verify if calculator function works correctly for positive scenarios
// 3. Create a test suite file to verify if calculator function works correctly for negative scenarios

export default function calculator(number1, number2, operation) {
  let allowedOperations = ["+", "-", "*", "/"];

  try {
    // not number
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      throw new TypeError("Passed to calcutator data are not numbers");
    }

    // wrong operation
    if (!allowedOperations.includes(operation)) {
      throw new RangeError(
        "Passed operation is not supported or does not exist"
      );
    }

    // calculator
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        if (number2 === 0) {
          throw new Error("Divition by Zero is not allowed");
        }
        return number1 / number2;
    }
  } catch (err) {
    return err.message;
  }
}
