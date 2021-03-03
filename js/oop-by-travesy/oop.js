//Subclass
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// }

// //Magazine Subclass
// class Magazine extends Book {
//     constructor(title,author,year,month) {
//         super(title, author, year);
//         this.month = month;
//     }
// }

// //Instantiate Magazine
// const mag1 = new Magazine('Mag One', 'John Doe', '2018','Jan');

// console.log(mag1);
// console.log(mag1.getSummary());
// console.log(mag1.getAge());



//Class
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old.`;
//     }

//     revise(newYear) {
//         this.year = newYear;
//         this.revise = true;
//     }

//     static topBookStore() {
//         return 'Barnes & Noble';
//     }
// }
    
// // Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');
    
// console.log(Book.topBookStore());
// console.log(book1.getAge());


// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.autor} in ${this.year}`;
//     }

//     getAge(){
//         const years = new Date().getFullYear() - this.year;
//         return `{this.title} is ${years} years old.`;
//     }

//     revise(newYear) {
//         this.year = newYear;
//         this.revise = true;
//     }
// }
    
// //Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');
    
// console.log(book1);
// book1.revise('2018');
// console.log(book1);



// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
// }

// //Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');

// console.log(book1);

//Class


// -----------------------------------------------------------------------------
//Object of Protos
// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} was written by ${this.autor} in ${this.year}`;
//     },
//     getAge: function(){
//         const years = new Date().getFullYear() - this.year;
//         return `{this.title} is ${years} years old.`;
//     }
// };

// //Create Object
// const book1 = Object.create(bookProtos, {
//     title: {value: 'Book One'},
//     author: {value: 'John Doe'},
//     year: {value: '2013'}
// });

// console.log(book1.getAge());



// const bookProtos = {
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `{this.title} is ${years} years old.`;
//     }
// };

// //Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = 2013;

// console.log(book1);


// -------------------------------------------------------------------------
//Inheritance
//Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //Magazine Constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;
// }

// //Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// //Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// //Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);


//Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //Magazine Constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;
// }

// //Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// //Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// console.log(mag1.getSummary());


//Constructor
// function Book(title, author, year) {
//         this.title = title;
//         this.author= author;
//         this.year = year;
//     }
    
//     //getSummary
//     Book.prototype.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     };

//     //Magazine Constructor
//     function Magazine(title, author, year, month) {
//         Book.call(this, title, author, year);

//         this.month = month;
//     }

//     //Instantiate Magazine Object
//     const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

//     console.log(mag1);



// Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// };

// //Magazine Constructor
// function Magazine(title,  author, year) {
//     Book.call(this, title, author, year);
// }

// // Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', 2008);

// console.log(mag1);

// Inheritance


// ------------------------------------------------------------------------
//Prototypes
// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //getAge
// Book.prototype.getAge = function() {
//     const years = new  Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
// };

// //Revise / Change Year
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// };

// //Instatiate an Object
// const book1 = new Book('Renewable Energy Systems', 'Sam Sabas', '2017');
// const book2 = new Book('Improvement of the Efficiency of Compacting and Weighing Systems',
//     'Samuel Sabas', '2019');


// console.log(book2); 
// book2.revise('2018');
// console.log(book2); 


// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //getAge
// Book.prototype.getAge = function() {
//     const years = new  Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
// };

// //Instantiate an Object
// const book1 = new Book('Renewable Energy Systems', 'Sam Sabas', '2018');
// const book2 = new Book('Improvement of the Efficiency of Compacting and Weighing Systems',
//     'Samuel Sabas', '2019');


// console.log(book2.getAge()); 
// console.log(book2.getSummary);  

// const date = new Date().getFullYear();
// console.log(date);

// Prototypes


// -------------------------------------------------------------
// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;

//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     };
// }

// //Instantiate an Object
// const book1 = new Book('Renewable Energy Systems', 'Sam Sabas', '2018');
// const book2 = new Book('Improvement of the Efficiency of Compacting and Weighing Systems',
//     'Samuel Sabas', '2019');


// console.log(book2);   
// console.log(book2.getSummary());
// console.log(book1.getSummary());


// function Book(title, author, year) {
//     this.title = title;
//     this.author= author;
//     this.year = year;
// }

// //Instantiate an Object
// const book1 = new Book('Renewable Energy Systems', 'Sam Sabas', '2018');
// const book2 = new Book('Improvement of the Efficiency of Compacting and Weighing Systems',
//     'Samuel Sabas', '2019');

// console.log(book1);
// console.log(book1.title);


// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Instantiate an Object
// Book1 = new Book('Book1', 'John Doe', 1999);

// console.log(Book1);


// function Book() {
//     console.log('Book initialized...');
// }

// //Instantiate an Object
// const book1 = new Book();
// const book2 = new Book();

//Constructors


// -------------------------------------------------------------
// const book1 = {
//     title: 'Renewable Energy Systems',
//     author: 'Sam Sabas',
//     year: '2018',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// const book2 = {
//     title: 'Improvement of the Efficiency of Compacting and Weighing Systems',
//     author: 'Samuel Sabas',
//     year: '2019',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// console.log(Object.keys(book2));
// console.log(Object.values(book2));
// console.log(book2.getSummary());


// ----------- From a JS Book -----------------------------------
// Methods
// let rabbit = {};
// rabbit.speak = function(line) {
//     alert(`The rabbit says '${line}'`);
// };

// rabbit.speak("I'm alive.");
// -------------------------------------------------------------

// const book1 = {
//     title: 'Book One',
//     author: 'Sam Sabas',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// console.log(book1.getSummary());


// const book1 = {
//     title: 'Book One',
//     author: 'Sam Sabas',
//     year: '2013'
// };

// console.log(book1);
// console.log(book1.author);

// Object Literals



// console.log(navigator.appVersion);
// console.log(window);

// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// const s = 'Hello';
// console.log(s.toUpperCase());

// Basic Literals