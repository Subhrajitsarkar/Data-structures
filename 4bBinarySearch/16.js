//Binary search of an element using O(n)

//nums = [-1, 0, 3, 5, 9, 12], target = 9 -> op=4

let nums = [-1, 0, 3, 5, 9, 12], target = 9

function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1
    }
    return -1;
}
console.log(search(nums, target))