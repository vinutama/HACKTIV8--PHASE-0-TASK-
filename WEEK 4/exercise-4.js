
function cariModus(arr) {
    var modus = arr;
    var mod = 0;
    var frek = 0;
    var frekTerbesar = 0;
    //console.log(modus.length)
    for (var i = 0; i < modus.length; i++) {
        var result = '';
        for (var j = 0; j < modus.length; j++) {
            if (modus[i] === modus[j] && i !== j) {
                frek = frek + 1;
            } if (frek > frekTerbesar) {
                frekTerbesar = frek;
                mod = i;
            }
        }
    }
    if (mod === 0) {
        return -1;
    }

    var arrSama = 0;
    for (var k = 0; k < modus.length; k++) {
        arrSama = arrSama + modus[k];
        if (arrSama / modus.length === modus[k]) {
            return -1;
        }
    }
    return modus[mod];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1