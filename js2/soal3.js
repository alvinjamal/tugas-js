function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  a = dataArray.length;
  if (nilaiAwal > nilaiAkhir) {
    console.log("nilai akhir harus lebih besar dengan nilai awal");
  } else if (a < 5) {
    console.log("jumlah angka dalam data array harus lebih dari 5");
  } else {
  }
  ns(nilaiAwal, nilaiAkhir, dataArray, a);
}
function ns(nilaiAwal, nilaiAkhir, dataArray, a) {
  let string = "";
  for (r = 0; r <= a - 1; r++)
    if (dataArray[r] < nilaiAwal) {
    } else if (dataArray[r] > nilaiAkhir) s = string.length;
  if (s === 0) {
    b = string.length;
    console.log("nilai tidak ditemukan");
  } else {
    console.log(string);
  }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 3, 10], ns);
