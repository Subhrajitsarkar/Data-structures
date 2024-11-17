let n = 10;
for (let i = 2; i <= n; i++) {
    if (i % 2 === 0 && i % 4 !== 0)
        console.log(i)
    else
        continue
}