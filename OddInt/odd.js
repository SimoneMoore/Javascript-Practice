function find(odd) {
    let count = {
        str: "number",
        element: odd,
        num: {},
        value: [],
        result: [],
    };
    let {element, num, value, result} = count
    let occur= {};
    for (let i= 0; i < element.length; i++) {
       let nums= element[i];
       if (occur[nums] === undefined) {
        occur[nums] = 1;
      } else {
        occur[nums]++;
      }
    }
    for (let i= 0; i < element.length; i++) {
        let nums= element[i];
        if (occur[nums] % 2 !== 0) {
            if (!num[nums]) {
                num[nums]= [];
            }
            num[nums].push(i);
        }
    }
    console.log(element, num);
    for (let nums in num) {
        value.push(...num[nums]);
    }
    console.log(value);
    for (let i of value) {
        result.push(element[i]);
    }
    console.log(result)
    return parseInt(result);
  }
find([23,45,2,7,6,22,12,56,77,6])
// Given an array of integers, find the one that appears an odd number of times.There will always be only one integer that appears an odd number of times.

