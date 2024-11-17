let n = 4, str = ''
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += ' ';
    }
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}
console.log(str)