// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase


let personName: string = "farhana";

// Convert to lowercase
console.log("Lowercase:", personName.toLowerCase());

// Convert to uppercase
console.log("Uppercase:", personName.toUpperCase());

// Convert to titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));

