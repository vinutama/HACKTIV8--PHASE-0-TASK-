//Tugas 1
var rows1 = 5;
for (var i = 1; i <= rows1; i++) {
  console.log ('*');
}
//End Tugas 1

//Tugas 2
var rows2 = 5;
var asterisks = '';

for (var i = 1; i <= rows2; i++) {
  for (var j = 1; j <= rows2; j++) {
    asterisks = asterisks + ('*');
  }
  console.log (asterisks);
  asterisks = '';
}
//end Tugas 2

//Tugas 3
var rows3 = 5;
var asterisks = '';

for (var i = 1; i <= rows3; i++) {
  for (var j = 1; j <= i; j++) {
    asterisks = asterisks + ('*');
  }
  console.log (asterisks);
  asterisks = '';
}
//end Tugas 