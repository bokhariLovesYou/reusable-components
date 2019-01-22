// These are some functions which can be called again and again. Some of these also can be used to create newer functions as the functionality can be shared.
// Just created this file so that I can start storing any reusable functions I have created and reuse them when needed.

// Please note: Most of these functions require refactoring - therefore please feel free to make them better.


// **************** // ***************** //
// **************** // ***************** //

// ONE

// **************** // ***************** //
// **************** // ***************** //


// This function takes two integars as its parameters and returns their sum

const add = (param1, param2) => {
    return param1 + param2;
}

// **************** // ***************** //
// **************** // ***************** //

// TWO

// **************** // ***************** //
// **************** // ***************** //



// This function takes a string,
// Takes each alphabet in that string and returns the next alphabet within abc
// Checks which one of them are vowels
// Capitalizes the vowels
// And finally returns the string



const LetterChanges = (str) => {
    // Turning the argument into a string
    const myString = str.toString();
    // Creating a new array
    let myArr = new Array();
    // For loop which returns each character within the string and then pushes into the myArr array.
    for (let i = 0; i < myString.length; i++) {
        myArr.push(myString.charAt(i));
    }
    
    // new function which takes an argument and returns the next alphabet
    const nextChar = (c) => {
        let i = (parseInt(c, 36) + 1) % 36;
        return (!i * 10 + i).toString(36);
    }

    // forEach loop which takes our myArr array and provides us the array with next alphabets
    myArr.forEach( (elem, index) => {
        if ( /^[a-zA-Z]+$/.test(elem) ) {
    	    return myArr[index] = nextChar(elem);
        } else {
            return elem
        }
    });
    
    const isVowel = c => {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }
    
    let vowelArray = myArr.map( (element) => {
        isVowel(element);
        if (isVowel) {
            element.toUpperCase();
        }
    })
    
    let finalArr = myArr.map( (o) => {
    	if (isVowel(o) === true) {
    		return o.toUpperCase();
    	} else {
    		return o;
    	}
    });
    
    const finalString = finalArr.join('');
    

    
    
    // Finally returning the 
    return finalString;
}




// **************** // ***************** //
// **************** // ***************** //

// THREE

// **************** // ***************** //
// **************** // ***************** //


// This function takes an array of integars as an argument
// Sorts it from lowest number to highest
// Checks to see any numbers which are missing in that sequence (for example, a sequence should be like 1, 2, 3, 4, 5)
// Returns the number count which is mising from the sequence ( But you can also return directly the numbers which are missed by returning messageArr )
           

const makeArrayConsecutive2 = (statues) => {
	const newArr = new Array();
	const sortArr = (a, b) => {
		return a - b;
	}
	const sortedArr = statues.sort(sortArr);
	const sparse = sortedArr.reduce((sparse, i) => (sparse[i]=1,sparse), []);

	const messageArr = [...sparse.keys()].filter(i => i && !sparse[i]);
	messageArr.shift();
	const printMessage = 'Ratiorg needs statues of sizes ' + messageArr.join(', ');
	return messageArr.length;
}


// **************** // ***************** //
// **************** // ***************** //

// FOUR

// **************** // ***************** //
// **************** // ***************** //


// This function takes a number and returns its factorial. 
// For example, FirstFactorial(5) would return 5*4*3*2*1 = 120
// Please note: High level of refactoring can be done to this function. It's not efficient.

const FirstFactorial = (num) => {
    // Creating a new array
    let myArray = new Array();
    // Creaitng a loop to get all the numbers below the integar argument
    for (let i = 0; i < num; i++) {
        myArray.push(i);
    }
    // Removing the first item of the newly created array (because it's a 0)
    myArray.shift();
    // Multiplying all items within the array
    const valueBeforeNum = myArray.reduce( (a, b) => {
        return a*b;
    });
    // Finally, multiplying the original integar argument with the array items multiplied
    const finalValue = valueBeforeNum * num;
    // Returning the value
    return finalValue;
}


// **************** // ***************** //
// **************** // ***************** //

// FIVE

// **************** // ***************** //
// **************** // ***************** //


// This function takes a string as an argument
// And returns the string in reversed order.
// For example, if the input string is 'Hello World'
// The program returns 'dlroW olleH'



const FirstReverse = (str) => {
    const myString = str.toString();
    let newArr = new Array();
    
    for (let i = 0; i < myString.length; i++) {
        let alphabets = myString.charAt(i);
        newArr.push(alphabets);
    }
    
    
    const reversedArray = newArr.reverse().join('');
    // return str
    return reversedArray;
}




// **************** // ***************** //
// **************** // ***************** //

// SIX

// **************** // ***************** //
// **************** // ***************** //


// This function takes an integar as an argument 
// And adds all the numbers from 1 to that argument
// If the input is 4, then the program returns 10 as 1 + 2 + 3 + 4 = 10

const SimpleAdding = num => {
    let newArr = new Array();    
    for (let i = 1; i < num; i++) {
        newArr.push(i);
    }

    const getSum = (total, number) => {
        return total + number;
    }   
    const sumOfArray = newArr.reduce(getSum);
    const finalNum = sumOfArray + num;
    return finalNum;
}


// **************** // ***************** //
// **************** // ***************** //

// SEVEN

// **************** // ***************** //
// **************** // ***************** //

// This function takes a string as its parameter and capitalizes the first letter of each word.
// For example 'hello world' as the parameter => returns 'Hello World'


const LetterCapitalize = str => {
    const newArr = str.split(' ');
    let capitalArr = newArr.map( (elem, index) => {
        return elem[0].charAt().toUpperCase() + newArr[index].substr(1);
    });
    
    const finalArr = capitalArr.join(' ');
    return finalArr;
}


// **************** // ***************** //
// **************** // ***************** //

// EIGHT

// **************** // ***************** //
// **************** // ***************** //

// This function takes a string as an argument
// and sees if all of the items within the string are different or not.
// For example, SimpleSymbols('aa') => would return false, whereas SimpleSymbols('ab') would return true

const SimpleSymbols = str => {
    let newArr = str.split('');
    let myStr;
    let boolean;
    newArr.forEach( (element, index) => {
        if (element === newArr[index + 1] ) {
            boolean = true;
        }
    });
    if (boolean) {
        myStr = false;
    } else if (!boolean) {
        myStr = true;
    }
    return myStr;
}


// **************** // ***************** //
// **************** // ***************** //

// NINE

// **************** // ***************** //
// **************** // ***************** //

// This functions takes two integars as its parameters
// and will return true is num2 is greater than num1, otherwise return false.
// Please note: this can be highly refactored. 

const CheckNums = (num1, num2) => {
    if (num2 > num1) {
        return true;
    } else if (num2 < num1) {
        return false;
    } else if (num1 === num2) {
        return -1;
    }
}



// **************** // ***************** //
// **************** // ***************** //

// TEN

// **************** // ***************** //
// **************** // ***************** //

// This function takes an integar as its argument and returns the number of hours and minutes the parameter converts to.
// For example, num = 63 would return 1:3.

const TimeConvert = num => {
        const hours = Math.floor(num / 60);  
        const minutes = num % 60;
        return hours + ":" + minutes;
}   
   


// **************** // ***************** //
// **************** // ***************** //

// ELEVEN

// **************** // ***************** //
// **************** // ***************** //

// This function takes a string, and returns the string with the letters in alphabetical order. 
// For example, hello as the parameter would return ehllo

const AlphabetSoup = str => {
    const newArr = str.split('');
    const sortArr = newArr.sort().join('');
    return sortArr;
}


// **************** // ***************** //
// **************** // ***************** //

// TWELVE

// **************** // ***************** //
// **************** // ***************** //


// This functions takes an array of integars
// Pairs all of those integars into two
// Multiplies all of the pairs seperatelhy
// Returns the highest value of the pair when multiplied

const adjacentElementsProduct = inputArray => {
    const multiplyArr = new Array();
    const multiplier = inputArray.forEach( (elem, index) => {
        const values = elem * inputArray[index + 1];
        multiplyArr.push(values);
    });
    
    const filtered = multiplyArr.filter( (el) => {
      return el;
    });
    
   	const highestVal = Math.max.apply(Math, filtered);

   	if (highestVal === null || highestVal === -Infinity) {
   		return 0;
   	} else {
    	return highestVal;
	}
}



// **************** // ***************** //
// **************** // ***************** //

// THIRTEEN

// **************** // ***************** //
// **************** // ***************** //


// This function takes a number as its parameter and returns its century.
// For example, 1905 returns 20
// For example, 1700 returns 17


const centuryFromYear = year => {
    const century = Math.ceil(year / 100);
    return century;
}   


// **************** // ***************** //
// **************** // ***************** //

// FOURTEEN

// **************** // ***************** //
// **************** // ***************** //

// This function takes a string as the argument and checks if it's a {palindrome}

const checkPalindrome = inputString => {
    let newArr = inputString.split('').reverse().join('');
    if (newArr === inputString) {
        return true;
    } else {
        return false;
    }
}



