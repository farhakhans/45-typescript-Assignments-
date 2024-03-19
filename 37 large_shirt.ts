// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

function makeShirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size.toUpperCase()} and the message on it says: '${message}'.`);
}

// Making a large shirt with default message
makeShirt();

// Making a medium shirt with default message
makeShirt("medium");

// Making a shirt of any size with a different message
makeShirt("small", "Good Looking!");
