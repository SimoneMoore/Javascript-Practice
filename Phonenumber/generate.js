function createPhoneNumber(numbers){
    let area= numbers.join("").substring(0, 3);
    console.log(area);
    let phone= numbers.join("").substring(3, 6);
    let number= numbers.join("").substring(6, 10);
    let phoneNumber= `(${area}) ${phone}-${number}`;
    console.log(phoneNumber)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// let observe= Array.from(`${numbers}`, Number);
// console.log(Array.from(numbers, Number));
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. returns (123) 456-7890"