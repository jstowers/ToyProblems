// Joseph Stowers
// April 15, 2017


// ThreeSum

/*
	Description:
	Given an array of N distinct integers, how many triples sum to exactly zero?

	Source:
	Sedgewick, R. & Wayne, K., Algorithms, 4th ed., 2011, p.186.

*/

/*
// require is a relative file reference
const functions = require('./quickSort');

// read text file containing a string of integers
const fs = require('fs');
let intsFile = fs.readFileSync(process.argv[2], 'utf-8');
*/


// let array = [20, -2, 5, 2, -8, -15, 10, 6, -1, 9] // 5 in 15 ms
// let array = 1Kints.txt // 70 in 5159 ms


// convert strings of integers to array
makeIntArray = (string) => {

	let storage = [];

	// split strings by new line
	let strToArr = string.split('\n');
	
	strToArr.forEach(ele => {

		// trim white space from each string element
		// and convert to an integer
		storage.push(parseInt(ele.trim()));

	});

	return storage;
}


// let array = makeIntArray(intsFile);

// One negative and Two positive integers
// let array = [ -15, -8, -2, -1, 2, 5, 6, 9, 10, 20 ]
// let array = [-15, -1, 5, 3, -6, -8, 10, -4, 12,  2, 6, 1]; // 5 in 5-7 ms
// let array = [-2, 5, 2, -8, -15, 10, 6, -1, 9] // 3 in 4 ms


let array = [-15, -14, -13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 
12, 13, 14, 15, 16, 17, 18, 19, 20];

// let array = [-5, -4, -3, 1, 2, 3, 4, 5, 6, 7]


//let t0 = Date.now();
//let arrayShuffle = functions.shuffle(array);
//functions.quickSort(arrayShuffle, 0, arrayShuffle.length-1);
//let t1 = Date.now();
//console.log('quickSort took = ', (t1 - t0), ' ms');

/*
// updated ThreeSum
function ThreeSum(array) {

	let storage = [];
	let posInts = [];
	let index = 1;

	function recursive(array) {

		if(array.length === 0) {
			return;
		}

		let lftInt = array[0];
		let rhtInt = array[array.length-1];

		// are there negative integers in array?
		if (lftInt < 1) {

			console.log(array);
			console.log(storage);

			// ignore all positive integers > lftInt
			if(rhtInt >= Math.abs(lftInt)) {
				console.log('inside first if');
				console.log('--------------------------------');
				recursive(array.slice(0, array.length-1));
			}

			// sum lftInt and rhtInt
			else if (rhtInt > 0 && rhtInt > (0.5*Math.abs(lftInt))) {
				console.log('inside second if');
				console.log('--------------------------------');

				function innerRecursive(tempArray) {

					console.log('tempArray =', tempArray);

					let rhtInnerInt = tempArray[tempArray.length-1];

					if(rhtInnerInt < 1) {
						return;
					}

					storage.push(lftInt + rhtInnerInt);
					console.log('storage = ', storage);

					innerRecursive(tempArray.slice(0, tempArray.length-1));

				}

				innerRecursive(array);

				recursive(array.slice(0, array.length-1));

			}

			else if(rhtInt > 0 && rhtInt <= (0.5*Math.abs(lftInt))) {
				console.log('inside third if');
				console.log('--------------------------------');	
				recursive(array.slice(1));
			}
		}
	}

	recursive(array);
}

*/

// Calculate performance time for ThreeSum()
t0 = Date.now();
console.log(ThreeSum(array));
t1 = Date.now();
console.log('ThreeSum took =', (t1 - t0), 'ms');


function ThreeSum(array) {

	let count = 0;

	let storage = [];
	let posInts = [];

	let leftIntMax = array[0];
	let rightIntMax = array[array.length-1];

	function recursive(array) {

		// base case
		if (array.length === 0) {
			return;	
		}

		let leftNeg = array[0];
		let rightPos = array[array.length-1];

		console.log(array);
		console.log('leftNeg =', leftNeg, '  rightPos =', rightPos);

		// right integer > left integer => sum of 0 impossible
		if(rightPos > Math.abs(leftIntMax)) {

			console.log('inside first if');
			console.log('--------------------------------');
			// determine max right integer for summation
			rightIntMax=array[array.length-1];
			recursive(array.slice(0, array.length-1));
		}

		else if(rightPos > (0.5*Math.abs(leftNeg))) {

			console.log('inside second if');
			console.log('--------------------------------');

			/* Tried to implement sorting upon insertion, but
			only works for sums that are < than storage[0].  Does
			not work for sums that are inbetween array elements.
			This may shave 1ms off the computing time for an array
			of 4 elements.

			// sum < lowest element
			if(leftNeg + rightPos < storage[0]) {

				storage.splice(0,0,leftNeg+rightPos);

			} else storage.push(leftNeg + rightPos);
			*/
			

			if (leftNeg + rightPos < 0){
				storage.push(leftNeg + rightPos);
			}
			
			if (rightPos > 0 && rightPos < (0.5*Math.abs(rightIntMax)) && posInts[posInts.length-1] !== rightPos){
				posInts.push(rightPos);
			}

			recursive(array.slice(0, array.length-1));
		}

		else if(rightPos > 0 && rightPos <= (0.5*Math.abs(leftNeg))) {

			console.log('inside third if');
			console.log('--------------------------------');
			if (posInts[posInts.length-1] !== rightPos) {
				posInts.push(rightPos);
			}			
			recursive(array.slice(1));
		}

	}

	recursive(array);

	return {storage, posInts};
}


/*
let storageSort = functions.shuffle(result.storage);
functions.quickSort(result.storage, 0, result.storage.length-1);
console.log('storageSort = ', storageSort);

let posIntsArray = result.posInts;
console.log('posIntsArray =', posIntsArray);
console.log('--------------------------------');

let finalResult = countTriples(storageSort, posIntsArray);
console.log('ThreeSum triples =', finalResult);
*/



function countTriples(negSumArray, posIntsArray) {

	let count = 0;

	function recursive(negSumArray, posIntsArray) {

		if (negSumArray.length === 0){
			return count;
		}

		let negSum = negSumArray[0];
		let posInt = posIntsArray[0];

		if (posInt > Math.abs(negSum)){
			recursive(negSumArray, posIntsArray.slice(1));
		}

		else if (posInt + negSum === 0){
			count += 1;
			recursive(negSumArray.slice(1), posIntsArray);
		}

		else recursive(negSumArray.slice(1), posIntsArray);
	}

	recursive(negSumArray, posIntsArray);

	return count;
}





/*
	[ -15, -8, -2, -1, 2, 5, 6, 9, 10, 20 ]
	Quicksort = 19 ms
	ThreeSum  =  4 ms
	Total     = 23 ms

	*** RESULTS ***

	NumInts (N)		Triples 	Time (T) (ms)
	-----------------------------------------
	1000			70			4920
	2000			528			39536
	4000			4039		326160
	8000

	A plot of log (Time(N)) vs. log (N) yields a straight line.
	A straight line on a log-log plot is a power law fit.

		T(N) = a * N^(b)

*/

/*

// Integer Array Generator

function RandomIntegerArray (min, max, size) {

	// Returns the smallest integer >= given number
	min = Math.ceil(min);
	console.log('min = ', min);

	// Returns the largest integer <= given number
	max = Math.floor(max);
	console.log('max = ', max);

	let storage = [];

	for (let i = 0; i < size; i++) {
		storage.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	console.log('storage = ', storage);

	return storage;
}

// let array = [30, -40, -10, 40, 0, 10, 5]; // 3
// let array = RandomIntegerArray(-10000, 10000, 1000); // 68
// let array = RandomIntegerArray(-10000, 10000, 1000); // 6091

// Calculate performance time for ThreeSum()
let t0 = Date.now();
console.log('ThreeSum count =', ThreeSum(array));
let t1 = Date.now();



*/




