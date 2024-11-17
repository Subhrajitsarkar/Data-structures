let ar = [1, 4, 2, 5, 3], sum = 0;
for (let i = 0; i < ar.length; i++) {
    let left = i + 1, right = ar.length - i, sub = left * right;
    let odd = (sub % 2) == 0 ? Math.floor(sub / 2) : Math.floor(sub / 2) + 1
    sum += odd * ar[i]
}
console.log(sum)