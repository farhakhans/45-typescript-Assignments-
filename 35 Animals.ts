// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. •
//   Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!


// List of animals with a common characteristic
const animals: string[] = ["dog", "cat", "rabbit", 'cow'];


// Print out the name of each animal using a for loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}


// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

