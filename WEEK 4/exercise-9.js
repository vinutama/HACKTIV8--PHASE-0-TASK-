function tukarBesarKecil(kalimat) {
    //1. membuat variabel kalimat menjadi huruf besar
    var upper = kalimat.toUpperCase();
    var lower = kalimat.toLowerCase();
    var result = '';
    //console.log(upper.length)
    //console.log(lower)
    //2. looping parameter kalimat
    for (var i = 0; i < kalimat.length; i++) {
        //console.log(kalimat[i])
        //3. looping variabel upper.
        //console.log(upper[j])
        if (kalimat[i] === upper[i]) {
            result = result + lower[i];
        } else if (kalimat[i] === lower[i]) {
            result = result + upper[i];
        }
    }

    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"