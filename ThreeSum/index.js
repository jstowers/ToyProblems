// Joseph Stowers
// April 15, 2017


// ThreeSum

/*
	Description:
	Given an array of N distinct integers, how many triples sum to exactly zero?

	Source:
	Sedgewick, R. & Wayne, K., Algorithms, 4th ed., 2011, p.186.

*/

// read text file containing strings of integers
const fs = require('fs');
let intsFile = fs.readFileSync(process.argv[2], 'utf-8');

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


let array = makeIntArray(intsFile);

// Calculate performance time for ThreeSum()
let t0 = Date.now();
console.log('ThreeSum count =', ThreeSum(array));
let t1 = Date.now();
console.log('ThreeSum took = ', (t1 - t0), ' ms');

/*
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




