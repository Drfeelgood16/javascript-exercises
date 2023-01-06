const convertToCelsius = function(temperatureInF) {
  return Math.round((temperatureInF - 32) * 5 / 9*10)/10;
};

const convertToFahrenheit = function(temperatureInC) {
  return Math.round((temperatureInC * (9 / 5) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
