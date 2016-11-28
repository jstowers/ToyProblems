// Joseph Stowers
// Toy Problem
// November 27, 2016

/* 

Zero Sum

Given an array of negative/positive integers, return true if there
exists two numbers who sum is zero.

[1, 3, 2, -3] => true

[5, 7, 2, 9] => false

*/

function zeroSum (numbers) {

	// numbers array must contain at least two integers
	if (numbers.length < 2){
		return false;
	}

	// loop through numbers array and test for two cases
	for (var i = 0; i < numbers.length; i++){

		// case 1: two 0's
		if (numbers[i] === 0){
			if (numbers.lastIndexOf(0) > i){
				return true;
			}
		}

		// case 2: + and - numbers
		else if (numbers[i] < 0) {
			if (numbers.indexOf(Math.abs(numbers[i])) >= 0) {
				return true;
			}
		} 

		else {
			if (numbers.indexOf(-Math.abs(numbers[i])) >= 0) {
				return true;
			}
		} 

	}

	return false;

}

// let integers = [1, 3, 2, -3];

// let integers = [5, 7, 2, 9];

let integers = [-9, 6, 3, 12, -5, 0, 1, -3];

// let integers = [0];

console.log(zeroSum(integers));
