// TUGAS 1
console.log ('LOOPING PERTAMA');
var urutan = 0;
while (urutan < 20) {
  urutan += 2;
  console.log(urutan + ' - I love coding ');
}
console.log ('LOOPING KEDUA');
var urutan = 22;
while (urutan > 0) {
  urutan -= 2;
  console.log(urutan + ' - I will become fullstack developer ');
}
//END TUGAS 1

//TUGAS 2
console.log ('LOOPING PERTAMA');
var urutan = 0;
for (var urutan = 0; urutan < 20; urutan += 2 ) {
  console.log (urutan + ' - I love coding');
}

console.log ('LOOPING KEDUA');
var urutan = 20;
for (var urutan = 20; urutan > 0; urutan -= 2) {
  console.log (urutan + ' - I will become fullstack developer');
}
// END TUGAS 2

//TUGAS 3

// GANJIL GENAP
for (var i = 1; i <= 100; i++ ) {
    if (i % 2 === 0) {
      console.log (i + ' -GENAP ');
    }
    else if (i % 2 !== 0) {
      console.log (i + ' -GANJIL ');
    }
  }
  //END GANJIL GENAP
  
  // PERULANGAN PERTAMBAHAN 2
  for (var i = 1; i <= 100; i+= 2) {
    if (i % 3 === 0) {
      console.log (i + ' KELIPATAN 3 ');
    }
    else if ( i % 3 !== 0) {
      console.log (i + ' none ');
    }
  }
  // END PERULANGAN PERTAMBAHAN 2
  
  // PERULANGAN PERTAMBAHAN 5
  for (var i = 1; i <= 100; i+= 5) {
    if (i % 6 === 0) {
      console.log (i + ' KELIPATAN 6 ');
    }
    else if ( i % 6 !== 0) {
      console.log (i + ' none ');
    }
  }
  //END PERULANGAN PERTAMBAHAN 5
  
  // PERULANGAN PERTAMBAHAN 9
  for (var i = 1; i <= 100; i+= 9) {
    if (i % 10 === 0) {
      console.log (i + ' KELIPATAN 10 ');
    }
    else if ( i % 10 !== 0) {
      console.log (i + ' none ');
    }
  }
  //END PERULANGAN PERTAMBAHAN 9
  
  //END TUGAS 3