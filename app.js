// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magicians, index) {
        console.log("".concat(index + 1, ". ").concat(magicians));
    });
}
console.log("These are Pakistani Magicions!");
var pakistaniMagicians = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];
show_magicians(pakistaniMagicians);
