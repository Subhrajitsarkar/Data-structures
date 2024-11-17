let str = '', n = 4, m = 5
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (i == 1 || i == n || j == 1 || j == m)
            str += '*'
        else
            str += ' '
    }
    str += '\n'
}
console.log(str)