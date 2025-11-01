const add = function (number1, number2) {
  let num;
  return (num = number1 + number2);
};

const subtract = function (number1, number2) {
  let num;
  return (num = number1 - number2);
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (numbers) {
  let product = 1;
  numbers.forEach((element) => {
    product *= element;
  });
  return product;
};

const power = function (num1, num2) {
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function (number) {
  if (number == 0) return 1;

  let result = 1;
  while(number > 0)
  {
    result*=number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
