// A - 1
	
	true;
	false;

// A - 2

	2>3					// Write an expression using > that will evaluate to false 
	3>1					// Write an expression using > that will evaluate to true 
	10<9				// Write an expression using < that will evaluate to false 
	24<29				// Write an expression using < that will evaluate to true 
	1 === 1				// Write an expression using two numbers and === that will evaluate to true 
	2 !==2				// Write an expression using two numbers and === that will evaluate to false 
	'blue' === 'blue'	// Write an expression using two strings and === that will evaluate to true 
	'Hi' === 'Hit' 		// Write an expression using two strings and === that will evaluate to false

// A - 3

	12 <= 78	 	// => true 
 	24 <= 16 		// => false 
 	45 !== 45 		// => true 
 	'45' === 45 	// => false 
 	'6' !== 'six' 	// => true

// A - 4

	function oldEnoughToDrive(age) {
		return age>16;
	}

// A - 5
	
	'hello'.length; 			// 5
 	''.length;					// 0
 	'Yasser al-Azma'.length;	// 14

// A - 6 
	
	function sameLength(str1,str2) {
		return str2.length === str1.length;
	}

// A - 7

	function passwordLongEnough(password) {
		return password.length > 12;
	}

// A - 8

	function rentalCar(name, age) {
		if(age >= 21){
			return 'Have fun driving, ' + name + '!';
		}
		else{
			return 'You cannot have the keys, .';
		}
	}

// A - 9

	function max(num1, num2) {
		return num1 > num2 ? num1 : num2;
	}

// A - 10

	function min(num1, num2) {
		return num1 < num2 ? num1 : num2;
	}

// A - 11

	function larger(str1, str2) {
		return str1.length > str2.length ? str1 : str2;
	}

	function smaller(str1, str2) {
		return str1.length < str2.length ? str2 : str1;
	}

// More Practice

// A - 1

 	106 < 12; 					// => false 
 	'wiz' === 'wiz'; 			// => true 
 	(7 * 7) === 49; 				// => true 
 	12 < (24 / 2); 				// => false 
 	(20 % 2) <= 1; 				// => true 
 	(9 / 3) + (5 * 5) === 28; 	// => true

// A - 2

	function even(num) {
		return num % 2 === 0;
	}

	function odd(num) {
		return num % 2 === 1;
	}

	function positive(num) {
		return num > 0;
	}

	function negative(num) {
		return  num < 0;
	}

// A - 3
	
	function randInt(n) {
		return Math.floor(Math.random() * (n - 0 + 1) + 0);
	}


	function guessMyNumber(num) {
		return num === randInt(5) ? 'You guessed my number!' : 'Nope! That wasn\'t it!';
	}


// Advanced

// A - 1

	//	== Operator compares only the values of both operands. 
	//		5 == '5' // true

	// === Operator compares both the values and data types. It's considered as a safer way.
	//		5 === '5' // false 

// A - 2

	// Data types in JavaScript include the following:
	// String
	// Number
	// NaN
	// Boolean
	// Object
	// Null
	// Undefined

// A - 3

	// Riddles....