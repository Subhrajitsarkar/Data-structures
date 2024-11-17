let n = 153, r = 0

while (n) {
    r = n % 10;
    console.log(r)
    n = Math.floor(n / 10)
}