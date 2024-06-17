function descendingOrder(n){
    console.log(n);
    let nums= Array.from(`${n}`, Number).sort((a,b) => b - a).join("");
    console.log(nums);
    return parseInt(nums)
}

descendingOrder(123456789)
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

