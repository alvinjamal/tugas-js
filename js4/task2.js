const PijarFood = (harga, voucher, jarak, pajak) => {
  if (voucher == "PIJARFOOD5" && harga >= 50000) {
    diskon = (50 / 100) * harga;
    if (diskon >= 50000) {
      diskon = 50000;
      console.log(`harga : ${harga}`);
      console.log(`potongan : ${diskon}`);
    }
  }
  if (jarak > 2) {
    jarakAwal = 5000;
    jarakTambah = (jarak - 2) * 3000;
    newJarak = jarakAwal + jarakTambah;
    console.log(`biaya Antar : ${newJarak}`);
  } else {
    newJarak = 5000;
    console.log(`biaya antar : ${newJarak}`);
  }
  if (pajak == true) {
    pajak = (5 / 100) * harga;
    console.log(`pajak : ${pajak}`);
    subTotal = harga - diskon + newJarak + pajak;
    console.log(`sub total : ${subTotal}`);
  } else {
    pajak = 0;
    console.log(`pajak : ${pajak}`);
  }
};

PijarFood(75000, "PIJARFOOD5", 5, true);
