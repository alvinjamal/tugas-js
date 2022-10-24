// 1. Filter()
// Metode Filter() berfungsi untuk membuat sebuah array baru dengan memperhatikan
//    kondisi tertentu pada setiap elemen dari array yang sudah ada.

//  membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = angka.filter((item) => item % 2 === 0);

console.log(filteredArray); // Output: [2, 4, 6, 8]

// 2. Slice()

// slice() merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru.

// Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir. Method ini tidak mengubah array asli.

// const hewan = ["kucing", "bebek", "ayam", "kambing", "semut"];

// const hewanBaru = hewan.slice(1, 4);

// console.log(hewanBaru); // [ 'bebek', 'ayam', 'kambing' ]

// 3. Push

// Method array push() berfungsi untuk menambahkan satu atau lebih elemen ke akhir array termasuk array multidimensi, method ini mengembalikan panjang array baru

// const mahasiswa = ["budi", "ucup"];
// const panjang = mahasiswa.push("otong", "bambang");

// console.log(mahasiswa); // [ 'budi', 'ucup', 'otong', 'bambang' ]
// console.log(panjang); // 4

// 4. Pop

// pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.

// Method ini mengubah panjang array dan mengembalikan elemen yang dihapus.

// Jika kita menghapus elemen array menggunakan kata kunci delete, elemen tersebut memang dihapus, tapi tidak benar-benar dihapus, panjang array tidak berubah.

// Dengan menggunakan pop() elemen array benar-benar dihapus sehingga panjangnya pun berubah, berbeda dengan delete.

// const mahasiswa = ["budi", "bambang", "ucup"];

// const mahasiswaDihapus = mahasiswa.pop();

// console.log(mahasiswa); // [ 'budi', 'bambang' ]
// console.log(mahasiswaDihapus); // ucup

// 5. reduce

// reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.

// Setelah menjalankan fungsi callback untuk semua elemen array, method ini menghasilkan nilai tunggal.

// Kasus yang paling mudah dipahami adalah ketika kita ingin menjumlahkan semua elemen array angka.

// const arrAngka = [1, 2, 3, 4, 5];

// const result = arrAngka.reduce((nilaiSebelumnya, nilaiSaatIni) => {
//   return nilaiSebelumnya + nilaiSaatIni;
// });

// console.log(result); // 15

// 6. Shift

// shift() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen pertama dari array.

// Method ini mengembalikan elemen yang dihapus dan mengubah panjang array.

// Perilakunya mirip seperti pop(), tapi alih-alih menghapus elemen terakhir, shift() menghapus elemen pertama dari array.

// const buah = ["pisang", "anggur", "apel"];

// const buahDihapus = buah.shift();

// console.log(buahDihapus); // pisang
// console.log(buah); // [ 'anggur', 'apel' ]

// 7. Concat

// Method concat berfungsi untuk menggabungkan dua atau lebih array menjadi satu array baru.

// Method ini tidak mengubah array sumber, tapi mengembalikan array baru.

// Method ini dapat membantu kita ketika kita memiliki beberapa array terpisah dan kita ingin menggabungkan semuanya ke dalam satu array.

// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];

// const arr3 = arr1.concat(arr2);

// console.log(arr3); // [ 'a', 'b', 'c', 1, 2, 3 ]

// 8. indexOf

// indexOf() mencari indeks dari karakter tertentu di dalam string. Jika string yang dicari lebih dari satu karakter, yang dikembalikan adalah indeks karakter pertama.

// 9. last Index Of

// lastIndexOf() mencari indeks dari kemunculan terakhir karakter tertentu di dalam string. Jika string yang dicari lebih dari satu karakter, yang dikembalikan adalah indeks karakter pertama.

// const str = 'saya sedang belajar javascript';

// console.log(str.lastIndexOf('a')); // 23 :: ... belajar jav(a)script
// console.log(str.lastIndexOf('ja')); // 20 :: ... belajar (ja)vascript
// console.log(str.lastIndexOf('ja', 19)); // 16 :: ... bela(ja)r javascript

// 10. Repeat()

// repeat() mengembalikan string sumber yang diulang sesuai dengan jumlah pengulangan yang ditentukan.

const str = "aku sedang belajar javascript";
console.log(str.replace("aku", "saya")); // saya sedang belajar javascript
