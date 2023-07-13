// let testCase1 = [
//     {
//         name: "Leo Messi",
//         dob: "31-12-1995",
//         biology: 95,
//         chemistry: 91,
//     },
//     {
//         name: "Cristiano Ronaldo",
//         dob: "31-05-1992",
//         biology: 90,
//         chemistry: 81,
//     },
//     {
//         name: "Virat Kohli",
//         dob: "31-12-1995",
//         biology: 95,
//         chemistry: 96,
//     },
//     {
//         name: "Rohit Sharma",
//         dob: "31-12-1995",
//         biology: 85,
//         chemistry: 86,
//     },
//     {
//         name: "Viswanathan Anand",
//         dob: "12-12-1994",
//         biology: 99,
//         chemistry: 10,
//     },
// ];

// // ans = [virat, leo, cristiano, rohit, viswanath anand]

// let testCase2 = [
//     {
//         name: "Leo Messi",
//         dob: "31-12-1995",
//         biology: 100,
//         chemistry: 80,
//     },
//     {
//         name: "Cristiano Ronaldo",
//         dob: "31-05-1992",
//         biology: 80,
//         chemistry: 100,
//     },
//     {
//         name: "Virat Kohli",
//         dob: "31-12-1995",
//         biology: 30,
//         chemistry: 40,
//     },
//     {
//         name: "Rohit Sharma",
//         dob: "31-12-1995",
//         biology: 40,
//         chemistry: 30,
//     },
//     {
//         name: "Viswanathan Anand",
//         dob: "12-12-1994",
//         biology: 99,
//         chemistry: 10,
//     },
// ];

// // ans = [leo, cristiano, viswanath, rohit, virat]

// function makeAdjectifier(adjective) {
//     return function (string) {
//         return string + " " + adjective
//     }
// }

// let cooler = makeAdjectifier('cool')
// console.log(cooler("conference"))


// let dev = "unncoomon"
// function a(b) {
//     'use strict'
//     return function (A) {
//         console.log(dev)
//     }
// }

// //dev = "vAS"
// a()()


// const person = {
//     firstName: "Gongidi",
//     lastName: 'Jagadeesh',
//     get fullName() {
//         return this.firstName + " " + this.lastName
//     },


//     set fullName(value) {
//         const values = value.split(' ');
//         this.firstName = values[0];
//         this.lastName = values[1];
//     },
// }
// console.log(person.fullName)

// person.fullName = "Honey Wiae"
// console.log(person.fullName)


// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log(radius)
//         }
//     };
// };

// const newCircle = createCircle(34)
// console.log(newCircle)

// newCircle.draw();

// const newCircle2 = createCircle(23);
// console.log(newCircle2)
// newCircle2.draw();


// let x = { value: 20 };
// let y = x;
// console.log(`x:${x.value}\ny:${y.value}`);
// x.value = 40;
// console.log(`x:${x.value}\ny:${y.value}`);

// let number = 10;
// function increment(number) {
//     number++;
// }
// increment(number);
// console.log(number)


// let obj = { value: 10 };
// function increment(obj) {
//     obj.value++;
// }
// increment(obj);
// console.log(obj.value)

// let num = 10;

// function changeColor() {
//     for (let num = 0; num <= 5; num++) {
//         console.log(num)//1....5
//         if (num == 2) {
//             let color = 'red'
//         }
//     }
//     console.log(num) //10 from global scope.
//     console.log(color) //undefined  because it's  defined in if block scope
// }


// changeColor();

// const person = {
//     name: "jaggu",
//     sayHi() {
//         console.log(this.name)
//     }
// }

// const circle = {
//     radius: 1,
//     draw() {
//         console.log(this.radius)
//     }
// }

// const circle2 = Object.assign({}, circle, person)
// console.log(circle2)



// const movie = {
//     title: "Orange",
//     songs: ['Rooba Rooba', 'hello rammante', 'O Range'],
//     playSong() {
//         this.songs.forEach((song) => {
//             console.log(song, this.title)
//         })
//     }
// }; movie.playSong()



// const videos = {
//     title: 'a',
//     play() {
//         console.log(this.title)
//     }
// };

// videos.stop = function () {
//     console.log(this)
// }

// videos.stop()


// function playVideo() {
//     console.log(this)
// };
// playVideo();

// const movies = {
//     nowPlaying: "IronMan",
//     titles: ["Captain America", "ironMan", "BaTman", "SuperMan"],
//     play() {
//         console.log(this.title)
//     },
//     moviesList() {
//         this.titles.forEach((title) => {
//             console.log(`titles are ${title}   currently playing  ${this.nowPlaying}`)
//         });
//     },
// };

// movies.moviesList();


// function CreateMovieTitle(name) {
//     this.title = name;
//     this.play = function () {
//         console.log(this.title);
//         console.log(this)
//     };
// }



// const ironMan = new CreateMovieTitle('ironman');
// ironMan.play() //ironman

// const numbers = [1, 2, 3, 1, 9]
// // const objects = numbers.filter(num => num > 0).map(num => ({ value: num }));
// // console.log(objects)
// const total = numbers.reduce((total, num) => {
//     return total + num
// }, 0)

// console.log(total)


// const person = {
//     name: 'Jaggu',
//     walk() {
//         console.log(this.name)
//     },
//     talk() {
//         console.log(this)
//     }

// }

// person.talk();
// const walk = person.walk.bind(person)
// console.log(walk)
// walk();



// const person = new Person('jaggu')
// person.getName()

// function myConcat(separator) {
//     let result = ""; // initialize list
//     // iterate through arguments
//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }
//     return result;
// }

// myConcat()

// function myCat(separator) {
//     console.log(separator)
//     for (let each in arguments) {
//         console.log(each)
//     }
// }

// myCat("re", "er", "er")


// function Person(name1) {
//     console.log(name1)
//     this.name = name1;

//     this.getName = function () {
//         console.log(this.name);
//     };
// }


// Person.call({}, 'jaggu'); //jaggu
// Person.apply({}, ['jaggu', 'iron man']) //jaggu

// const person = new Person('jaggu');


// const person = new Person('jag');
// console.log(person)
// for (let key in person) { //this can be used on instances of an object 
//     if (typeof person[key] !== 'function')
//         console.log(key, person[key]) // name jag
// }
// console.log(person)


// let keyArr = Object.keys(person) //(2) ['name', 'getName']
// console.log(keyArr)


// if ('name' in person) {
//     console.log("yes");
// } else {
//     console.log('no')
// }

// for (let key of person) { //error:person not iterable
//     console.log(key)
// }


// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }
// person.getName()




// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 1, y: 2 }; // local no need to use this
//     this.getDefaultLocation = function () {
//         return defaultLocation
//     }
//     this.draw = function () {
//         console.log("draw");
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },

//         set: function (value) {
//             //we can perform calculations here
//             if (!value.x || !value.y)
//                 throw new Error('invalid location');
//             defaultLocation = value;
//         }
//     })

// };

// const circle = new Circle(8);
// console.log(circle.getDefaultLocation()) //{x: 1, y: 2}x: 1y: 2[[Prototype]]: Object

// console.log(circle.defaultLocation); //{x:1,y:2}
// circle.defaultLocation = 1;


function StopWatch() {
    let running = false;
    let startTime = null;
    let endTime = null;


    this.start = function () {
        if (!startTime && !running) {
            startTime = new Date();
            running = true;
        } else {
            throw new Error('timer is already running')
        }
    }
    function duration() {

    }
    this.stop = function () {
        if (startTime && running) {
            endTime = new Date();
            running = false;
        } else {
            throw new Error("timer is not running");
        }
    }
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
    };


    Object.defineProperty(this, 'duration', {
        get: function () {
            if (startTime && endTime) {
                let timeDifference = endTime.getTime() - startTime.getTime();
                timeDifference = timeDifference / 1000;
                console.log(timeDifference + " " + "seconds")
            } else {
                if (startTime) {
                    console.log("timer not stopped");
                } else {
                    console.log("timer not started");
                }
            }
        }
    })
}

const sw = new StopWatch();

function do_something() {
    console.log(bar);
    var bar = 111;
    console.log(bar);
}

console.log(square)
console.log(square(5))
const square = function (n) {
    return n * n;
}