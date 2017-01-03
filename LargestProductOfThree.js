// Joseph Stowers
// Toy Problem
// January 3, 2017

/* 
	Largest Product of Three

	Write a function that accepts an array of integers and returns the 
	largest product possible from three of those numbers.

	[2, 1, 3, 7] 				=> 2 * 3 * 7 = 42

	[-5, -1, -3, -2, -4] 		=> -3 * -2 * -1 = -6

	[-31, 41, 34, -37, -17, 29] => -31 * -37 * 41 = 47,027

*/


function largestProductOfThree (array) {

	// sort array from smallest to largest numbers
	array.sort(function(a,b){
		return a - b;
	})

	// define array length
	var length = array.length;

	// product if two smallest numbers are negative
	var doubleNegCombo = array[0] * array[1] * array[length-1];

	// product if three largest numbers are all positive or all negative
	var bigThreeCombo = array[length-1] * array[length-2] * array[length-3];

	// return the largest number from the two possible products
	return Math.max(doubleNegCombo, bigThreeCombo);
}

console.log(largestProductOfThree([ 2, 1, 3, 7 ]));

console.log(largestProductOfThree([-5, -1, -3, -2, -4]))

console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]))
