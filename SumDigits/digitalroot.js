function digitalSum(root) {
  let sumDigits = (digital) => { 
    return Array.from(`${digital}`, Number).reduce((total, value) => total + value, 0);
  }
  let digitalRoot = sumDigits(root);
  while (digitalRoot >= 10) {
      digitalRoot= sumDigits(digitalRoot);
  }
  console.log(digitalRoot);
  return digitalRoot
  }
 console.log(digitalSum(23478));
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.