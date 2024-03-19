// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title,
//   and it should return a Object containing these two pieces of information. 
//   Use the function to make three dictionaries representing different albums. 
//   Print each return value to show that Objects are storing the album information correctly. 
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//    Make at least one new function call that includes the number of tracks on an album.





interface Album{
    artist: string;
    title: string;
    tracks?: number;
}

function make_Album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three albums without specifying the number of tracks
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three albums without specifying the number of tracks
let album1: Album = make_album("Ali Zafar", "Teefa in Trouble");
let album2: Album = make_album("Atif Aslam", "Bol");
let album3: Album = make_album("Abida Parveen", "Raqs-e-Bismil");

console.log(album1);
console.log(album2);
console.log(album3);

// Creating an album with the number of tracks specified
let album4: Album = make_album("Nusrat Fateh Ali Khan", "Devotional and Love Songs", 10);
console.log(album4);

