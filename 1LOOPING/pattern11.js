
let str = '', n = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += ' '
    }
    for (let j = 1; j <= n; j++) {
        str += '* '
    }
    str += '\n';
}
console.log(str)