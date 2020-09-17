// A SONG------WHITE NOISE, BLACK SCREEN
// www.jabjabjavascript.com
// Water Meter Number: 253211736

// challenge 22
// function translatePigLatin(str) {
//     // var firstVowel = str.match(/[aeiou]/);
//     // var firstPosition = str.indexOf(firstVowel);
//     var firstPosition = findFirstVowelPosition(str);

//         if (firstPosition > 0) {
//             return str.slice(firstPosition) + str.slice(0,firstPosition) + 'ay';
//         }
//         return str + "way";
//     }

//     function findFirstVowelPosition(str) {
//         for (var i=0; i<str.length; i++) {
//             if ("aeiou".indexOf(str[i])  !== -1) {
//                 return i;
//             }
//         }
//     }
    
// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("agriculture"));
// console.log(translatePigLatin("laptop"));




// function translatePigLatin(str) {
//     var firstVowel = str.match(/[aeiou]/);
//     var firstPosition = str.indexOf(firstVowel);
    
//     if (firstPosition > 0) {
//         return str.slice(firstPosition) + str.slice(0,firstPosition) + 'ay';
//     }
//     return str + "way";
// }

// console.log(translatePigLatin("consonant"));



// function translatePigLatin(str) {
//     var firstVowel = str.match(/[aeiou]/);
//     console.log(firstVowel);
// }

// translatePigLatin("consonant");




// challenge 21
// function myReplace(str, before, after) {
//     var words = str.split(" ");
    
//     if (before[0] === before[0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1);
//     }

//     for (var i=0; i<words.length; i++) {
//         if (words[i] === before) {
//             words[i] = after;
//         }
//     }
//     return words.join(" ");
        
// }

// console.log(myReplace("Quick fox jumped over a lazy dog", "Quick", "large"));




// function myReplace(str, before, after) {
//     var words = str.split(" ");
    
//     if (before[0] === before[0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1);
//     }

//     for (var i=0; i<words.length; i++) {
//         if (words[i] === before) {
//             words[i] = after;
//         }
//     }
//     return words;
        
// }

// console.log(myReplace("A quick fox Jumped over a lazy dog", "Jumped", "leaped"));




// function myReplace(str, before, after) {
//     if (before[0] === before[0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1);
//     }
//     return str.replace(before, after);
// }

// console.log(myReplace("A quick fox Jumped over a lazy dog", "Jumped", "leaped"));




// function myReplace(str, before, after) {
//     return str.replace(before, after);
// }

// console.log(myReplace("A quick fox jumped over a lazy dog", "jumped", "leaped"));




// var sentence = "I love hiking";

// console.log(sentence.replace("hiking", "biking"));



// challenge 20
// function whatIsInAName(collection, source) {
    
//     var keys = Object.keys(source);

//     return collection.filter(function(obj) {
//         for (var key of keys) {
//             if (!obj.hasOwnProperty(key)  || obj[key] !== source[key]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// console.log(whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2},
// {"a":  2, "b": 1}, {"c": 1, "d": 2},], {"a": 1, "b": 2}));




// function whatIsInAName(collection, source) {
    
//     var keys = Object.keys(source);

//     return collection.filter(function(obj) {
//         for (var key of keys) {
//             console.log(key);
//         }
//     });
// }

// console.log(whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2}));



// function population(id, requirements) {
//     var arr = [];
//     var keys = Object.keys(requirements);

//     console.log(keys);

//     return arr;
// }

// (population([{name: 'samuel', street: 'kk123st'},
// {name: 'milli', street: 'kk456st'}], {name: 'samuel', street: 'kk345st'}));



// var nums = [1, 2, 3, 4, 5];

// console.log(nums.filter(function(num) {
//     // if (num < 3) {
//     //     return true;
//     // }
//     return num < 3;
// }))



// function whatIsInAName(collection, source) {
    //what's in a name?
    // var arr = [];
    // var keys = Object.keys(source);

    // console.log(keys);
    //only change code below this line

    //only change code above this line
//     return arr;
// }

// whatIsInAName([{first: "samuel", last: "sabas"}, {first: "joshua",
// last: "fluke"}, {first: "bob", last: "olivier"}, {first: "milli",
// last: "sister"}], {last: "sabas"});



// challenge 19
// function convertToRoman(num) {
//     var romanToNum = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };
//     var roman = "";

//     for (var key in romanToNum) {
//         while (num >= romanToNum[key]) {
//             roman += key;
//             num -= romanToNum[key];
//             console.log(roman);
//         }
//     }

//     return roman;
// }

// console.log(convertToRoman(36));



// function convertToRoman(num) {
//     var romanToNum = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };
//     var roman = "";

//     for (var key in romanToNum) {
//         while (num >= romanToNum[key]) {
//             roman += key;
//             num -= romanToNum[key];
//         }
//     }

//     return roman;
// }
// console.log(convertToRoman(1));
// console.log(convertToRoman(6));




// function convertToRoman(num) {
//     var romanToNum = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };
//     var roman = "";

//     for (var key in romanToNum) {
//         console.log("key: ", key);
//         console.log("value: ", romanToNum[key]);
//     }
// }

// convertToRoman(36);




// challenge 18
// function diffArray(arr1, arr2) {
//     var combinedArray = arr1.concat(arr2);

//     return combinedArray.filter(function(num) {
//         if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
//             return num;
//         }
//     })
// }

// console.log(diffArray([0.2, 1, 3, 5, 6], [1, 2, 3, 4, 5]));




// function diffArray(arr1, arr2) {
//     var combinedArray = arr1.concat(arr2);

//     return combinedArray;
// }

// console.log(diffArray([0, 1, 3, 5], [1, 2, 3, 4, 5]));



// var nums = [1, 2, 3, 4, 5];
// console.log(nums.filter(function(nums) {
//     return nums != 3;
// }));




// function diffArray(arr1, arr2) {
//     var result = [];

//     for (var i=0; i<arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             result.push(arr1[i]);
//         }
//     }

//     for (var j=0; j<arr2.length; j++) {
//         if (arr1.indexOf(arr2[j]) === -1) {
//             result.push(arr2[j]);
//         }
//     }
//     return result;
// }

// console.log(diffArray([1, 2, 3], [4, 5, 3, 6]));




// function diffArray(arr1, arr2) {
//     var result = [];

//     for (var i=0; i<arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             result.push(arr1[i]);
//         }
//     }

//     return result;
// }

// console.log(diffArray([1, 2,  3, 5], [1, 2, 3, 4, 5]));






// challenge 17
// function sumAll(arr) {
//     var start = Math.min(arr[0], arr[1]);
//     var end = Math.max(arr[0], arr[1]);
//     var total = 0;

//     for (var i=start; i<=end; i++) {
//         total += i;
//     }

//     return total;

// }

// console.log(sumAll([5, 3]));




// function sumAll(arr) {
//     var start = Math.min(arr[0], arr[1]);
//     var end = Math.max(arr[0], arr[1]);
//      var total = 0;

//     for ( var i=start; i<=end; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(sumAll([1, 3]));



// function sumAll(arr) {
//     var start = Math.min(arr[0], arr[1]);
//     var end = Math.max(arr[0], arr[1]);
//     var total = 0;
    
//     for (var i=start; i<=end; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(sumAll([1, 4]));



// function sumAll(arr) {
//     var start = Math.min(arr[0], arr[1]);
//     var end = Math.max(arr[0], arr[1]);

//     console.log(start, end);
// }
// sumAll([1, 4]);




// challenge 15
// function rot13(str) {
//     var solved = "";
//     for (var i=0; i<str.length; i++) {
//         var asciiNum = str[i].charCodeAt();
//         if (asciiNum >= 65 && asciiNum <= 77) {
//             solved += String.fromCharCode(asciiNum +13);
//         } else if (asciiNum >= 78 && asciiNum <= 90) {
//             solved += String.fromCharCode(asciiNum -13);
//         } else {
//             solved += str[i];
//         }
//     }
//     return solved;
// }

// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SMALL ANIMAL FEED PELLET MAKING MACHINE"));

// console.log(rot13("FZNYY NAVZNY SRRQ CRYYRG ZNXVAT ZNPUVAR"));


// function rot13(str) {
//     for (var i=0; i<str.length; i++) {
//         console.log(str[i].charCodeAt());
//     }
// }
// rot13("AZ");


// function rot13(str) {
//     for (var i=0; i<str.length; i++) {
//         console.log(str[i]);
//     }
// }
// rot13("SERR PBR PNZC");




// challenge 15
// function getIndexToIns(arr, num) {
//     //Find my place in this sorted array

//     arr.sort(function(a, b) {
//         return a - b;
//     });

//     for (var i=0; i<arr.length; i++) {
//         if (num <= arr[i]) {
//             return i;
//         }
//     }

//     return arr.length;
// }
// console.log(getIndexToIns([40, 60, 5], 50));




// function getIndexToIns(arr, num) {
//     //Find my place in this sorted array.
//     arr.sort(function(a, b) {
//         return a - b;
//     })

//     console.log(arr);
// }

// getIndexToIns([40, 60, 5], 50);



// var things = ["a", "b", "c"];
// console.log(things.sort());



// challenge 14
// function destroyer(arr) {
//     //Remove all the values
//     var args = Array.from(arguments);

//     args.splice(0, 1);
//     var targets =args;

//     return arr.filter(function(num) {
//         return targets.indexOf(num) === -1;
//     });
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1));
// console.log(destroyer([3,4,5,6,7,2],1,3,4,2,));




// function destroyer(arr) {
//     //Remove all the values
//     var args = Array.from(arguments);

//     args.splice(0, 1);
//     var targets =args;
//     var result = [];
    
//     for (var num of arr) {
//         if (targets.indexOf(num) === -1) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1));
// console.log(destroyer([3,4,5,6,7,2],1,3,4,2,));




// function destroyer(arr) {
//     //Remove all the values
//     var args = Array.from(arguments);

//     args.splice(0, 1);
//     var targets =args;
    
//     for (var num of arr) {
//         console.log(num);
//     }

//     return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1);





// function destroyer(arr) {
//     //Remove all the values
//     var args = Array.from(arguments);

//     args.splice(0, 1);
//     console.log("args: " + args);

//     return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1);



// function destroyer(arr) {
//     //Remove all the values
//     var args = Array.from(arguments);

//     var targets = args.slice(1);
//     console.log(targets);
//     return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1);




// Arguments
// function destroyer(arr) {
//     //Remove all the values

//     console.log(arguments);
//     return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1);





// challenge 13
// function bouncer(arr) {
//     return arr.filter(function(elem) {
//         return elem;
//     });
// }

// alert(bouncer([7, "ate", "", false, 9, "hey", undefined]));



// //Filter Method
// var nums = [1, 2, 3, 4, 5, 6];

// const filtered = nums.filter(function(item) {
//     return item < 4;
// });

// alert(filtered);
// // console.log(filtered);




// function bouncer(arr) {
//     // Don't show a false ID to this bouncer.
//     var truthies = [];

//     for (var elem of arr) {
//         if (elem) truthies.push(elem);
//     }

//     return truthies;
// }

// console.log(bouncer([7, "ate", "", false, 9]));




// challenge 12
// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();

//     for (var letter of secondWord) {
//         if (!firstWord.includes(letter)) return false;
//     }

//     return true;
// }

// alert(mutation(["hello", "hey"]));
// // console.log(mutation(["hello", "hee"]));



// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();

//     for (var letter of secondWord) {
//         if (firstWord.indexOf(letter) === -1) return false;
//     }

//     return true;
// }

// alert(mutation(["hello", "hey"]));
// // console.log(mutation(["hello", "hee"]));



// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();

//     for (var i=0; i<secondWord.length; i++) {
//         if (firstWord.indexOf(secondWord[i]) === -1) return false;
//     }

//     return true;
// }

// alert(mutation(["hello", "hee"]));
// // console.log(mutation(["hello", "hee"]));




// var greeting = "hello";
// console.log(greeting.indexOf("k") === -1)



// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();

//     for (var i=0; i<secondWord.length; i++) {
//         console.log(secondWord[i])
//     }
// }

// mutation(["hello", "hey"]);




// challenge 11
// function slasher(arr, howMany) {
//     arr.splice(0, howMany);
//     return arr;
// }
// console.log(slasher([1, 2, 3], 2));
// console.log(slasher(["burgers", "fries", "shake"], 1));





// challenge 10
// function chunkArrayInGroups(arr, size) {
//     //Break it up.
//     var groups = [];
//     while (arr.length > 0) {
//         groups.push(arr.splice(0, size));
//         // arr =arr.slice(size);
//     }

//     return groups;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3));



// var letters = ['b', 'b', 'c', 'd'];
// console.log(letters.splice(0, 2));

// console.log(letters);



// function chunkArrayInGroups(arr, size) {
//     //Break it up.
//     var groups = [];
//     while (arr.length > 0) {
//         groups.push(arr.slice(0, size));
//         arr =arr.slice(size);
//     }

//     return groups;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3));



// function chunkArrayInGroups(arr, size) {
//     //Break it up.
//     var groups = [];
//     while (arr.length > 0) {
//         groups.push(arr.slice(0, size));
//         arr = arr.slice(size);
//     }

//     return groups;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));




// challenge 9
// function truncateString(str, num) {
//     if (num >= str.length) return str;
//     if (num <= 3) return str.slice(0, num) + '...';
//     return str.slice(0, num-3) + '...';
// }

// console.log(truncateString('A-ticket a-tasket A green and yellow basket', 15));



// function truncateString(str, num) {
//     if (num <= 3)
// }



// function truncateString(str, num) {
//     if (num <= 3) return str.slice(0, num) + "...";
// }

// console.log(truncateString("tommy goes to work.", 3));



// var name = "jonathan";
// console.log(name.slice(0, 2));




// challenge 8
// function repeatStringNumTimes(str, num) {
//     if (num < 0) return "";

//     if (num === 1) return str; //base case

//     return str + repeatStringNumTimes(str, num - 1);
// }

// console.log(repeatStringNumTimes("abc", 3));



// function repeatStringNumtimes(str, num) {
//     var final = "";
//     if (num < 0) return "";

//     for (var i=0; i<num; i++) {
//         final += str;
//     }

//     return final;
// }

// console.log(repeatStringNumtimes("abc", 7));



// function repeatStringNumTimes(str,num) {
//     if (num < 0) return " ";
//     return str.repeat(num);
// }

// console.log(repeatStringNumTimes("abc",3));



// function repeatStringNumTimes(str,num) {
//     if (num < 0) return " ";
//     return str.repeat(num);
// }

// console.log("hello".repeat(3));




// challenge 7
// function confirmEnding(str, target) {
//     return str.endsWith(target);
// }

// console.log(confirmEnding("mango", "o"));



// function confirmEnding(str, target) {
//     //"Never give up and good luck will find you."
//     // Falcor
//     if (str.endsWith(target)) {
//         return true;
//     }
//     return false;
// }
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("My car is black", "black"));



// challenge 6
// function largestOfFour(arr) {
//     var maxes = [];
//     for (var i=0; i<arr.length; i++) {
//         var maxElement = arr[i][0];

//         for (var j =0; j<arr[i].length; j++) {
//             var currentElement = arr[i][maxElement];

//             if (currentElement >= maxElement) {
//                 maxElement = currentElement;
//             }
//         }
//         maxes.push(maxElement);
//     }
//     return maxes;
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




// challenge 5
// function titleCase(str) {
//     var titled = str.toLowerCase().split(" ").map(function(elem) {
//         return elem[0].toUpperCase() + elem.slice(1);
//     })
//     return titled.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));




// function titleCase(str) {
//     var titled = str.toLowerCase();
//     return titled;
// }

// console.log(titleCase("I'm a little tea pot"));




// function titleCase(str) {
//     var words = str.toLowerCase().split(" ");
//     for (var i=0; i<words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));




// challenge 4
// function findLongestWord(str) {
//     return str.split(" ").sort(function(a, b) {return b.length - a.length})[0];
// }

// console.log("The longest string is " + findLongestWord("The quick brown fox jumped over the lazy dog"));



// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longest = "";

//     for (var word of words) {
//         if (word.length > longest.length) longest = word;
//     }

//     console.log("The longest string is " + longest + " with " + longest.length + " characters");    
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// example
var fruits = ["apple", "mango", "cherries"];
for (var fruit of fruits) {
    console.log(fruit);
}




// challenge 3
// function palindrome(str) {
//     var reg = /[\W_]/g;

//     var smallStr = str.toLowerCase().replace(reg, "");

//     var reversed = smallStr.split("").reverse().join("");
//     if (reversed === smallStr) {
//         return reversed;
//     };

//     return false;
// }

// console.log(palindrome("sabas"));



// function palindrome(str) {
//     var reg = /[\W_]/g;

//     var smallStr = str.toLowerCase().replace(reg, "");

//     var reversed = smallStr.split("").reverse().join("");
//     if (reversed === smallStr) return true;

//     return false;
// }

// console.log(palindrome("racecar*&"));
// console.log(palindrome("sabas*&"));
// console.log(palindrome("samuel"));



// challenge 2
// let num = prompt('Enter a number');
// function factorialize(num) {
//     var result = 1;
//     for (var i=1; i<=num; i++) {

//         //result = result * i;
//         result *= i;
//     }
//     return result;
// }

// alert(factorialize(num));



// function factorialize(num) {
//     var result = 1;
//     for (var i=1; i<=num; i++) {

//         //result = result * i;
//         result *= i;
//     }
//     return result;
// }

// console.log(factorialize(5));




// challenge 1
// function reverseString(str) {
//     var final = "";
//     for (var i = str.length - 1; i>=0; i--) {
//         final += str[i];
//     }
//     return final;
// }

// console.log(reverseString("samuel"));




// function reverseString(str) {

//     return str.split("").reverse().join("");
// }

// console.log(reverseString("samuel"));




// function reverseString(str) {
//     var strArr = str.split("");
//     var reverseStrArr = strArr.reverse();
//     var reversedStrArr = reverseStrArr.join("");

//     console.log(reversedStrArr);
// }

// console.log(reverseString("samuel"));




// function reverseString(str) {
//     var strArr = str.split("");
//     var reverseStringArr = strArr.reverse();
//     var reversedString = reverseStringArr.join("");
//     return reversedString;

//     console.log(reverseStringArr);
// }

// console.log(reverseString("hello"));




// function reverseString(str) {
//     var strArr = str.split("");
//     var reverseStringArr = strArr.reverse();
    
//     console.log(reverseStringArr);
// }

// console.log(reverseString("hello"));




// function reverseString(str) {
//     var strArr = str.split("");
//     return strArr;
// }

// console.log(reverseString("hello"));




// var fruits = ["mango", "banana", "apple", "cherry"];

// for (var i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }




// var name = prompt("name");
// var age = prompt("age");
// var highSchool = true;

// if (age >= 18 && highSchool === true) {
//     alert("You are qualified to apply for this position")
// } else {
//     alert("You are not qualified to apply for this position")
// }


// let samples = [20, 21, 22];
// let choices = prompt('Enter a value A, B, C');

// if (choices.toUpperCase() === 'A') {
//     alert(`Your choice is ${samples[0]}`);
// } else if (choices.toUpperCase() === 'B') {
//     alert(`Your choice is ${samples[1]}`);
// } else if (choices.toUpperCase() === 'C') {
//     alert(`Your choice is ${samples[2]}`)
// } else {
//     alert(`Your choice is not valid`)
// }


// var  num = prompt("Enter a number!");

// if (num > 0) {
//     alert("The number is positive.")
// } else if (num < 0) {
//     alert("The number is negative.")
// } else {
//     alert("The number is zero")
// }

// console.log(num);