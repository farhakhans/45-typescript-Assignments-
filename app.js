// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show 
//  that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the Magician class
var Magician = /** @class */ (function () {
    function Magician(name) {
        this.name = name;
    }
    Magician.prototype.makeGreat = function () {
        this.name = "Great ".concat(this.name);
    };
    return Magician;
}());
// Function to make a copy of the array of magicians' names
function makeCopyOfMagicians(originalNames) {
    var magicians = [];
    for (var _i = 0, originalNames_1 = originalNames; _i < originalNames_1.length; _i++) {
        var name_1 = originalNames_1[_i];
        magicians.push(new Magician(name_1));
    }
    return magicians;
}
// Function to call makeGreat() on each magician in the array
function makeGreat(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        magician.makeGreat();
    }
}
// Function to show magicians' names
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
// Original array of magicians' names
var originalNames = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];
// Make a copy of the original array
var magiciansCopy = makeCopyOfMagicians(originalNames);
// Call makeGreat() with the copy of the array
makeGreat(magiciansCopy);
// Show original array of names
console.log("Original Magicians:");
showMagicians(magiciansCopy);
// Show array with "Great" added to each magician's name
console.log("\ncopy Great Magicians:");
showMagicians(magiciansCopy);
