
function groupAnimals(animals) {
    var newArr = [];
    for (var i = 0; i < animals.length; i++) {
        var animalA = [];
        var animalC = [];
        var animalK = [];
        var animalU = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] === 'u') {
                animalU.push(animals[j]);
            } else if (animals[j][0] === 'a') {
                animalA.push(animals[j]);
            } else if (animals[j][0] === 'c') {
                animalC.push(animals[j]);
            } else if (animals[j][0] === 'k' || animals[j][0] === 'u') {
                animalK.push(animals[j]);
            }
        }
    }
    newArr.push(animalA);
    newArr.push(animalC);
    newArr.push(animalK);
    newArr.push(animalU);
    return newArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]