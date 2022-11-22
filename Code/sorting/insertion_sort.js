// For length:
//     compare [0:i] to array[i+1]
//     For i:0 (OR while array[j] < array[j+1]:)
//         swap array[j+1] & array[j] when array[j] < array[j+1]

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for(let i = 0; i < array.length; i ++){
        let temp;

        // can change to while loop
        for (let j = i + 1; j > 0; j--){
            if (array[j] < array[j - 1]){
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);