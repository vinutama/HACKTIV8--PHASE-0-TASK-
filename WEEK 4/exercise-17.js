function totalDigitRekursif(angka) {
    var digitAwal = String(angka)[0];
    // console.log(digitAwal);
    var digitAkhir = String(angka).slice(1);
    // console.log(digitAkhir);
    if (digitAkhir.length === 0) {
        return angka;
    } else {
        return digitAwal + totalDigitRekursif(digitAkhir);
    }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5