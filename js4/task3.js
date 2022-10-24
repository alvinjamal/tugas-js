const divideAndSort = (deretAngka) => {
  let dataString = deretAngka
    .toString()
    .split("0")
    .map((data) => data.split("").sort().join(""))
    .join("");
  console.log(typeof dataString);
  console.log(dataString);
};
divideAndSort(5956560159466056);
