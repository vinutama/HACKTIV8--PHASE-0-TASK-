// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan 
//passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini
// untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function 
//changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf
// vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string
// yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
// diletakkan di passwordGenerator dan return password-nya dari function ini juga




function changeVocals(str) {
    var hurufVocal = 'aiueoAIUEO';
    var vocalMod = 'bjvfpBJVP';
    var vocalStr = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < hurufVocal.length; j++) {
            if (str[i] === hurufVocal[j]) {
                vocalStr = vocalStr + vocalMod[j];
            }
        } if (hurufVocal[j] !== str[i]) {
            vocalStr = vocalStr + str[i];
        }
    } return vocalStr;
}


function reverseWord(str) {
    var strReverse = '';
    for (var k = str.length - 1; k >= 0; k--) {
        strReverse = strReverse + str[k];
    } return strReverse;
}

function setLowerUpperCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    var newStr = '';
    for (var l = 0; l < str.length; l++) {
        if (str[l] === upperStr[l]) {
            newStr = newStr + lowerStr[l];
        } else if (str[l] === lowerStr[l]) {
            newStr = newStr + upperStr[l];
        }
    } return newStr;
}

function removeSpaces(str) {
    var spaceRemove = str.split(' ').join('')
    return spaceRemove;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        var vocalSort = changeVocals(name);
        console.log(vocalSort);
        var wordReverse = reverseWord(vocalSort);
        //console.log(wordReverse)
        var setCase = setLowerUpperCase(wordReverse);
        //console.log(setCase)
        var space = removeSpaces(setCase);
        //console.log(space)
        return space;
    }
}

//console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'