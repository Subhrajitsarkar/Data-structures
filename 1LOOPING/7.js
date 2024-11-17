let n = 123, dup = n, r = 0, sum = 0;
while (n) {
    r = n % 10;
    sum += r * r * r;
    n = Math.floor(n / 10);
}
if (sum == dup)
    console.log('true')
else
    console.log('false')