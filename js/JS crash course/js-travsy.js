// const makeNoise = (() =>
// 	alert('HELLO SAM'));

// makeNoise();

// const square = (x) => x + x;

// alert(square(2));

// --------------------------------------------
// const car = {
//     'name': 'Fiat',
//     'model': 500,
//     'weight': '850kg',
//     'color':  'white'
// };
// console.log(car);
// console.log(car.name);


// Understand the difference between import and require
// import { capitalizeString } from "./string-function.js"
// const cap = capitalizeString("hello!");

// console.log(cap);




// Use getters and setters to Control Access to an Object
// function makeClass() {
//     class Thermostat {
//         constructor(temp) {
//             this._temp = 5 / 9 * (temp - 32);
//         }
//         get temperature() {
//             return this._temp;
//         }
//         set temperature(updatedTemp) {
//             this._temp = updatedTemp;
//         }
//     }
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const Thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp);




// Use class Syntax to Define a Constructor Function
// class SpaceShuttle {
//     constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//     }
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet); 



// function makeClass() {
//     class Vegetable {
//         constructor(name) {
//             this.name = name;
//         }
//     }
//     return Vegetable;
// }
// const vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);


// var SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);



// Write Concise Declarative Functions
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);



// Write Concise Object Literal Declarations Using Simple Fields
// const createPerson = (name, age, gender) => ({name, age, gender});
// console.log(createPerson("Samuel Sabas", 30, "male"));



// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };

// };
// console.log(createPerson("Samuel Sabas", 30, "male"));



// Create Strings using Template Literals
// const person = {
//     name: "Zodaic Hasbro",
//     age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);


// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped:["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//     const resultDisplayArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//     }
//     return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>`]
//  **/
// const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray);


// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };
// const half = (function() {

//     return function half({ max, min}) {
//         return (max + min) / 2.0;

//     // return function half(stats) {
//     //     return (stats.max + stats.min) / 2.0;
//     };
// }) ();
// console.log(stats);
// console.log(half(stats));



// // use Destructuring Assignment to Pass an Object as a Function's Parameters
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {

//     const [ , , ...arr] = list;
//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);



// const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);

// let a = 8, b = 6;
// (() => {
//     "use strict";
//     [a, b] = [b, a]
// }) ();
// console.log(a);
// console.log(b);



// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";

//     const { tomorrow : { max : maxOfTomorrow }} = forecast;

//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));



// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTomorrow(avgTemperatures) {
//     "use strict";

//     const { tomorrow: tempOfTomorrow } = avgTemperatures;

//     return tempOfTomorrow;
// }

// console.log(getTempOfTomorrow(AVG_TEMPERATURES));



// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//     arr2 = [...arr1];
//     arr1[0] = 'potato';
// }) ();
// console.log(arr2);



// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//     arr2 = arr1;
//     arr1[0] = 'potato';
// }) ();
// console.log(arr2);



// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0)
//     };
// }) ();
// console.log(sum(1, 2, 3, 4, 5));



// const sum = (function() {
//     return function sum(x, y, z) {
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0)
//     };
// }) ();
// console.log(sum(1, 2, 3));



// const increment = (function() {
//     return function increment(number, value = 1) {
//         return number + value;
//     };
// })();
// console.log(increment(5, 2));
// console.log(increment(5));



// const realNumberArray = [4, 5.6, 9, -9.8, 3.14, 42, 6, 8.3, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);



// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4,5]));



// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     Object.freeze(MATH_CONSTANTS);

//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();



// const s = [5, 7,2];
// function editInPlace() {
//     "use strict";

//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }

// editInPlace();

// console.log(s);



// function printManyTimes(str) {
//     "use strict";

//     const SENTENCE  = str + " is cool!";

//     for (let i = 0; i < str.length; i+=2) {
//         console.log(SENTENCE);
//     }
// }

// printManyTimes("FreeCodeCamp");



// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }

// checkScope();



// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }

// console.log(checkSign(-10));




// function checkEqual(a, b) {
//     return a === b ? true : false;
// }

// console.log(checkEqual(21, 21));



// function convertToInteger(str) {
//     return parseInt(str, 2);
// }

// console.log(convertToInteger("10011"));
// console.log(convertToInteger("11111110"));



// function convertToInteger(str) {
//     return parseInt(str);
// }

// console.log(convertToInteger("100"));



// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// var myRandom = randomRange(5, 20);

// console.log(myRandom);



// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNum());



// function randomFraction() {
//     return Math.random();
// }

// console.log(randomFraction());



// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookUpProfile(name, prop) {
//     for (var i = 0; i < contacts.length; i++) {
//         if(contacts[i].firstName === name) {
//             return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contact";
// }
// var data = lookUpProfile("Sherlock", "likes");

// console.log(data);


// var data = lookUpProfile("sherlock", "likes");

// console.log(data);


// var data = lookUpProfile("Sherlock", "liikes");

// console.log(data);



// var myArray = [];
// var i = 1;

// do {
//     myArray.push(i);
//     i++;
// } while (i < 5)

// console.log(i, myArray);



// var myArray = [];
// var i = 0;

// while (i < 5) {
//     myArray.push(i);
//         i++;
//     }

// console.log(i, myArray);



// function multiplyAll(arr) {
//     var product = 1;

//     for (var i=0; i < arr.length; i++) {
//         for (var j=0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }

//     return product;
// }

// var product = multiplyAll([[2], [3, 4]]);

// console.log(product);


// var myArray = [2, 3, 4, 5];
// var total = 1;

// for (var i = 0; i < myArray.length; i++) {
//     total *= myArray[i];
// }

// console.log(total);



// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }

// console.log(ourTotal);



// var myArray = [];

// for (var i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);



// var myArray = [];

// for (var i = 10; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);



// var myArray = [];

// for (var i = 1; i < 20; i += 2) {
//     myArray.push(i);
// }

// console.log(myArray);



// var myArray = [];
// for (i=0; i < 6; i++) {
//     myArray.push(i);
// }

// console.log(myArray);



// var myArray = [];

// var i = 0;
// while(i <= 10) {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray);



// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439,  "artist", "ABBA"));




// var myPlants =[
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[1].list[1];

// console.log(secondTree);




// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else {
//         return "Not Found"
//     }
// }

// console.log(checkObj("hello"));




// function phoneticLookUp(val) {
//     var result = "";
//     var lookUp = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "frank"
//     };
//     result = lookUp[val];
//     return result;
// }

// console.log(phoneticLookUp("bravo"));



// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": ["everything!"]
// };

// ourDog.name = "Happy Camper";
// ourDog['bark'] = "woof";

// console.log(ourDog);



// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };

// var entreeValue = testObj["an entree"];
// var sideValue = testObj['my side'];
// var drinkValue = testObj['the drink'];

// console.log(sideValue);



// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersery",
//     "shoes": "cleats"
// };

// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;

// console.log(hatValue);



// function sqrtOfNum(a) {
//     return Math.sqrt(a);
// }

// console.log(sqrtOfNum(2));



// function powerOfNum(a, b) {
//     return Math.pow(a, b);
// }

// console.log(powerOfNum(4, 2));



// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(3, 2));



// function isLess(a, b) {
//     return a < b;
// }

// console.log(isLess(10, 15));



// function chainToSwitch(val) {
// var answer = "";
// switch(val) {
//     case "bob":
//         answer = "Marley";
//         break;
//     case 42:
//         answer = "The Answer";
//         break;
//     case 1:
//         answer = "There is no #1";
//         break;
//     case 99:
//         answer = "Missed me by this much!";
//         break;
//     case 7:
//         answer = "Ate Nine";
//         break;
// }
// return answer;
// }

// console.log(chainToSwitch(99));




// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Low";
//             break;
//             case 7:
//             case 8:
//             case 9:
//                 answer = "High";
//                 break;
//     }
//     return answer;
// }

// console.log(sequentialSizes(5));



// function switchOfStuff(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default:
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }

// console.log(switchOfStuff("a"));



// function caseInSwitch(val) {
//     var answer = "";
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
// }

// console.log(caseInSwitch(3));



// var names = ["Hole-in-one!", "Eagle", "Birdie", "par", "Bogey",
// "Double Bogey", "Go Home"];
// function golfScore(par,  strokes) {
//     if (strokes == 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {
//         return names[1];
//     } else if (strokes <= par - 1) {
//         return names[2];
//     } else if (strokes <= par) {
//         return names[3];
//     } else if (strokes <= par + 1) {
//         return names[4];
//     } else if (strokes <= par + 2) {
//         return names[5];
//     } else if (strokes <= par + 3) {
//         return names[6];
//     }
// }

// console.log(golfScore(5, 4));



// function testSize(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else {
//         return "Huge";
//     }
// }

// console.log(testSize(10));


// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }

// console.log(testElseIf(7));



// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val >10) {
//         return "Over 10";
//     }
//     return "10 or under";
// }


// console.log(testGreaterThan(119));



// function compareEquality(a, b) {
//     if (a === b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEquality(10, "10"));


// function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(12));



// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }

// console.log(trueOrFalse(false));



// var changed = 0;
// function change(num) {
//     return (num +5) / 3;
// }

// changed = change(10);

// console.log(changed);



// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }

// console.log(timesFive(5));

// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear = "Sweater";

//     return outerWear;
// }

// console.log(myOutfit());
// console.log(outerWear);



//  function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }

// myLocalScope();
// console.log(myVar);



// Declare your variable here
// var myGlobal = 10;

// function fun1() {
//     oopsGlobal = 5;
// }

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     } 
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();


// function myFunction() {
//     alert
// }


// var x = {
//     firstName: "john",
//     lastName:  "Doe"
// }


// Calculating a value
// function square(num) {
//     return num * num;
// } 

// console.log(square(3));


// function square(num) {
//     return num * num;
// } 

// let squared = square(3);
// console.log(squared);


// Performing a task
// function greet(firstName, lastName) {
//     console.log('Hello ' + firstName + ' ' + lastName);
// }

// greet('samuel', 'sabas')
// greet('bob', 'olivier');


// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('samuel')
// greet('sabas');



// function greet() {
//     console.log('Hello World');
// }

// greet();


// let selectedColors = ['red', 'blue'];
// // selectedColors[2] = 1;
// console.log(selectedColors.length);


let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);


// let name ='Mosh';
// let age = 30;
// let isApproved = false;
// let firstName = undefined;
// let selectedColor = null;


// var total = 0;
// for(var num = 1; num <10; num++) {
//     total = total + num;
// }

// console.log('The total is: ' + total);


// function greet(who) {
//     console.log('Hello ' + who);
// }

// greet('Sam');
// console.log('Bye!');
