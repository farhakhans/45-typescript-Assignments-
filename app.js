// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
//change guest list who not present
// guest list
var guest_list = ['farha', 'fouzia', 'laiba', 'areeba'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam . ' + guest_list[i] + ',\n Now invited you on dinner tomorow.\nthank you\n\n\ ');
}
var not_present = 'fouzia';
var new_guest = 'talat';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n Now invited you on dinner tomorow. \nthank you\n\n\ ');
}
console.log("mis ".concat(not_present, " will not coming tomorow at dinner party"));
