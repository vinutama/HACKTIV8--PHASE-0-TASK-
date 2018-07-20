
function balikKata(kata) {
    var pembalikan = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        pembalikan = pembalikan + kata[i];

    }
    return pembalikan;
}
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am Bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));