function getMiddle(s) {
    let mid= (s.length - 1)/2
    return console.log((s.length-1)%2 !== 0? s.slice( mid, mid + 2): s.at(mid))
} 
getMiddle("test")