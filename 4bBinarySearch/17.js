//find peak element which is strictly greater than its neighbour
//ip=[1,2,1,3,5,6,4]  -> op=5

let nums = [1, 2, 1, 3, 5, 6, 4]

let left = 0, right = nums.length - 1;
while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1])
        left = mid + 1
    else
        right = mid
}
console.log(right)