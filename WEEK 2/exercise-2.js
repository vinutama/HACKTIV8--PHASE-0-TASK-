// INPUT NAMA DAN PERAN UNTUK MELIHAT RESPON
var nama = 'Khevin'
var peran = 'Penyihir'

if (nama == '') {
  console.log ('Nama harus diisi!');
}
else if (peran == '') {
  console.log ('Halo', nama, ',Pilih peramu untuk memulai game!');
}
else if (peran === 'Ksatria') {
  console.log ('Selamat datang di Dunia Proxytia,', nama);
  console.log ('Halo Ksatria', nama, 'kamu dapat menyerang dengan senjatamu!');
}
else if (peran === 'Tabib') {
  console.log ('Selamat datang di Dunia Proxytia,', nama);
  console.log ('Halo Tabib', nama, 'kamu akan membantu temanmu yang terluka.');
}
else if (peran === 'Penyihir') {
  console.log ('Selamat datang di Dunia Proxytia', nama);
  console.log ('Halo Penyihir', nama, 'ciptakan keajaiban yang membantu kemenangan!');
}
else {
  console.log ('Nama harus diisi!');
}}