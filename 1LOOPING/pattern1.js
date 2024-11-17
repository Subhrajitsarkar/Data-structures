let n = 4, m = 5, str = ''
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        str += '*'
    }
    str += '\n';
}
console.log(str)