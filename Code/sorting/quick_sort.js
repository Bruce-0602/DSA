/*
pick the last element as the pivot

For i = left-1, j = left (until j == right)
    if array[j] < pivot
        swap array[j] & array[i];
        i++;
note: i is keeping track of the last item smaller than pivot;
      j is always incurring (to traverse remaining)

swap itemFromLeft and pivot 

limitation - initial input must be (numbers, 0, numbers.length - 1)

extra: rule-of thumb to choose pivot - median of three(first, middle and last item in the array)
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort (array, left, right) {
    if (left < right){
        pivotIndex = partition(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array
}

function partition(array, left, right){
    // always pick the right most (last item) as the pivot 
    const pivot = array[right];
    
    // trackingPointer: i; traversingPointer: j
    let trackingPointer = left - 1;
    for (let traversingPointer = left; traversingPointer < right; traversingPointer++){
        if (array[traversingPointer] < pivot){
            // only when traversing Pointer find element smaller than pivot,
            // increment i then swap array[i] & array[j]
            // otherwise do nothing
            trackingPointer++;
            swap(array, trackingPointer, traversingPointer);
        }
    }
    // finally place pivot into correct position - (sandwich position) where all 
    // items to the left is smaller than pivot and all elements to the right are 
    // larger than pivot
    swap(array, trackingPointer + 1, right)
    
    return trackingPointer + 1;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const answer = quickSort(numbers, 0, numbers.length - 1);
console.log(answer);

//https://www.youtube.com/watch?v=MZaf_9IZCrc