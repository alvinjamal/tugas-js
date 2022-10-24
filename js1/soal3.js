let n = 5; // height of pattern
let segitiga = " ";
// External loop
for (let i = 0; i < 6; i++) {
  for (let j = 1; j < 5 + i - 4; j++) {
    segitiga += j + " ";
  }
  segitiga += "\n";
}
console.log(segitiga);
