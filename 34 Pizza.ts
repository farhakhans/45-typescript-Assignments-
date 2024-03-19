// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// Array of favorite pizzas
let favoritePizzas: string[] = [" pepperoni ", "BBQ Chicken", "Spicy Beef", 'Margherita'];

// Printing the names of each pizza
console.log("Names of favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing a sentence using the name of each pizza
console.log("\nSentences about favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about how much I like pizza
console.log("\nI really love pizza!");
