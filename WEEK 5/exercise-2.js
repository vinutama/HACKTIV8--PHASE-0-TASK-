function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var newArr = [];
    var hargaTiket = 2000;
    var count = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
        //console.log(arrPenumpang.length)
        var result = {};
        result.penumpang = arrPenumpang[i][0];
        result.naikDari = arrPenumpang[i][1];
        result.tujuan = arrPenumpang[i][2];
        newArr.push(result);
        var start = 0;
        var stop = 0;
        for (var j = 0; j < rute.length; j++) {

            if (result.naikDari === rute[j]) {
                console.log(rute[j]);
                start = j;
                console.log(start);
            }
            else if (result.tujuan === rute[j]) {
                console.log(rute[j]);
                stop = j;
                console.log(stop)

            }

        } result.bayar = hargaTiket * (stop - start);

    }
    return newArr;

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]