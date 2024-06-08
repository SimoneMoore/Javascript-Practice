function getCount(str) {
    let vowels= ["a","e","i","o","u","A","E","I","O","U"];
    console.log(str);
    console.log(str.toString().split("").filter(i => vowels.includes(i)))
    return console.log(str.toString().split("").filter(i => vowels.includes(i)).length)
}
getCount("Baba Ganoush")
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels (but not y).