
// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.

function graduates(students) {
    if (students.length === 0) {
        return {};
    } else {
        var className = ['foxes', 'wolves'];
        var classTamp = [];
        for (var i = 0; i < className.length; i++) {
            var tampClass = [];
            for (var j = 0; j < students.length; j++) {
                if (className[i] === students[j].class) {
                    tampClass.push(students[j]);
                    //console.log(tampClass)
                }
            } classTamp.push(tampClass);
            //console.log(classTamp)
        }
        var resultAkhir = {};
        for (var k = 0; k < classTamp.length; k++) {
            //console.log(classTamp.length)
            var resultArr = [];
            var nilaiMin = 75;
            for (var l = 0; l < classTamp[k].length; l++) {
                var resultObj = {};
                //console.log(classTamp[k].length)
                //console.log(classTamp[k][l].score)
                //console.log(classTamp[k][l])
                if (classTamp[k][l].score > nilaiMin) {
                    resultObj.name = classTamp[k][l].name;
                    resultObj.score = classTamp[k][l].score;
                    resultArr.push(resultObj);
                    //console.log(resultArr)
                }
            } resultAkhir[classTamp[k][0].class] = resultArr;
        }
    } return resultAkhir;
}


console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }