/*
break into left half & right half
merge the two halfs (think about 2 stacks)
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const half = Math.ceil(numbers.length/2);
// console.log(half);
// console.log(numbers.slice(0,half));
// console.log(numbers.slice(half,numbers.length));

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const half = Math.ceil(array.length/2);
  const left = array.slice(0,half);
  const right = array.slice(half,array.length);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// while (left.isNotEmpty and right.isNotEmpty)
//     if left[0] < right[0]
//         smaller = left.shift()
//     else
//         smaller = right.shift()
//     newArr.append(smaller)
// concatenate rest of left and (actually or) right
        
function merge(left, right){
    let smaller;
    let mergedArray = [];
    while(left.length && right.length){
        if (left[0] < right[0]){
            smaller = left.shift();
        } else {
            smaller = right.shift();  
        }
        mergedArray.push(smaller);
    }
    
    return mergedArray.concat(left).concat(right);
}
/*
Using shift() is expensive in operation, can keep track of index in both 
left & right to improve performance:

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

*/


const answer = mergeSort(numbers);
console.log(answer);