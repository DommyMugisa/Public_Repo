import { assert } from "chai";
import { factorial } from "./factorial.js";

describe("assert factorial(n) is equal to n!", function () {
	it("4! = 24", function () {
		assert.equal(factorial(4), 24);
	});

	it("9! = 362880", function () {
		assert.equal(factorial(9), 362880);
	});

	it("16! = 20922789888000", function () {
		assert.equal(factorial(16), 20922789888000);
	});

	it("(23*45)! = Infinity", function () {
		assert.equal(factorial(1035), Infinity);
	});
});
//