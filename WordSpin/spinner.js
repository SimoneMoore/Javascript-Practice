function target(mario) {
  let zl= mario.toString().split(" ").filter(i => i.length >= 5).map(i => i.split("").filter(char => /[a-zA-Z\s]/.test(char)).join(""));
  console.log(zl);
  for (let i = 0; i < zl.length; i++)  {
    if (zl[i].length >= 5) {
      let scramble= zl[i].split("").reverse().join("");
      console.log(scramble);
      mario= mario.replace(zl[i], scramble);
    } else {
    console.log("missed");
    }
  }
  console.log(mario);
  return mario;
}
target("Did that really work?")

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.