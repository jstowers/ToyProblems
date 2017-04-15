// Joseph Stowers
// Toy Problem
// January 9, 2017

// 3-Sum

/*
	Given an array of N distinct integers, how many triples sum to exactly zero?

*/


function ThreeSum (array) {

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

	return count
}

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

let array = RandomIntegerArray(-1000, 1000, 100); // 68

// let array = RandomIntegerArray(-10000, 10000, 1000); // 6091

// let array = RandomIntegerArray(-10000, 10000, 1000); // 6422

// let array = RandomIntegerArray(-10000, 10000, 1000); // 6234


console.log('ThreeSum count =', ThreeSum(array));
