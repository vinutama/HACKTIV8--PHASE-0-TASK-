
function hitungHuruf(kata) {
    //membagi kalimat menjadi kata
    var array = kata.split(' ');
    var result = '';
    var banding = 0;
    for (var i = 0; i < array.length; i++) {
        //melooping kata
        console.log('I - ' + array[i])
        result = array[i];
        var alphabet = 0;
        for (var j = 0; j < array[i].length; j++) {
            //melooping huruf dari per kata
            //console.log('j- ' + array[i][j]);
            var arrAlphabet = result[j];
            console.log('J - ' + arrAlphabet)
            for (var k = 0; k < result.length; k++) {
                //console.log(result.length)
                //console.log('k - ' + array[i][k])
                console.log('K - ' + result[k])
                if (j !== k && arrAlphabet === result[k]) {
                    alphabet = alphabet + 1;
                    console.log(alphabet);
                }
            }

            if (alphabet > banding) {
                banding = alphabet;
                array = result;
            }
        }
    } if (banding > 0) {
        return array;
    } else {
        return -1;
    }

}


// TEST CASES
//console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
//console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//console.log(hitungHuruf('mengayuh perahu di danau')); // danau