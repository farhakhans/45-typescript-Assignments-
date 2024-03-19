// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, 
// “Hello Eric, would you like to learn some Python today?”
var personName = "farhana";
// Convert to lowercase
console.log("Lowercase:", personName.toLowerCase());
// Convert to uppercase
console.log("Uppercase:", personName.toUpperCase());
// Convert to titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
