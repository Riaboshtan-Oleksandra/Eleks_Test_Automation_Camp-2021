import assert from "assert";
import calculator from "../calculator.js";
import chai from "chai";

describe("Calculator_negative", function () {
  it("Operands are not numbers", function () {
    chai.expect(() =>
      calculator(12, "12", "+").to.throw(
        "Passed to calcutator data are not numbers"
      )
    );
  });

  it("Wrong operation", function () {
    chai.expect(() =>
      calculator(12, 12, "**").to.throw(
        "Passed operation is not supported or does not exist"
      )
    );
  });

  it("Second operand equals zero", function () {
    chai.expect(() =>
      calculator(12, 0, "/").to.throw("Divition by Zero is not allowed")
    );
  });
});
