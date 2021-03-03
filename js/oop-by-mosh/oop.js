//Exercise
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch ha already started.');
        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTIme = new Date();

        const  seconds = (endTIme.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this,'duration', {
        get: function() {return duration;}
    });
}


//Abstraction
//Getters/ Setters
// function Circle(radius) {
//         this.radius = radius;
    
//         let defaultLocation = {x: 0, y: 0};
    
//         this.getDefaultLocation = function() {
//             return defaultLocation;
//         };
    
//         this.draw = function() {
//             console.log('draw');
//         };
    
//         Object.defineProperty (this, 'defaultLocation', {
//             get: function() {
//                 return defaultLocation;
//             },
//             set: function(value) {
//                 if (!value.x || value.y)
//                 throw new Error('Invalid location.');

//                 defaultLocation = value;
//             }
//         });
//     }
    
//     const circle = new Circle(10);
//     circle.defaultLocation = 1;
//     circle.draw();


// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         console.log('draw');
//     };

//     Object.defineProperty (this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.defaultLocation;
// circle.draw();


// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.getDefaultLocation();
// circle.draw();

//Private Properties and Methods 
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {x: 0, y: 0};

//     let computeOptimumLocation = function(Factory) {
//         //...
//     }

//     this.draw = function() {
//         this.computeOptimumLocation(0.1);

//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.
// circle.draw();

//Hide details & Show essentials
// function Circle(radius) {
//     this.radius = radius;

//     this.defaultLocation = {x: 0, y: 0};

//     this.computeOptimumLocation = function() {
//         //...
//     }

//     this.draw = function() {
//         this.computeOptimumLocation();

//         console.log('draw');
//     };
// }

// const circle =new Circle(10);
// circle.computeOptimumLocation();
// circle.draw();



//Enumerating Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// //To enumerate the properties
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// //To get all the keys
// const keys = Object.keys(circle);
// console.log(keys);

// //To check the existence of a property
// if ('radius'  in circle)
//     console.log('Circle has a radius.');


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     console.log(key, circle[key]);
// }


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     console.log(key);
// }


//Adding/Removing Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// circle.location = {x: 1};

// // delete circle.location;
// delete circle['location'];


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// circle.location = {x: 1};
// const propertyName = 'center location';
// //circle.center-location  -------->does not work
// circle[propertyName] = {x: 1};


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// // circle.location = {x: 1};
// circle['location'] = {x: 1};


// (Primitives) Value Types && Reference Types
// let obj = { value: 10 };

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);


// let number = { value: 10 };

// function increase(number) {
//     number++;
// }

// increase(number);
// console.log(number);


//Objects
// let x = {value: 10};
// let y = x;

// x.value = 20;

//Primitives
// let x = 10;
// let y = x;

// x = 20;
// Functions are Object
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// Circle.call({}, 1, 2, 3, 4);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
// tis.draw = function() {
//     console.log('draw);
// }
// `);

// const circle = new Circle1(1)

// const another = new Circle(1);


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);


// Constructor Property

// Constructor Function
// function Circle(radius) {
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();


// Object Literal
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();