function arrayDiff(a, b) {
    return console.log(a.filter(i => !b.includes(i)));
}
 
arrayDiff([1,2,2,2,2,3,3],[2]);
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.