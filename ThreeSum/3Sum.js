
let array = [-15, -1, 5, 3, -6, -8, 10, -4, 12,  2, 6, 1]; // 9 in 17ms

function ThreeSum (array) {

	console.log('calculating ThreeSum . . .');

	let count = 0;

	let N = array.length;

	for (let i = 0; i < N; i++) {

		for (let j = i+1; j < N; j++){

			for (let k = j +1; k < N; k++) {

				if (array[i] + array[j] + array[k] === 0) {

					count += 1;

				}
			}
		}
	}

	return count;
}

t0 = Date.now();
console.log('ThreeSum triples =', ThreeSum(array));
t1 = Date.now();
console.log('ThreeSum took =', (t1 - t0), 'ms');
