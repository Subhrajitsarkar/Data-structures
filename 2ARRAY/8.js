let ar = [1, 2, 3, 4, 5]
for (let i = 0; i < ar.length; i++) {
    let str = ''
    for (let j = i; j < ar.length; j++) {
        str += ar[j];
        console.log(str)
    }
}
