let str = "abc334v44d"

let matchs = str.match(/\d+/g);
let no = matchs ? matchs.map(Number) : []

console.log(no)