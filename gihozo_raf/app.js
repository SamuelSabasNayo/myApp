// Working with string
const lengthFinder = (str) => {
    if (str.length == 0 || typeof(str) !== "string") return 0;
    if (str.length == 1) return 1;

    let strArr = str.split(""),
        newStrArr = [],
        longestSubStringLength = 0,
        count = 0;

    for (let i = 0; i < str.length; i++) {
        if (newStrArr[strArr[i]] !== undefined && newStrArr[strArr[i]] >= count) {
            count = newStrArr[strArr[i]] + 1;
        };

        newStrArr[strArr[i]] = i;

        longestSubStringLength = Math.max(longestSubStringLength, (i-count+1));

    };

    return longestSubStringLength;
};


// const str = "abcabcbb";

// const lengthFinder = (str) => {
//     if(str.length == 0 || typeof(str) !== 'string' ) return 0;
//     if(str.length  == 1) return 1;

//     let strArr = str.split(""),
//         newStrArr = [],
//         longestSubstringLength = 0,
//         count = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(newStrArr[strArr[i]] !==undefined && newStrArr[strArr[i]] >= count) {
//             count = newStrArr[strArr[i]] + 1
//         };
//         newStrArr[strArr[i]] = i;

//         longestSubstringLength = Math.max(longestSubstringLength, (i-count + 1))
//     }

//     return longestSubstringLength;
// };

// console.log(lengthFinder("abcabcdabc"););
// console.log(lengthFinder(str));


// let lengthOfLongestSubstring = function(s) {

//     if(!!!s.length || typeof s !== 'string' ) return 0; //if our string is empty or it's not a string, return 0
//     if(s.length  == 1) return 1;//if the length is 1, return 1;

//     let hashTable = {}; //our hashTable to hold our characters and index;
//     let longestSubstringLength = 0; //length of longest substring
//     let start = 0; //start index
//     let length = s.length; //length of the array.

//     //convert our strings to an array;
//         const strings = s.split('');

//     //iterate over the array
//         for(let i = 0; i < length; i++) {
//     //if the character exist and the value of the character is greater or equal to our start index
//             if(hashTable[strings[i]] !==undefined && hashTable[strings[i]] >= start) {
//     //change the value of start to one higher than the value of our current character 
//                 start = hashTable[strings[i]] + 1
//             }
//     //add the current index and it's value to the hashTable
//             hashTable[strings[i]] = i;
//     //find the length of the longest substring by comparing the value with the value of the current index minus the start value plus 1
//             longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
//     }

//     // return the longestSubstringLength as our final answer
//     return longestSubstringLength;
// };


// Small & large value
/* 
To see how this fxn perform, you will write an array of integers.
Then, the fxn will display small and large number.
e.g. numsEvaluator([50, 60, 30, 20, 10]);
*/

// const numsEvaluator = (numsArr) => {
//     let maxNum = numsArr[0],
//         minNum = numsArr[0];

//     for (let i = 1; i < numsArr.length; i++) {
//         if (numsArr[i] > maxNum) {
//             maxNum = numsArr[i];
//         };

//         if (numsArr[i] < minNum) {
//             minNum = numsArr[i];
//         }
//     };

//     return `The smallest num is ${minNum} and largest num is ${maxNum}`;
// }; 

// // numsEvaluator([50, 60, 30, 20, 10]);
// console.log(numsEvaluator(numsArr));


// Fibonacci
// const fibonacci2 = (array, totalLength) => {
//     if (array.length >= totalLength) {
//         return array;
//     }

//     array.push(array[array.length - 2] + array[array.length - 1]);

//     return fibonacci2(array, totalLength);
// };

// console.log(fibonacci2([0, 1], 15));


/* 
To see how this fxn perform, you will write an array of two consective integers and the total length (nth term).
Then, the fxn will add the two previous values.
e.g. numsEvaluator([50, 60, 30, 20, 10]);
*/
// const fibonacci = (totalLength) => {
//     let num1 = 0,
//         num2 = 1,
//         nextNum,
//         count = 2,
//         array = [];

//     while (count < totalLength) {
//         nextNum = num1 + num2;
//         num1 = num2;
//         num2 = nextNum;

//         array.push(nextNum);
//         count ++;
//     ;}

//     return array;
// };

// // console.log(fibonacci(15));
// console.log(fibonacci(totalLength));


// const fibonacci = (array, totalLength) => {
//     let num1 = array[0],
//         num2 = array[1],
//         nextNum,
//         count = 2

//     while (count < totalLength) {
//         nextNum = num1 + num2;
//         num1 = num2;
//         num2 = nextNum;

//         array.push(nextNum);
//         count ++;
//     ;}

//     return array;
// };

//  //  console.log(fibonacci([0, 1], 15));
// console.log(fibonacci(array, totalLength));


// // Summing elements of an array
// const array = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// };

// console.log(`Sum of aray elements is: ${sum}`);



// const items = [
//     {
//         name: "AAA"
//     },
//     {
//         name: "BBB"
//     },
//     {
//         name: "CCC"
//     },
// ];

// const getList = (items) => {
//     let itemsList = ["FFF"];
    
//     for (let i = 0; i < items.length; i++) {
//         itemsList.push(items[i].name);
//     }
//     return itemsList;
// };

// console.log(getList(items));


// const name = prompt("Enter a name");
// const namesArr = [ "AAA", "BBB", "CCC" ];

// function add(name) {
//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(namesArr[i]);
        
//         if (name === namesArr[i]) {
//             console.log("Name exists")
//         } else {
//             console.log(`Your input is ${name}`);
//         }
//     }
// };

// add(name);

// const arr = [10, 20, 30], n = arr.length;

// function multiply(arr, n) {
//     if (n<=0) {
//         return 1;
//     } else {
//         return multiply(arr, n-1) * arr[n-1];
//     }
// };

// console.log(multiply(arr, n));


// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//         product *= arr[i];    // product = product * arr[i];
//     }
//     return product;
// };

// multiply(arr, n);



// Replace Loops Using Recursion
// function sum(arr, n) {
//     // Only change code below this line
//     if (n <= 0) {
//         return 0;
//     }
//     else {
//         return sum(arr, n-1) + arr[n-1];
//       // return result;
//     }
//     // Only change code above this line
// }

// html
// css
// js (single-threaded programming language) ===> string, integer, boolean,
    // array, object, ||, &&, a = b, ==, ===, if condition, switch case,
    // tenary operator (a > b) ? "" : "",
    // for loop, find sum, find product, string methods, array methods(array.length),
    // object (user.name, user.age), destructuring, JSON format,
    // function name() {}, function name(params) {}, DOM => form validation

    // callback functions, premises (resolve, reject), .then .catch, async & await

// node js ===> types of request (get, post, put, delete),
    // status code (200, 201,400, 404)

// React js, Redux

// BMI, calculator, 

// str = prompt("Enter any word!");

// function polindrome(str) {
//     console.log(str.split("").reverse().join(''));
// };

// polindrome(str);


// const object = "Hi";

// console.log(object)
// coding
// debbugging

// const str1 = "Hello World!",
//     str2 = "not only if";

// const str1 = "Hello World";
// const str2 = "not only if";

// console.log(str1);

// const str1 = "JAVA";
// const str2 = "SCRIPT";

// // concat
// console.log(str1.concat(str2));

// const str = "JAVASCRIPT";

// // repeat
// console.log(str.repeat(3));

// search
// console.log(str.search('frontend'));

// const str = "JAVASCRIPT IS THE BEST.";

// split
// console.log(str.split(""));
// console.log(str.split(" "));


// const str = "JAVASCRIPTISTHEBEST.";

// // slice
// console.log(str.slice(3));
// console.log(str.slice(3, 11)); // ASCRIPT


// const str = "JAVASCRIPT IS THE BEST.";

// toLowerCase
// console.log(str.toLowerCase());


// const str = "javascript is the best.";

// toUpperCase
// console.log(str.toUpperCase());

// const str = " subscribe now ";
// // trim
// const result = str.trim();
// console.log(result);

// string method "abcde"

// array methods [1, 2, 3, 4, 5]
// map, filter, forEach, shift, push, pop


// const arr = [10, 20, 40, 50];
// const sum = () => {
//     let result = 0;
//     for (let i=0; i<arr.length; i++) {
//         result = result + arr[i];
//         console.log(result);
//     }
// };

// sum();
// factorize 5! = 5*4*3*2*1

// let product = 1;

// for (i=1; i<=5; i++) {
//     product = product * i;

//     console.log(product);
// };


// let sum = 0;

// for (let i=0; i<5; i++) {
//     sum += i; // sum = sum + i;
    
//     console.log(sum);
// }

// let sum = 0;

// for (let i=0; i<5; i++) {
//     sum = sum + i;

//     console.log(sum);
// }

// for (let j=5; j>0; j--) {
//     console.log(j);
// };

// let result = 0;
// for (let i=0; i<5; i++) {
//     result = result + i;

//     console.log(result);
// };

// for (let i=0; i<5; i++) {
//     console.log(i);
// };
// when you are dealing with array


// for (let i=1; i<=5; i++) {
//     console.log(i);
// };

// const arr = [10, 20, 30, 40];

// const sum = (arr) => {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i];
//         // res1 = 0 + 10 = 10
//         // res2 = 10 + 20 = 30
//         // res3 = 30 + 30 = 60
//         // res4 = 60 + 40 = 100
//     }
//     console.log(result);
// };

// sum(arr);

// const arr = [10, 20, 30, 40];

// const sum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };

// sum(arr);

// const concatNum = () => {
//     let result = 0;

//     for (let i = 0; i < 5; i++) {
//         result = result + i;
//         // 0 + 0 = 0
//         // 0 + 1 = 1
//         // 1 + 2 = 3
//         // 3 + 3 = 6
//         // 6 + 4 = 10

//         console.log(result);
//     }
// };

// concatNum();

// const arr = ["a", "b", "c", "d"];
// const len = arr.length;

// const myFxn = (len) => {
//     for (let i = 0; i < len; i++) {
//         console.log(arr[i]);
//     }
// };

// myFxn(len);


// const arr = ["a", "b", "c", "d"];
// const len = arr.length;

// const myFxn = (len) => {
//     for (let i = 0; i < len; i++) {
//         console.log(`Value of i is ${i}`);
//     }
// };

// myFxn(len);


// const end = 10;

// const myFxn = (end) => {
//     for (let i = 0; i < end; i++) {
//         console.log(`Value of i is ${i}`);
//     }
// };

// myFxn(end);

// function myGrades(grade) {
//     if (grade > 1) {
//         console.log("Invalid grade");
//     }
//     else if (grade < 0) {
//         console.log("Invalid grade");
//     }
//     else if (grade >= 0.9) {
//         console.log("Your grade is A");
//     }
//     else if (grade >= 0.8) {
//         console.log("Your grade is B");
//     }
//     else if (grade >= 0.7) {
//         console.log("Your grade is C")
//     }
//     else if (grade >= 0.6) {
//         console.log("Your grade is D");
//     }
//     else if (grade >= 0.5) {
//         console.log("Your grade is F");
//     }
//     else if (grade >= 0.6) {
//         console.log("Your grade is D");
//     }
//     else if (grade >= 0.5) {
//         console.log("Your grade is F");
//     }
//     else {
//         console.log("You have failed")
//     }
// }
// myGrades(2);


// -1 => invalid grade
// 2 => invalid grade

// .9 - 1 => Grade A
// .8 - .9 => Grade B
// .7 - .8 => Grade C
// .6 - .7 => Grade D
// .5 - .6 => Grade F
// 0 - .5 => Grade Failed


// const a = 3, b = -2;

// // and operator
// console.log(a > 0 && b > 0); // expected output: false


// const a = 3, b = -2;

// // or operator
// console.log(a > 0 || b > 0); // expected output: true


// const a = "1";
// const b = 1;

// console.log(a === b); // false integer=integer
// console.log(a == b); //true integer=string

// console.log(a = b); //false


// const greaterValue = (a, b) => {
//     a > b ? console.log("a is greater than b.") : console.log("a is less or equal b.")
// };

// greaterValue(2, 3);


// const greaterValue = (a, b) => {
//     if (a > b) {
//         console.log("a is greater than b.")
//     } else {
//         console.log("a is less or equal to b");
//     }
// };

// greaterValue(2, 3);

// const arr = [1, 2, 3, 4];

// arr.forEach(item => console.log(item));

// map()
// filter()
// forEach()

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 3) {
//         resolve('Success number');
//     } else {
//         reject('Failed number');
//     }
// });

// p.then((message) => {
//     console.log('This is ' + message);
// }).catch((message) => {
//     console.log('This is ' + message);
// })

// .then()
// .catch()


// const title = document.querySelector('.calTitle'); // for class
// const title = document.querySelector('#calTitle'); // for id
// const title = document.getElementById('calTitle');
// // const title = document.getElementByClassName('calTitle');

// console.log(title);



// const personOne = {
//     name: "Kyle",
//     age: 24,
//     address: {
//         city: "Kigali",
//         district: "Gasabo"
//     }
// };

// const { name, age, address } = personOne;

// console.log(age);
// console.log(personOne.age);
// console.log(name);


// const personOne = {
//     name: "Kyle",
//     age: 24,
//     address: {
//         city: "Kigali",
//         district: "Gasabo"
//     }
// };

// console.log(personOne.age);


// object destructuring

// const arr = [1,2,3,4];
// const item = 10;

// const nextInLine = (arr, item) => {
//     arr.push(item); // [1,2,3,4,10]

//     const removeFirstValue = arr.shift(); // 1
//     const removeLastValue = arr.pop(); // 10

//     // return removeFirstValue; // 1
//     return removeLastValue;
// };

// console.log(nextInLine(arr, item));


// const BMI = () => {
//     const height = document.getElementById('h').value;
//     const weight = document.getElementById('w').value;

//     const bmiValue = (weight/((height/100)*(height/100))).toFixed(2);
//     // console.log(bmiValue);

//     if (bmiValue < 21) {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are under weight.`;
//     } else if (bmiValue < 24) {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are healthy.`;
//     } 
//     else {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are over weight.`;
//     }
// };

// const title = document.getElementsByClassName('title');

// console.log(title);

// const showDate = document.getElementById('showDate');

// console.log(showDate);


// console.log(document.body);

// console.log(document.head);

// console.log(document.doctype);

// console.log(document.title);

// const userLocation = () => {
//     console.log(navigator.geolocation.getCurrentPosition);
// };

// userLocation();


// const simpleFxn = (value) => {
//     let result = "";

//     return result = value;
// };

// console.log(simpleFxn("JS coding"));

// const simpleFxn = (value) => {
//     let result = "";

//     result = value;

//     // console.log(result);
// };

// simpleFxn("JS coding");


// const val = prompt("Enter a value");

// function caseInSwitch(val) {
//     let answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }

//     return answer;
// };

// console.log(caseInSwitch(1));


// const num = 1;

// const evalutor = (num) => {
//     let result = "";
//     switch(num) {
//         case 1:
//             result = "hello world 1.";
//             break;
        
//         case 2:
//             result = "hello world 2.";
//             break;
    
//         case 3:
//             result = "hello world 3.";
//             break;
//     }

//     return result;
// };

// console.log(evalutor(num));



// let testArr = [1, 2, 3, 4, 5];

// console.log(testArr);

// let myStr = "Bob";

// myStr[0] = "J";
// myStr = "Job";

// console.log(myStr); 


// const displayDate = () => {
//     let currentTime = new Date();

//     let time = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

//     console.log(time);

// };

// displayDate();


// const displayDate = () => {
//     let currentTime = new Date();

//     let time = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

//     document.getElementById("showDate").innerHTML = `${time}`;
// };

// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
// ];

// const techCompanies = companies.filter(item => item.name === "Finance");

// console.log(techCompanies);



// const myArr = [
//     {name:"AAA", age: 20},
//     {name:"BBB", age: 21},
//     {name: "AAA", age: 22},
//     {name: "BBB", age: 23},
//     {name: "CCC", age: 24},
//     {name: "DDD", age:25}
// ];

// const namesArr = myArr.filter(item => item.name === "AAA");

// console.log(namesArr);


// const numArr = [1, 2, 3, 4, 5];

// const num3 = numArr.filter(item => item > 3);


// const name = "hello"; // olleh
// const splittedName = name.split(""); // "h", "e", "l", "l", "o"
// const reversed = splittedName.reverse();
// const reversedName = reversed.join("");
// console.log(splittedName);

// const name = "ABCDEFG";
// const result = name.split("").reverse().join("");

// console.log(result);


// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 },
// ];

// const expensiveItems = items.filter(item => item.price >= 100);

// console.log(expensiveItems);


// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 },
// ];

// const filteredPrices = items.filter(item => item.price > 100);

// console.log(filteredPrices);

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.filter(num => num>3);

// console.log(newArr);

// filter method

// const items = [
//     {name: 'Bike', price: 100 },
//     {name: 'TV', price: 200 },
//     {name: 'Album', price: 10 },
//     {name: 'Book', price: 5 },
//     {name: 'Phone', price: 500 },
//     {name: 'Computer', price: 1000 },
//     {name: 'Keyboard', price: 25 },
// ];

// const itemNames = items.map(item => item.name);

// const itemPrices = items.map(item => item.price)

// console.log(itemPrices);

// const arr = [
//     {name:"AAA", age: 20},
//     {name:"BB", age: 22},
//     {name:"CCC", age: 25}
// ];

// const newArr = arr.map(item => item.name);

// console.log(newArr);

// const arr = [1, 2, 3];

// const newArr = arr.map(num => num*2);

// console.log(newArr);

// Array methods


// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     continent: "Africa",
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };

// const country1 = JSON.stringify(country);

// const country2 = JSON.parse(country1);
// console.log(country1);


// console.log(country);

// const users = ["AAA", "BBB", "CCC", "DDD"];

// for (let i=0; i<users.length; i++) {
//     console.log(users[i]);
// };


// const num = 5;

// for (let i=1; i<=num; i++) {
//     console.log(i);
// };

// for (i=0; i<=5; i++) {
//     for (j=0; j<=5; j++) {
//         console.log(i, j);
//     }
// }

// i=0 j=0
// i=0 j=1
// i=0 j=2


// for (let j=5; j>=1; j--) {
//     console.log(j);
// };

// for (let i=1; i<=5; i++) {
//     console.log(i);
// };

// for loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// < 0 The number is negative.
// > 0 The number is positive.
// = 0 The number equal.


// const users = [
//     {
//         name: "AAA",
//         age: 20,
//         location: "Kigali",
//         gender: "F"
//     },
//     {
//         name: "BBB",
//         age: 22,
//         location: "Ngoma",
//         gender: "M"
//     },
//     {
//         name: "CCC",
//         age: 24,
//         location: "Huye",
//         gender: "F"
//     }
// ];

// const oneUSer = users[1];

// console.log(oneUSer.name);

// const users = [
//     {
//         name: "AAA",
//         age: 20,
//         location: "Kigali",
//         gender: "F"
//     },
//     {
//         name: "BBB",
//         age: 22,
//         location: "Ngoma",
//         gender: "M"
//     },
//     {
//         name: "CCC",
//         age: 24,
//         location: "Huye",
//         gender: "F"
//     }
// ];

// console.log(users);


// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };
// console.log(`My country name is ${country.name}.`); // Rwanda
// console.log(`My country coordinates are ${country.latitude}lat and ${country.longitude}long.`); // Rwanda

// const myArray = ["A", "B", "C", "D"];
// // element position
// // console.log(myArray[0]);
// console.log(myArray[3]);

// // array length
// const arrayLength = myArray.length;

// console.log(`My array length is ${arrayLength}.`)


// const s = [5, 7,2];
// function editInPlace() {
//     "use strict";

//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }

// function squareRoot(num) {
//     return Math.sqrt(num);
// };

// console.log(squareRoot(25)); // 5

// function power(a, b) {
//     return Math.pow(a, b);
// };

// console.log(power(4, 2)); // 16

// built-in functions

// function isLess(a, b) {
//     return a < b;
// };

// console.log(isLess(20, 15)); // true or false 

// let num = prompt("Enter a number between 0 and 1");

// function grader(num) {
//     if (num >= 0.8) {
//         console.log("You have grade A.");
//     }
//     else if (num >= 0.7) {
//         console.log("You have grade B.");
//     }
//     else if (num >= 0.6) {
//         console.log("You have grade C.");
//     }
//     else if (num >= 0.5) {
//         console.log("You have grade D.");
//     }
//     else {
//         console.log("You have grade F.");
//     }
// };

// grader(num);


// gradder fxn
// 0.8 - 1 => Grade A
// >= 0.7 => Grade B
// >= 0.6 => Grade C
// >= 0.5 => Grade D
// < 0.5 => Grade F

// let value = prompt("Choose a weather between HOT OR RAINY");

// const weatherDetector = (value) => {
//     if (value == "HOT") {
//         console.log("Wear a T-shirt.");
//     }
//     else if (value == "RAINY") {
//         console.log("Take an umbrella.");
//     }
//     else {
//         console.log("None of the result.")
//     }
// };

// weatherDetector(value);

// if (condition) {
//  result
// }


// hot => Wear a T-shirt.
// rainy => Take an umbrella.
// none => Weather is good.


// alert('hello world');
// console.log('hello world');

// ---------------------------------------------------------------------

// const square = (num) => {
//     return num * num;
// };

// console.log(square(4));
// console.log(square(10));


// const name = 'Sam';
// const age = 10;

// console.log(`Username is ${name}, he is ${age} years old`)
// console.log("Username is " +name+ ", he is " +age+ "years old")

// const name = "Sam";
// console.log("My username is " + name);

// console.log("Username is " +name+ ", he is age " +age)


// const sum2 = (num1, num2) => {
//     console.log(num1+num2);
// };

// sum2(50, 100);

// function sum1(num1, num2) {
//     console.log(num1+num2);
// };

// sum1(2, 1);

// ES 6
// 1995-1996 --- 2015
// cons, var=let, function sum() {}

// function sum(num1, num2) {
//     return num1+num2;
// };

// console.log(sum(2, 3));

// function sum(num1, num2) {
//     console.log(num1+num2);
// };
    
// sum(2, 1);
// sum(1, 3);
// sum(2, 4);
// sum(23, 14);
// sum(25, 44);


// function greeting() {
//     console.log('Hello people!');
// };

// greeting();

// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };
// console.log(country);

// const user = {
//     name: 'Anna',
//     age: 28,
//     location: 'Kigali'
// };
// console.log(user);
// object

// const students = ['Anna', 'Annet', 'Amos', 'Arnaurd', 'Emmy'];
// console.log(students);


// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// array

// let number = 12;
// console.log(number);

// const number = 12;
// console.log(number);

// console.log("Hello world 1");