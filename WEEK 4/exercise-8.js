function urutkanAbjad(str) {
    //1. membuat variabel abjad a - z untuk memberikan output huruf yang pertama keluar
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //2. membuat variabel string kosong untuk menampung hasil.
    var result = '';
    //3. looping var alphabet
    for (var i = 0; i < alphabet.length; i++) {
        //4. looping parameter string.
        for (var j = 0; j < str.length; j++) {
            //console.log(str[j])
            //5. membuat kondisi jika hasil looping alphabet sama dengan huruf pada string
            if (alphabet[i] === str[j]) {
                result = result + alphabet[i];
            }
        }
    } return result;

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'