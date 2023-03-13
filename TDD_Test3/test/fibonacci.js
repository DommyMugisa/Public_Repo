// function fibonacci(n) {
// 	if (n === 0 || n === 1) return 1;
// 	for (let i = n - 1; i >= 1; i--) {
// 		n *= i;
// 	}
// 	console.log(n);
// }
export function fibonacci(n) {
	if (n < 2) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(4);
fibonacci(9);
fibonacci(16);
fibonacci(1035);
