//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
  const letters = str.split('');
  let reversed = [];

  function addToReversed(arr) {
    if (arr.length > 0) {
      reversed.push(letters.pop());

      addToReversed(arr);
    }

    return;
  }

  addToReversed(letters);

  return reversed.join('');
}

const answer = reverseString('yoyo mastery');
//should return: 'yretsam oyoy'
console.log(answer);
