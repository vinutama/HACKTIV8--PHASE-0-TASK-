//hasil 1
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
input.splice(1, 5, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
//end hasil 1

//hasil 2
var inputBulan = input.slice(3, 4);
var pisahBulan = inputBulan[0].split('/');
switch (pisahBulan[1]) {
    case '01': {
        console.log('Januari'); break;
    }
    case '02': {
        console.log('Februari'); break;
    }
    case '03': {
        console.log('Maret'); break;
    }
    case '04': {
        console.log('April'); break;
    }
    case '05': {
        console.log('Mei'); break;
    }
    case '06': {
        console.log('Juni'); break;
    }
    case '07': {
        console.log('Juli'); break;
    }
    case '08': {
        console.log('Agustus'); break;
    }
    case '09': {
        console.log('September'); break;
    }
    case '010': {
        console.log('Oktober'); break;
    }
    case '011': {
        console.log('November'); break;
    }
    case '012': {
        console.log('Desember'); break;
    }
}




var inputBulan = input.slice(3, 4);
var pisahBulan = inputBulan[0].split('/');
pisahBulan.sort(function (value1, value2) {
    return parseInt(value1) < parseInt(value2);
})
console.log(pisahBulan);

var pisahBulan2 = pisahBulan.join('-');

console.log(pisahBulan2);

var nama = input.slice(1, 2)
var pisahNama = nama[0].split('');

console.log(pisahNama);



