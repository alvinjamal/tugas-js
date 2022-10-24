// Palindrome

function checkPalindrom(text) {
  const a = text.length;
  let cek = text.toLowerCase;
  for (let i = 0; i < a; i++) {
    if (text[i] !== text[a - 1 - i]) {
      return "bukan palindrom";
    }
  }
  return "palindrom";
}
let hasil = checkPalindrom("Malam");
console.log(hasil);

// Reverse word

function reverseString(text) {
  const splitText = text.split(" ");
  const reverseText = splitText.reverse();
  return reverseText.join(" ");
}
console.log(reverseString("Saya Belajar Javascript"));
