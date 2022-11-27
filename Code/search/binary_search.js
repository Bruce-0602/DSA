/*
Need the array to be sorted
Binary Search
pick middle element then divide and conquer
*/
function binarySearch (array, start, end, num) {
    if (start > end) {
        return false;
    }
    
    let midIndex = Math.floor((end+start)/2);
    let mid = array[midIndex];
    
    if (mid === num) {
        return true;
    }
    
    if (mid > num) {
        return binarySearch(array, start, midIndex - 1, num);
    } else {
        return binarySearch(array, midIndex + 1, end, num);
    }
}

function binarySearchIterative (array, start, end, num) {
    var midIndex;
    
    while (start <= end) {
        midIndex = Math.floor((end+start)/2);
        
        if (array[midIndex] === num) {
            return true;
        }
        
        if (array[midIndex] > num) {
            end = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    }
    
    return false;
}
const numbers = [1, 3, 5, 7, 8, 9];
//const answer = binarySearch(numbers, 0, numbers.length - 1, 9);
const answer = binarySearchIterative(numbers, 0, numbers.length - 1, 9);
console.log(answer);