let str = '', n = 5
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    str += '\n'
}
console.log(str)