const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot;
  let partitionIdx;

  if (left < right) {
    pivot = right;
    partitionIdx = getPartitionIdx(array, pivot, left, right);

    // sort left and right
    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  }

  return array;
}

// compare each value "in" partition to pivot value and swap if larger
const getPartitionIdx = (array, pivot, left, right) => {
  let pivotValue = array[pivot];
  let partitionIdx = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIdx);
      partitionIdx++;
    }
  }

  swap(array, right, partitionIdx);
  return partitionIdx;
};

// swaps numbers at specified locations
function swap(array, firstIdx, secondIdx) {
  const temp = array[firstIdx];
  array[firstIdx] = array[secondIdx];
  array[secondIdx] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
