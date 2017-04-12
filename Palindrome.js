// Palindrome Checker
// April 11, 2017

/*
	Objective

	Determine if a string is a palindrome.  A palindrome is a word, phrase, or sequence that 
	reads the same backward as forward.  

	The word palindrome derives from the Greek ‘palin,’ or “back” and ‘dromos,’ or "direction."

	ABBA - yes
	racecar - yes
	ABOTA - no
*/


function PalindromeChecker(string) {

	let stringIni = string;

	function recursive(string) {
		
		if (string.length === 0){
			return true;
		}

		let strSlice;

		let firstChar = string.charAt(0);
		let lastChar = string.charAt(string.length-1);

		if (firstChar === lastChar){
			strSlice = string.slice(1, string.length-1);
		} else {
			return false;
		}

		return recursive(strSlice);

	}

	// Use regex to remove blank spaces and punctuation characters from string
	// Will allow upper- and lower-case alphabet characters, numbers 0-9, and '-'
	let result = recursive(string.replace(/[^A-Za-z0-9-]+/g, ''));

	if (result) {
		return 'YES! \'' + stringIni + '\' is a palindrome.';
	} else {
		return 'SORRY, \''+ stringIni + '\' is not a palindrome. Please try again.';
	}
}

console.log(PalindromeChecker('racecar'));

console.log(PalindromeChecker('race2car'));

console.log(PalindromeChecker('ABOTA'));

console.log(PalindromeChecker('ABBA'));

console.log(PalindromeChecker('red rum, sir, is murder'));

console.log(PalindromeChecker('my gym'));


