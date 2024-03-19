// 1st test Tests for equality and inequality with strings
// string test 
var car = "civic";
var age = 25;
var number = [1, 2, 3, 4];
// string test 
//test no 1 equility  (true)
console.log("Is car == 'civic'? I predict True.");
console.log(car == 'civic'); //true  (case insenseive)
// tset no 2  equility  (false)
console.log("Is car === 'civic'? I predict false.");
console.log(car === 'civic'); // false (case sensetive)
//test no 3 equility (true)
console.log("Is car != 'civic'? I predict true.");
console.log(car != 'civic');
//test no 4  equility (false)
console.log("Is car !== 'civic'? I predict false.");
console.log(car !== 'civic'); //false (case-sensetive)
// LOWER FUNCTION TEST
// TEST 5 LOWER CONVERSION (TRUE)
console.log("Is car.tolowerCase() == 'civic'? I predict true.");
console.log(car.toLocaleLowerCase() == 'civic'); // true (converted to lowercase)
// test 6 lower case conversion (false)
console.log("Is car.tolowerCase() === 'civic'? I predict false.");
console.log(car.toLocaleLowerCase() === 'civic');
//  test 7 numrical test 
// test equility (true)
console.log("Is age ==  25? I predict true.");
console.log(age == 25); // true
// test 8 inequility (false)
console.log("Is age !=25? I predict true.");
console.log(age != 25); // true
// test 9 greator then (false)
console.log("Is age >30? I predict false.");
console.log(age > 30);
// test 10 less then or equal (true)
console.log("Is age <=25? I predict true.");
console.log(age <= 25); //true
// LoGICAL OPERATORS
// TEST 11  AND (TRUE)
console.log("Is age >20 && age <30? I predict true.");
console.log(age > 20 && age < 30);
// test 12 OR (FALSE)
console.log("Is age >30 || age <18? I predict false.");
console.log(age > 30 || age < 18);
// test 13 IN ARRY (TRUE)
console.log("Is in 3 number? i predict true.");
console.log(3 in number); // true (check for index existence)
// test 14 not in ARRY (FALSE)
console.log("Is in 5 number? i predict true.");
console.log(5 in number);
