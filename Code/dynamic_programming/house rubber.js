/*
for each house, 2 options: rob or rob the next one
if rob the 1st one, the total money will be 1st + others(including 3rd)
if not rob the 1st one, the total money will be the second + others
*/

/*
Recursive, O(n^2)
var rob = function(nums) {
    return robRecursive(nums, 0);
};

function robRecursive(nums, i) {
    if (i >= nums.length) return 0;
    return Math.max(robRecursive(nums, i+1), nums[i] + robRecursive(nums, i+2));
}
*/

// to inprove time complexity, create an array to memoize the pre-calculated value, resulting in O(n)
// recursive + memoize

function robRecursive(nums,i,cache) {
    // let cache = {};
    // return function(i) {
        console.log(cache);
        if (i >= nums.length) return 0;
        if (i in cache) {
            return cache[i];
        } else {
            let result = Math.max(robRecursive(nums, i+1, cache), nums[i] + robRecursive(nums, i+2, cache));
            cache[i] = result;
            return result;
        }   
    // }
}

var rob = function(nums) {
    // const robHelper = robRecursive(nums);
    let cache = {};
    return robRecursive(nums,0, cache);
};


// DP
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    // Keep track of the max money we can make with x amount of houses available
    // dp[0] = max amount if we only have the first house to rob
    // dp[1] = max amount if we only have the first 2 houses to rob
    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        // Compare current max with the previous max
        // Check if the money from the current house + max of 2 houses away is greater than the current max
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
};