// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.



function show_magicians(magicians: string[]): void {
    magicians.forEach((magicians , index) => {
        console.log(`${index +1}. ${magicians}`);
    });
}
console.log("These are Pakistani Magicions!");
const pakistaniMagicians: string[] = ["Ejaz Mughal", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani"];

show_magicians(pakistaniMagicians);
