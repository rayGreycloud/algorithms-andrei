const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let larger = array[j];
        array[j] = array[j + 1];
        array[j + 1] = larger;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
