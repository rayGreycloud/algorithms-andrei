function findFactorialIterative(number) {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  console.log(number);
  if (number < 0) {
    return 'Error: must be a non-negative number';
  } else if (number === 0) {
    return 1;
  } else if (number <= 2) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

function getFactorial(number) {
  let factorial = findFactorialRecursive(number);

  console.log(`${number}! = ${factorial}`);
}

findFactorialIterative(5);

getFactorial(-1);
getFactorial(0);
getFactorial(1);
getFactorial(2);
getFactorial(3);

//If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2
