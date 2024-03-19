// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies 
// the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.




// function make_great(magicians: string[]): void {
//     magicians.forEach((magicians , index) => {
//         console.log(`${index +1}. ${magicians}`);
//     });
// }
// console.log("These are Pakistani Magicions!");
// const pakistaniMagicians: string[] = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

// make_great(pakistaniMagicians);


// Define an array of magicians
let magicians: string[] = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

// Function to modify the array of magicians by adding "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
  return magicians.map(magician => `the Great ${magician}`);
}

// Call makeGreat function to modify the magicians
magicians = makeGreat(magicians);

// Show the modified list of magicians
magicians.forEach(magician => console.log(magician));
