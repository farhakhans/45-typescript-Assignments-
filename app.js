// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// found bigger  table :
var guest_list = ['farha', 'fouzia', 'laiba', 'areeba'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam . ' + guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you!\n\n\ ');
}
var not_present = 'fouzia';
var new_guest = 'talat';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nnow invited you on dinner tomorow. \n\nthank you!\n\n\ ');
}
console.log("mis. ".concat(not_present, " will not coming tomorow at dinner party"));
console.log('Good News! we find big table so we are inviting more 3 guest.');
guest_list.unshift('Asma');
guest_list.splice(2, 0, 'Reahana');
guest_list.push('yasmeen');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nnow invited you on dinner tomorow. \n\nthank you!\n\n\ ');
}
