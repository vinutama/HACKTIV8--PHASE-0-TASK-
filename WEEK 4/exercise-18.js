
function kaliTerusRekursif(angka) {
    var length = String(angka).length;
    var resultAngka = String(angka);
    //console.log(length)
    if (length === 1) {
        return resultAngka;
    } else {
        var result = 1;
        for (var i = 0; i < length; i++) {
            result = result * resultAngka[i];
        }
    } return kaliTerusRekursif(result)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6