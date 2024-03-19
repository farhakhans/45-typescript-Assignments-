//set a value for the variable age, and then:
var age = 25;
// If the person is less than 2 years old, print a message that the person is a baby
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
if (age < 2) {
    console.log(" person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log(" person is an adult.");
}
else {
    console.log("person is an elder.");
}
// test 31  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Declare an empty array of strings for users
var users = [];
// Check if the array is empty
if (users.length === 0) {
    console.log("We need to find some users!"); // Print message if array is empty
}
else {
    // Iterate through the array and remove all usernames
    users.forEach(function (user) {
        console.log("Removing user: " + user); // Log the removal of each user
    });
    users = []; // Empty the array after removing all usernames
    console.log("All users have been removed."); // Print confirmation message
}
