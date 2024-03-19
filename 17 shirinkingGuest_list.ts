// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.



var guest_list = ['farha', 'fouzia', 'laiba', 'areeba'];
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam . ' + guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you!\n\n\ ');
// }
var not_present = 'fouzia';
var new_guest = 'talat';
guest_list[1] = new_guest;
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nnow invited you on dinner tomorow. \n\nthank you!\n\n\ ');
// }
console.log("miss. ".concat(not_present, " will not coming tomorow at dinner party"));

// arry me 3 guest add kiye han.
console.log('Good News! we find big table so we are inviting more 3 guest.');
guest_list.unshift('Asma');
guest_list.splice(2, 0, 'Reahana');
guest_list.push('yasmeen');

// yahan per 7 guest ko print karaya ha.
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nnow invited you on dinner tomorow. \n\nthank you!\n\n\ ');
}

// sorry guest not inited
console.log('\nsorry we can not arrange big table, only two persons will be invited ');

//  yahan hum ne guest remove kiye han.
while(guest_list.length > 2){
    let remove_guest= guest_list.pop();
    console.log(`sorry miss,${remove_guest},  you are not invited for dinner ` );

}
// hamare jo 2 baqi guest bache han .

for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nyou are still in ivited. \n\nthank you!\n\n\ ');
}

// me ne sare guest arry sec remove kr diye or 2 guest invited han
guest_list.splice(0,2);
console.log(guest_list);