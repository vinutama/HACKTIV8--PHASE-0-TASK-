function palindrome(kata) {
    var reversed = kata.split('').reverse().join('');
    if (reversed === kata) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister')); 