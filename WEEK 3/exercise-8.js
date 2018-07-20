
function pasanganTerbesar(num) {
    var numString = String(num);
    var numLength = numString.length
    var pembanding = 0;
    for (var i = 0; i < numLength; i++) {
        result = Number(numString[i] + numString[i + 1]);
        if (result > pembanding) {
            pembanding = result;
        }
    }
    return pembanding;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99