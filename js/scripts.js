// Business Logic


//User Interface Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const vowels = ["a", "i", "e", "o", "u"];
    const string = $("input#input1").val();
    const stringArray = string.split(" ");
    let xArray = [];
    stringArray.forEach(function(word) {
    if (vowels.includes(word[0].toLowerCase())) {
      xArray.push(word + "way");
    } else {
      xArray.push(word);
    }
});
const finalString = xArray.join(" ");

    $("#output").text(finalString);
    
  });
});



// const vowels = ["a", "i", "e", "o", "u"];
// const string = $("input#input1").val();
// const stringArray = string.split(" ");
// let xArray = [];
// stringArray.forEach(function(word) {
//   console.log(word[0]);
//   if (vowels.includes(word[0].toLowerCase())) {
//     xArray.push(word + "way");
//   } else {
//     xArray.push(word);
//   }
// });
// const finalString = xArray.join(" ");