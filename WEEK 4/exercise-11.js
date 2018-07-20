
function changeMe(arr) {
    var result = {

    };


    for (var i = 0; i < arr.length; i++) {
        console.log(((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1]))
        result.firstName = arr[i][0];
        result.lastName = arr[i][1];
        result.gender = arr[i][2];
        result.age = 2018 - arr[i][3];


        if (isNaN(result.age) === true) {
            result.age = 'Invalid Birth Year';
        }
        console.log(result)
    }

}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); //
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""