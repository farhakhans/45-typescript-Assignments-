// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show 
//  that you have one array of the original names and one array with the Great added to each magician’s name.

// Define the Magician class
class Magician {
    constructor(public name: string) { }

    makeGreat(): void {
        this.name = `Great ${this.name}`;
    }
}

// Function to make a copy of the array of magicians' names
function makeCopyOfMagicians(originalNames: string[]): Magician[] {
    const magicians: Magician[] = [];
    for (const name of originalNames) {
        magicians.push(new Magician(name));
    }
    return magicians;
}

// Function to call makeGreat() on each magician in the array
function makeGreat(magicians: Magician[]): void {
    for (const magician of magicians) {
        magician.makeGreat();
    }
}

// Function to show magicians' names
function showMagicians(magicians: Magician[]): void {
    for (const magician of magicians) {
        console.log(magician.name);
    }
}

// Original array of magicians' names
const originalNames: string[] = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

// Make a copy of the original array
const magiciansCopy: Magician[] = makeCopyOfMagicians(originalNames);

// Call makeGreat() with the copy of the array
makeGreat(magiciansCopy);

// Show original array of names
console.log("Original Magicians:");
showMagicians(magiciansCopy);

// Show array with "Great" added to each magician's name
console.log("\ncopy Great Magicians:");
showMagicians(magiciansCopy);
