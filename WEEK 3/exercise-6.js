
function angkaPalindrome(num) {
    for (var i = 0; i < num; i++) {
        num = num + 1;
        var numString = String(num);
        var numLength = numString.length;
        var result = '';
        for (var j = numLength - 1; j >= 0; j--) {
            result = result + numString[j];
        } if (numString === result) {
            return num;
        }
    }
}



//console.log(angkaPalindrome(8)); // 9
//console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001