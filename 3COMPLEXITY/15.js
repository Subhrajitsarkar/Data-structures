let nums = [1, 2, 3, 4, 5, 6, 7], k = 3

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++;
        end--;
    }
}

function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
}
rotate(nums, k)
console.log(nums)