
// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
// Function akan menerima array yang berisikan object pembeli 
//(nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya).
// Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object 
//dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
//siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
    //console.log(listBarang.length)
    //1. membuat variabel array kosong untuk hasil terakhir.
    var arrResult = [];
    //2. melooping variabel list barang
    for (var i = 0; i < listBarang.length; i++) {
        //console.log(listBarang[i])
        //3. membuat variabel penampung berupa array untuk nama pembeli
        var tampungPembeli = [];
        //4. memuat variabel penampung hasl object.
        var result = {};

        //5. variabel counter untuk perhitungan pembelian
        var counter = 0;
        //6. membuat variabel sisa stock barang
        var sisaStock = listBarang[i][2];
        //console.log(sisaStock)
        //7. melooping parameter shoppers
        for (var j = 0; j < shoppers.length; j++) {
            ///8. memasukkan nama barang ke dalam object penampung.
            result.product = listBarang[i][0];
            //9. membuat kondisi jika barang yg dipesan sama dengan list barang dan jika sisatock masih mencukupi.
            if (shoppers[j].product === listBarang[i][0] && sisaStock >= shoppers[j].amount) {
                //10. memasukan nama pembeli ke dalam array
                tampungPembeli.push(shoppers[j].name)
                //console.log(tampungPembeli)
                //11. mengurangi sisa stock produk
                sisaStock = sisaStock - shoppers[j].amount;
                //console.log(sisaStock);
                //12. menambah counter dengan jumlah penjualan produk.
                counter = counter + shoppers[j].amount
                //console.log(counter);
                //13. memasukkan seluruh variabel hasil looping ke dalam var tampung object.
            }
        }
        result.shoppers = tampungPembeli;
        result.leftOver = sisaStock;
        result.totalProfit = counter * listBarang[i][1];
        //14. memasukkan var tampung object ke dalam var array hasil terakhir.
        arrResult.push(result);
    } return arrResult;

}




// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
//console.log(countProfit([])); //[]