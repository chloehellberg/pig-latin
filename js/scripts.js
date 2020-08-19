
const vowels = ["a", "i", "e", "o", "u"];
const string = "Replace all of the vowels with an X, please!";
const stringArray = string.split(" ");
let xArray = [];
stringArray.forEach(function(word) {
  console.log(word[0]);
  if (vowels.includes(word[0].toLowerCase())) {
    xArray.push(word + "way");
  } else {
    xArray.push(word);
  }
});
const finalString = xArray.join(" ");