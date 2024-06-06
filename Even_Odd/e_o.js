function evenOrOdd() {
    let int = Number.parseInt(num)
    if (Number.isInteger(int) === true) {
        console.log("Its an integer.");
    } else {
        console.log("Beep.");
    }
    let check = () => {
        if ((int % 2) === 0) {
            console.log("Even as Steven.");
            return ("Even as Steven.");
            } else {
            console.log("Odd as Todd.");
            return ("Odd as Todd.");
        }
    }
    return check(int)
}
let num = 38;
evenOrOdd (num)
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// accept only integers and identify if they are even or odd
// switch case, check to pass only integers.