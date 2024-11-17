let n = 5, ar = [], x = 2

while (n) {
    let f = 1;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            f = 0;
            break;
        }
    }
    if (f == 1) {
        console.log(x);
        n--;
    }
    x++;
}