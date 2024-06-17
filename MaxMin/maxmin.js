function highAndLow(numbers){
    let nums= numbers.toString().split(" ").map(str => Number(str));
    console.log(nums);
    let min= Math.min(...nums);
    let max= Math.max(...nums);
    console.log(`${max} ${min}`);
    return `${max} ${min}`
    // ...
  }

  highAndLow("1 2 -3 4 5")
//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
