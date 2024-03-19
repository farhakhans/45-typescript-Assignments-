// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array,
//  and print a greeting to each user:

// test 30 
const usernames: string[] = ['admin', 'FARHANA', 'LAIBA', 'AREEBA', 'SHAMA', 'Eric'];
for (const username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        if (username.toLowerCase() === 'eric') {
            console.log(`Hello ${username}, thank you for logging in again.`);
        } else {
            console.log(`Hello ${username}, Welcome back to the website !`);
        }
    }
}


