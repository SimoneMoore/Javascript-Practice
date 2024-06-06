function squareDigits(num) {
    let num_arr = num.toString().split("");
    let rada = "";
      console.log(num_arr)
    for (const i of num_arr) {
         let item = Math.pow(parseInt(i), 2);
         console.log(item)
      rada += item;
        }
    
  return parseInt(rada);
  }