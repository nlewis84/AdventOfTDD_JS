const fizzBuzz = (number) => {
  let convertedNumber = '';

  if (number % 3 === 0) {
    convertedNumber += 'Fizz';
  }

  if (number % 5 === 0) {
    convertedNumber += 'Buzz';
  }

  return convertedNumber || number;
};

const fizzBuzzTwo = (number) => {
  const convertedNumber =
    (number % 3 === 0 ? 'Fizz' : '') + (number % 5 === 0 ? 'Buzz' : '');
  return convertedNumber || number;
};

const fizzBuzzThree = (number) => {
  let wordArray = [];

  if (number % 3 === 0) {
    wordArray.push('Fizz');
  }

  if (number % 5 === 0) {
    wordArray.push('Buzz');
  }

  return wordArray.length ? wordArray.join('') : number;
};

const fizzBuzzFour = (number) => {
  let fizzBuzzObject = {
    3: 'Fizz',
    5: 'Buzz',
  };

  let convertedNumber = '';

  for (let key in fizzBuzzObject) {
    if (number % key === 0) {
      convertedNumber += fizzBuzzObject[key];
    }
  }

  return convertedNumber || number;
};

const fizzBuzzFive = (number) => {
  // I'm sorry to whoever reads this...
  const WORD_ARRAY = ['Fizz', 'Buzz', 'FizzBuzz'];
  let result = [];

  for (let i = 1; i <= number; i++) {
    let convertedNumber = '';
    let fizzCount = 0;
    let buzzCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        if (j % 3 === 0) {
          fizzCount++;
        }
        if (j % 5 === 0) {
          buzzCount++;
        }
      }
    }

    if (fizzCount > 0 && buzzCount > 0) {
      convertedNumber = WORD_ARRAY[2];
    } else if (fizzCount > 0) {
      convertedNumber = WORD_ARRAY[0];
    } else if (buzzCount > 0) {
      convertedNumber = WORD_ARRAY[1];
    } else {
      convertedNumber = i;
    }

    result.push(convertedNumber);
  }

  return result[number - 1];
};

module.exports = {
  fizzBuzz,
  fizzBuzzTwo,
  fizzBuzzThree,
  fizzBuzzFour,
  fizzBuzzFive,
};
