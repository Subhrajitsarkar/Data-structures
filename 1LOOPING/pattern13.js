let str = '', n = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += ' '
    }
    for (let j = i; j >= 1; j--) {
        str += j
    }
    for (let j = 2; j <= i; j++) {
        str += j
    }
    str += '\n'
}
console.log(str)