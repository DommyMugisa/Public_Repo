import { assert } from "chai";
import { fibonacci } from "./fibonacci.js";

describe("fib index(n) is equal to the sum of the 2 prior numbers the sequence", function () {

	it("fib index(4)", function () {
		assert.equal(fibonacci(4), 3);		
	});

	it("fib index(9)", function () {
		assert.equal(fibonacci(9), 34);
	});

	it.skip("fib index(16)", function () {
		assert.equal(fibonacci(16), 20922789888000);
	});

	it.skip("fib index(1035)", function () {
		assert.equal(fibonacci(1035), Infinity);
	});
});