function positiveSum(arr) {
    return console.log(arr.reduce((a,b)=> a + (b > 0 ? b : 0), 0))
}
positiveSum([-1,2,3,4,-5])