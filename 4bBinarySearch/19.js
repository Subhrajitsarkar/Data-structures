// search in rotaed sorted array
// ip=[4,5,6,7,0,1,2]  , target=0 -> op=4

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;

function search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found
        if (nums[mid] === target) {
            return mid;
        }
        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // If target is in the left sorted half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half must be sorted
        else {
            // If target is in the right sorted half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    // If the target was not found
    return -1;
}
console.log(search(nums, target));  // Output: 4