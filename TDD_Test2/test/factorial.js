// function factorial(n) {
// 	if (n === 0 || n === 1) return 1;
// 	for (let i = n - 1; i >= 1; i--) {
// 		n *= i;
// 	}
// 	console.log(n);
// }
export function factorial(n) {
	if (n === 0 || n === 1) return 1;
	for (let i = n - 1; i >= 1; i--) {
		n *= i;
	}
	return n;
}
// 
// factorial(4);
// factorial(9);
// factorial(16);
// factorial(1035);
