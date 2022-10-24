angka = "";
printGanjilGenap = () => {
  for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) console.log(i, "adalah bilangan genap");
    else console.log(i, "adalah bilangan ganjil");
  }
};
printGanjilGenap(5);
