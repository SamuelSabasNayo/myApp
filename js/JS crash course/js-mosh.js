// Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate object
// const person1 = new Person('John', 'Doe','4-3-1980');
// const person2 = new Person('Mary', 'Smith','3-6-1990');

// console.log(person2.getFullName());
// console.log(person1);



//Constructor function
// function Person(firstName, lastName,dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     }

//     Person.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }

//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`; 
//     }

// // Instantiate object
// const person1 = new Person('samuel', 'sabas', '09-10-1900');
// const person2 = new Person('bobo', 'salsa', '10-02-1990');

// console.log(person2.getBirthYear());
// console.log(person1);


// function Person(firstName, lastName,dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// // Instantiate object
// const person1 = new Person('samuel', 'sabas', '09-10-1900');
// const person2 = new Person('bobo', 'salsa', '10-02-1990');

// console.log(person2.getBirthYear());
// console.log(person2.getFullName());


// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// // Instantiate object
// const person1 = new Person('samuel', 'sabas', '09-10-1900');
// const person2 = new Person('bobo', 'salsa', '10-02-1990');

// console.log(person2.dob.getFullYear);
// console.log(person2.dob);
// console.log(person2.firstName);
// console.log(person1);


// ---------------------- From a JS book ----------------------------------------
// Arrow function
// const base = prompt('Enter a base number');
// const exponent = prompt('Enter an exponent number');
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// alert(power(base, exponent));



// const horn = () => {
//     alert('Booooom!!!!!!!!!!');
// }

// horn();
// -------------------------------------------------------------------------------


// const addNums = num1 => num1 + 5;

// console.log(addNums(4));


// const addNums = (num1, num2) => num1 + num2;

// console.log(addNums(3, 9));


// const addNums = (num1, num2) => 
// console.log(num1 + num2);

// addNums(4, 7);


// function addNums(num1 = 1, num2 = 2) {
//     return num1 + num2;
// } 

// console.log(addNums(5, 5));
// addNums();


// function addNums(num1, num2) {
//     console.log(num1 + num2);
// } 

// addNums(5, 4);


// const x = 10;
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// console.log(color);


// const x = 6;
// const y =11;

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 and y is more than 10');
// }


// const x = 4;
// const y =11;

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }


// const x = 0;

// if(x == 10) {
//     console.log('x is 10');
// } else if(x > 10) {
//     console.log('x is greater than 10')
// }
// else {
//     console.log('x is less than 10')
// }


// const x = 10;

// if(x ===10) {
//     console.log('x is 10');
// }


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

// // forEach, map, filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// for(let todo of todos) {
//     console.log(todo);
// }
// for(let i = 0; i< todos.length; i++) {
//     console.log(todos[i].text);
// }




// While
// let i = 0;
// while(i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }


// For
// for (i=0; i<5; i++) {
//     for (j=5; j>i; j--) {
//         console.log(j);
//     }
// }
// For
// for(let i = 0; i <= 10; i++) {
//     console.log(`For loop number: ${i}`)
// }


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(todos);


// const person = {
//     firstName: 'samuel',
//     lastName: 'sabas',
//     age: 30,
//     hobbies: ['music', 'cars', 'sports'],
//     address: {
//         village: 'Kalisimbi',
//         cell: 'Kabuga I',
//         sector: 'Rusororo',
//         district: 'Gasabo',
//         city: 'Kigali'
//     }
// }

// person.email = 'samuel.sabas@gmail.com';
// console.log(person);
// const {firstName, lastName, address: {district}} = person;
// console.log(district);
// console.log(firstName);
// console.log(person.address.city);
// console.log(person.hobbies[1]);
// console.log(person.firstName, person.lastName);
// console.log(person.firstName);
// console.log(person);
// console.log(person);


// const numbers = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers);


// const s = 'technology, machine, IT, Code';

// console.log(s.split(','));


// const s = 'Hello world';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''));

// const name = 'John';
// const age = 30;

// Concatenation
// console.log('My name is ' +name+ ' and I am ' + age);

// Template String
// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);


// Arrays

// const fruits = ['apples', 'oranges', 'pears', 10, true];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// const numbers = new Array(1,2,34,5,67,89);

// console.log(numbers);

//String, Numbers, Boolean, null, undefined
// const age = 30;

// console.log(typeof age)


// const age = 25;
// age = 31;

// console.log(age);
