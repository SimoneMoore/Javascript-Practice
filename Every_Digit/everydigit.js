const prompt = require("prompt-sync")({ sigint: true });
let userInput = prompt("Please Enter An Integer:");
if (userInput >= 0) {
    console.log("proceed");
} else {
    console.log("error");
}  
console.log(userInput)
function squareDigits(userInput) {
    const num = userInput;
    let num_arr = num.split("");
    console.log(num_arr)
    for (const i of num_arr){
        let item = Math.pow(i, 2);
        console.log(item) }
    return num_arr;
}
squareDigits (userInput);