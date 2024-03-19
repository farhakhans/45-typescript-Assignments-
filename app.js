// List of current users
var current_Users = ['farhana', 'laiba', 'areeba', 'shama', 'uzma'];
// List of new users
var new_Users = ['areeba', 'farzana', 'samina', 'uzma', 'komal'];
// Convert currentUsers list to lowercase for case insensitive comparison
var current_UsersLower = current_Users.map(function (user) { return user.toLowerCase(); });
// Loop through newUsers list
for (var _i = 0, new_Users_1 = new_Users; _i < new_Users_1.length; _i++) {
    var new_User = new_Users_1[_i];
    // Check if new username is already used (case insensitive)
    if (current_UsersLower.includes(new_User.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_User, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_User, "' is available."));
    }
}
