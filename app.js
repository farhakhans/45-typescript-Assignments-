// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Array of favorite pizzas
var favoritePizzas = [" pepperoni ", "BBQ Chicken", "Spicy Beef", 'Margherita'];
// Printing the names of each pizza
console.log("Names of favorite pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Printing a sentence using the name of each pizza
console.log("\nSentences about favorite pizzas:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional sentence about how much I like pizza
console.log("\nI really love pizza!");
