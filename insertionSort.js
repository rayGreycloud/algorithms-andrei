function insertionSort(array) {
  let currentVal;

  for (let i = 1; i < array.length; i++) {
    // track current value
    currentVal = array[i];
    let j;

    // check previous values
    // if greater than currentVal, move that value
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    // loop ends when new location of currentVal found
    // place value into new location
    array[j + 1] = currentVal;
  }
  return array;
}

// Andrei Solution
function insertionSort2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }

  return array;
}

const numbers = [2, 1, 9, 76, 4];
const moreNumbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(insertionSort(numbers));
console.log(insertionSort(moreNumbers));
console.log(insertionSort2(moreNumbers));
