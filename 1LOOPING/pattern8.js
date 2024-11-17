let str = '', n = 5, no = 1
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += no + ' ';
        no++;
    }
    str += '\n'
}
console.log(str)