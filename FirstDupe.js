// Joseph Stowers
// Toy Problem
// November 30, 2016

/*
	First Duplicate

	Write a function which takes an array of integers and returns 
	the first duplicate integer.

	[8, 12, 15, 17, 64, 15, 33, 24, 33, 59, 17] // => 15

*/

// Recursive Solution

function firstDupe (array) {

	// base case if no duplicate integers found
	if (!array.length){
		console.log('The array contains no duplicate integers.');
		return null;
	}
	
	// set ele equal to first element in array
	let ele = array[0];
	
	// test if ele exists only once in array
	// if true, slice ele from array and recursively 
	// pass new array into firstDupe
	if (array.indexOf(ele) === array.lastIndexOf(ele)) {
		return firstDupe(array.slice(1));
	}
	
	// if false, return first duplicate
	else return ele;
	
}
	
console.log(firstDupe([8, 12, 15, 17, 64, 15, 33, 24, 33, 59, 17]));


// Iterative Solution
/*
function firstDupe (array) {

	let result;

    for (var i = 0; i < array.length; i++){
        if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
            result = array[i];
            break; // exit for loop if duplicate found
        }
    }
    
    return result || null;
}

console.log(firstDupe([8, 12, 15, 17, 64, 15, 33, 24, 33, 59, 17]));
*/
