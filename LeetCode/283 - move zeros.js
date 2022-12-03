/*
The idea is to find the first zero, and then from that index find the fisrt non-zero, 
then swap them. So the order will remain the same.
Double pointers
*/

var moveZeroes = function(nums) {
    let first=0,second=0;
    let length = nums.length;
    if (length<1) return;
    while(first < length && second < length) {
        // search 0 elements
        while (first < length && nums[first] != 0) {
            first++;
        }
        second = first + 1;
        // search non-0 elements
        while (second < length && nums[second] == 0) {
            second++;
        }
        if (first < length && second < length){
            swap(nums, first, second)
        }
    }
};

function swap(arr, firstIndex, secondIndex){
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

/*
The idea is to keep the nonZeroCount, if the currNum is not zero && there are 0(s) before -> swap
Double pointers
*/
var moveZeroes = function(nums) {
    let nonZeroCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            if ( i!= nonZeroCount) {
                nums[nonZeroCount] = nums[i];
                nums[i] = 0;
            } 
            nonZeroCount++;   
        }
    }
};