function alphabetPosition(alpha) {
    let yap = alpha.toString().split("").filter(i => /[a-zA-z]/.test(i)).map(i => i.toLowerCase().charCodeAt(0) - 96)
    return console.log(yap);
}
alphabetPosition("Cucumber $0.79")

//   In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.
// create a function that outputs position of the character's alphabetical order. Do not output characters that are not letters.