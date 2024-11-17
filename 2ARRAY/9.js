let ar = [5, 2, -4, -5, 3, -1, 2, 3, 1], max = 0, cur = 0

for (let i = 0; i < ar.length; i++) {
    cur += ar[i]
    if (cur < 0)
        cur = 0
    if (max < cur)
        max = cur
}
console.log(max)

