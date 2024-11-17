let n = 123, rev = 0, rem = 0;
while (n) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
}
console.log(rev)