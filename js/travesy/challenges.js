// function reverseInt(int) {
//     const revString = int.toString().split('').reverse().join('');
//     return parseInt(revString) * Math.sign(int);
// }

// console.log(reverseInt(-1234));
// console.log(reverseInt(12345));



// function reverseInt(int) {
//     const revString = int.toString().split('').reverse().join('');
//     return parseInt(revString);
// }

// console.log(reverseInt(-1234));

// 3: Reverse an integer
////////////////////////////////////////////////////////////////



// function isPalindrome(str) {
//     const revString = str.split('').reverse().join('');

//     return revString === str;
// }

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('sabas'));

// 2: validate a palindrome
////////////////////////////////////////////////////////////////




function reverseString (str) {
    return str.split('').reduce((revString, char) => char +
    revString, '');
}

console.log(reverseString('hello'));



// function reverseString (str) {
//     return str.split('').reduce(function(revString, char) {
//         return char + revString;
//     }, '');
// }

// console.log(reverseString('hello'));


// function reverseString(str) {
//     let revString = '';
//     str.split('').forEach(char => revString = char + revString
//     );
//     return revString;
// }

// console.log(reverseString('hello'));


// function reverseString(str) {
//     let revString = '';
//     str.split('').forEach(function (char) {
//         return revString = char + revString;
//     });
//     return revString;
// }

// console.log(reverseString('hello'));



// function reverseString(str) {
//     let revString = '';
//     for (let char of str) {
//         revString = char + revString;
//     }
//     return revString;
// }

// console.log(reverseString('hello'));



// function reverseString(str) {
//     let revString = '';
//     for (let i = 0; i <= str.length - 1; i++) {
//         revString = str[i] + revString;
//     }
//     return revString;
// }

// console.log(reverseString('hello'));



// function reverseString(str) {
//     let revString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         revString = revString + str[i];
//     }
//     return revString;
// }

// console.log(reverseString('hello'));

console.log(reverseString('hello'));



// function reverseString(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// console.log(reverseString('hello'));

// 1: reverse a string