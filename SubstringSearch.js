// Joseph Stowers
// Toy Problem
// Saturday, December 10, 2016

// Substring Search

// Return the number of times a substring pattern appears in a given string.

// How many times does 'greatness' appear in the love letter left by
// "Countess Olivia" to Malvolio?

// Malvolio, Twelfth Night, Act 2, Scene 5 (Shakespeare)
let string = 'Be not afraid of greatness. Some are born great, some achieve greatness, ' + 
'and others have greatness thrust upon them.';

let pattern = 'greatness';

function searchString(pattern, text){
	
	let M = pattern.length;
	let N = text.length;
	let count = 0;

	for (let i = 0; i <= N-M; i++) {

		let j = 0;

		for (j; j < M; j++) {

			// if next character in pattern doesn't match,
			// exit inner pattern loop
			if(text.charAt(i+j) !== pattern.charAt(j)) {
				break;
			}
		}

		if (j === M) {
			count += 1;
			// alternatively returns index of first occurrence
			// return i;
		}
	}

	return count || N;

}

console.log(searchString(pattern, string));

