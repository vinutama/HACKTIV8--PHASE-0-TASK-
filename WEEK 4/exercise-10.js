function checkAB(num) {
    //1. membuat variabel tampung hasil.
    var result = '';
    //2. looping kaata menjadi per huruf.
    for (var i = 0; i < num.length; i++) {
        //console.log(num[i])
        if (num[i] === 'b' && num[i + 4] === 'a' || num[i] === 'a' && num[i + 4] === 'b') {
            return true;
        }
    } return false;
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false