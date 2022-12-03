// O(N) in time O(N) in space
var removeDuplicates = function(nums) {
    let cache = {};
    let uniqueNumber = 0;
    let substitutingIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        let currValue = nums[i];
        if (!(currValue in cache)){
            cache[currValue] = true;
            uniqueNumber++;
            substitutingIndex = uniqueNumber -1;
            nums[substitutingIndex] = currValue;
        }
    }
    return uniqueNumber;
};

// O(N) in time O(1) in space
var removeDuplicates = function(nums) {
    let prevValue = nums[0];
    let uniqueNumber = 1;
    let substitutingIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        let currValue = nums[i];
        if (currValue > prevValue){
            prevValue = currValue;
            uniqueNumber++;
            substitutingIndex = uniqueNumber -1;
            nums[substitutingIndex] = currValue;
        }
    }
    return uniqueNumber;
};