let n = 8, ar = [1, -1, 3, 2, -7, -5, 11, 6]; // O(n)

let arrange = function (ar) {
    let start = 0, end = ar.length - 1;

    while (start <= end) {
        if (ar[start] >= 0) {
            start++;
        } else if (ar[end] < 0) {
            end--;
        } else {
            // If ar[start] is negative and ar[end] is positive, shift positive numbers to the left
            let temp = ar[start];
            for (let j = start; j < end; j++) {
                ar[j] = ar[j + 1]; // Shift elements to the left
            }
            ar[end] = temp; // Place the negative element at the right end
            end--; // Decrease end pointer after placing the negative element
        }
    }
    return ar;
}

arrange(ar);
console.log(ar);