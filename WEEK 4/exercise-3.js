function cariMedian(arr) {
    var median = arr;
    var arrLength = median.length;
    var med = Math.round(arrLength / 2);
    var result = 0;
    if (arrLength % 2 !== 0) {
        result = result + median[med - 1];
    } else if (arrLength % 2 === 0) {
        result = result + ((median[med] + median[med - 1]) / 2)
    }
    return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5