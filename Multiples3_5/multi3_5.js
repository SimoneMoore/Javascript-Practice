function solution(num){
    if (num < 0) {
        console.log("Shadow Realm");
        return 0
    }
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i%3 === 0) {
                console.log("its 3 dingus");
                sum= sum + i;
        } else if (i%5 === 0) {
                console.log("its 5 dingus");
                sum= sum + i;
        }
    }
    return sum;
}
console.log(solution(10))
// Finish the solution so that it return the sum of all the natural numbers that are multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0. Exclusive
// Note: If the number is a multiple of both 3 and 5, only count it once.