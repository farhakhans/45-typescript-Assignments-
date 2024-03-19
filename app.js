// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array,
//  and print a greeting to each user:
// test 30 
var usernames = ['admin', 'FARHANA', 'LAIBA', 'AREEBA', 'SHAMA', 'Eric'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username.toLowerCase() === 'admin') {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        if (username.toLowerCase() === 'eric') {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
        else {
            console.log("Hello ".concat(username, ", Welcome back to the website !"));
        }
    }
}
