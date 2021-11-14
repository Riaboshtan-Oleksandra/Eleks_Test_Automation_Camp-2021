import assert from "assert";
import calculator from "../calculator.js";

describe("Calculator_positive", function () {
  //correct math calc
  it("Addition", function () {
    assert.equal(calculator(3, 4, "+"), 7);
  });

  it("Substraction", function () {
    assert.equal(calculator(-3, 0.4, "-"), -2.6);
  });

  it("Multiplication", function () {
    assert.equal(calculator(3, 4, "*"), 12);
  });

  it("Division", function () {
    assert.equal(calculator(33, 7, "/"), 4.71);
  });

  it("Division", function () {
    assert.equal(calculator(135, -4, "/"), -33.75);
  });
});
