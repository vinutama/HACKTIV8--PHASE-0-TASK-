

function konversiMenit (menit) {
    var jam = Math.floor(menit/60);
    var menitSisa = menit % 60;
    if (menitSisa < 10) {
        result = jam + ':0' + menitSisa;
    }
        else {
            result = jam + ':' + menitSisa;
        }
    return result;
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120));