var merge = function(nums1, m, nums2, n) {
    
    // special case
    // if (m === 1) {
    //     nums1[0] = (nums1 == []) ? nums2[0] : nums1[0];
    // }
    
    //like merge sort, imagine 2 stacks
    let nums1Copy= nums1.slice(0,m);
    let currIndex = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < m && rightIndex < n) {
        if(nums1Copy[leftIndex] < nums2[rightIndex]){
            nums1[currIndex] = nums1Copy[leftIndex]; 
            leftIndex++;
        } else {
            nums1[currIndex] = nums2[rightIndex]; 
            rightIndex ++;
        }
        currIndex++;
    }
    
    // take care of the leftovers
    let leftOver = (leftIndex >= m) ? nums2 : nums1Copy ;
    let leftOverNums = (leftOver == nums2) ? nums2.slice(rightIndex) : nums1Copy.slice(leftIndex);
    let mergingIndex = m + n - leftOverNums.length;
    let iterator = 0;
    while (mergingIndex < m + n){
        nums1[mergingIndex] = leftOverNums[iterator];
        mergingIndex++;
        iterator++;
    }
};