// For length:
//     set array[i] as the smallest item
//     For rest of array
//         find the smallest item
//     set array[i] = smallest 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for(let i = 0; i < array.length; i ++){
        let smallestIndex = i;
        let temp = array[i];
        
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[smallestIndex]){
                smallestIndex = j;
            }
        }

        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;
    }
}

selectionSort(numbers);
console.log(numbers);