let ar = [5, 4, 7, 2, 6], min = ar[0]

for (let i = 0; i < ar.length; i++) {
    if (ar[i] < min)
        min = ar[i]
}
console.log(min)