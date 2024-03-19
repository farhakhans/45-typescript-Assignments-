// List of current users
let current_Users: string[] = ['farhana', 'laiba', 'areeba', 'shama', 'uzma'];

// List of new users
let new_Users: string[] = ['areeba', 'farzana', 'samina', 'uzma', 'komal'];

// Convert currentUsers list to lowercase for case insensitive comparison
let current_UsersLower: string[] = current_Users.map(user => user.toLowerCase());

// Loop through newUsers list
for (let new_User of new_Users) {
    // Check if new username is already used (case insensitive)
    if (current_UsersLower.includes(new_User.toLowerCase())) {
        console.log(`Sorry, the username '${new_User}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_User}' is available.`);
    }
}
