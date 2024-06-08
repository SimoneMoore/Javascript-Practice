function disemvowel(troll) {
    let vowels= ["a","e","i","o","u","A","E","I","O","U"];
    console.log(troll);
    let cleanse= troll.toString().split("").filter(i => !vowels.includes(i)).join("");
    console.log(cleanse);
    return cleanse;
}

disemvowel("You're not that smart anyway.")
// Your task is to write a function that takes a string and return a new string with all vowels removed.