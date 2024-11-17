// First and last occurrence of an element

// Example input
// if [5,7,7,8,8,10], target: 8 -> output: [3, 4]

let search = (nums, target) => {
    let findLeft = (nums, target) => {
        let lo = 0, hi = nums.length - 1, left = -1;
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (nums[mid] === target) {
                left = mid;
                hi = mid - 1;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return left;
    };

    let findRight = (nums, target) => {
        let lo = 0, hi = nums.length - 1, right = -1;
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (nums[mid] === target) {
                right = mid;
                lo = mid + 1;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return right;
    };

    let leftIndex = findLeft(nums, target);
    let rightIndex = findRight(nums, target);
    return [leftIndex, rightIndex];
};
// Example input
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(search(nums, target));  // Output: [3, 4]