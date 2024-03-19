//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//  If the alien is yellow, print a message that the player earned 10 points.
var alienColor = "GREEN";
// If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
if (alienColor === "GREEN") {
    console.log("the player just earned 5 points .");
}
else if (alienColor === "yellow") {
    console.log("the player just earned 10 points  .");
}
else if (alienColor === "red") {
    console.log("the player just earned 15 points .");
}
else {
    console.log("please select right color");
}
//version 2 the programe
if (alienColor === "yellow") {
    console.log("the player just earned 5 points .");
}
else if (alienColor === "GREEN") {
    console.log("the player just earned 10 points .");
}
else if (alienColor === "yellow") {
    console.log("the player just earned 15 points .");
}
else if (alienColor === "red") {
    console.log("the player just earned 15 points .");
}
else {
    console.log("please select right color");
}
//version 3 to program
if (alienColor === "red") {
    console.log("the player just earned 5 points .");
}
else if (alienColor === "GREEN") {
    console.log("the player just earned 10 points .");
}
else if (alienColor === "yellow") {
    console.log("the player just earned 15 points .");
}
else if (alienColor === "red") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("please select right color");
}
