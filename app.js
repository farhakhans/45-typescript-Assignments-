// test Conditional Tests: Write a series of conditional tests. 
var car = "Civic";
//test no 1 equility compresion 1st test (true)
console.log("Is car == 'Civic'? I predict True.");
console.log(car == 'Civic'); //true   
// tset no 2 strict  equility compresion 2nd test (true)
console.log("Is car === 'Civic'? I predict true.");
console.log(car === 'Civic'); //true
//test no 3 inequility comperison 3rd test (false)
console.log("Is car != 'Civic'? I predict false.");
console.log(car != 'Civic'); //false
//test no 4 strict inequility comperison (false)
console.log("Is car !== 'Civic'? I predict false.");
console.log(car !== 'Civic'); //false
//test no 5 less then comperison 5th test (false)
console.log("Is car < 'Civic'? I predict false.");
console.log(car < 'Civic'); //false lexicography compresion
//test no 6 greator then comperison 6th test (false)
console.log("Is car >'Civic'? I predict false.");
console.log(car > 'Civic'); //false lexicography compresion
// test no 7 less then or Equal comparesion (true)
console.log("Is car <= 'Civic'? I predict True.");
console.log(car <= 'Civic');
// test no 8 greator then or Equal comparesion (true)
console.log("Is car >= 'Civic'? I predict True.");
console.log(car >= 'Civic');
(true);
// test no 9 checking truthiness (true)
console.log("Is car ?'Civic'? I predict True.");
console.log(car); //true (non-empty string is truth)
// test no 10 checking falsiness (false)
console.log("Is car ?'Civic'? I predict false.");
console.log(car);
