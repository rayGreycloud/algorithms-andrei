// Return first recurring character in array
// Given an array = [2,5,1,2,3,5,1,2,4]
// return 2

// [2,1,1,2,3,5,1,2,4]
// return 1

// [2,3,4,5]
// return undefined if no recurring character

function firstRecurringChar(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }

  return undefined;
}

// let answer = firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// Using hash map
function firstRecurringCharacter(array) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = true;
    }
  }

  return undefined;
}

answer = firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);

console.log(answer);
