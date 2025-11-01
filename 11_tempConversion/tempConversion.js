const convertToCelsius = function (number) {
  let numberCelsius = (number - 32) * (5 / 9);
  let roundedCelsius = Math.round(numberCelsius *10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function (number) {
  let numberFahrenheit = (number * (9 / 5) + 32);
  let roundedFahrenheit = Math.round(numberFahrenheit*10)/10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
