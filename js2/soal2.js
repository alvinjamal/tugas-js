function searchName(data, callback) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  z = name.length;
  v = /an./i;
  string = "";
  for (y = 0; y <= z - 1; y++) {
    if (v.test(name[y]) === true) {
      string += name[y] + " ";
    }
  }
  edit = string.split("an");
  callback(data, edit);
}
function callback(data, edit) {
  for (i = 0; i <= data - 1; i++) {
    console.log(edit[i]);
  }
}
searchName(3, callback);
