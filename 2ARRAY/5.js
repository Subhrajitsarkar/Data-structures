let ar = [5, 4, 7, 2, 6], max = ar[0]

for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max)
        max = ar[i]
}
console.log(max)