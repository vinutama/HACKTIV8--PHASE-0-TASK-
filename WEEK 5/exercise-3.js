function highestScore(students) {
    //console.log(students.length)
    if (students.length === 0) {
        return {};
    } else {
        var className = ['foxes', 'wolves'];
        var classTamp = [];
        for (var i = 0; i < className.length; i++) {
            var tampClass = [];
            for (var j = 0; j < students.length; j++) {
                if (className[i] === students[j].class) {
                    tampClass.push(students[j])
                    //console.log(tampClass)
                }
            } classTamp.push(tampClass);
        } console.log(classTamp)
        //console.log(classTamp.length)
        //console.log(classTamp[0].length)
        var resultAkhir = {};
        for (var k = 0; k < classTamp.length; k++) {
            var resultAwal = {};
            var nilaiMax = 0;
            for (var l = 0; l < classTamp[k].length; l++) {
                //console.log(classTamp[k].length)
                //console.log(classTamp[k][l].score)
                if (classTamp[k][l].score > nilaiMax) {
                    nilaiMax = classTamp[k][l].score;
                    resultAwal.name = classTamp[k][l].name;
                    //console.log(resultAwal);
                    resultAwal.score = nilaiMax;
                    //console.log(resultAwal);
                }
            } resultAkhir[classTamp[k][0].class] = resultAwal;

        }

    } return resultAkhir;
}



// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}