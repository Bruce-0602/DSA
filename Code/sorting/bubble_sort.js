// For length:
//     For each pair of 2 elements
//         move the larger element to the higher index   

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for(let round = 0; round < array.length; round ++){
        let temp = 0;
        for (let i = 0; i < array.length; i++){
            if (array[i] > array [i+1]){
                temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);