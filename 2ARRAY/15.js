let nums = [9, 6, 4, 2, 3, 5, 7, 1], n = nums.length + 1, exp = (n * (n + 1)) / 2, sum = 0;

for (let i = 0; i < nums.length; i++)
    sum += nums[i];

console.log(exp - sum)