let str = '', n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    str += '\n'
}
console.log(str)