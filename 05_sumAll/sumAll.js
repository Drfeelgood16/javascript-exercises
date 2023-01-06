const sumAll = function(num1, num2) {
  
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR"
  }
  
  let higherBound;
  let lowerBound;

  if (num1 < num2) {
    higherBound = num2;
    lowerBound = num1
  }
  else {
    higherBound = num1;
    lowerBound = num2;
  }

  let sum = 0;
  while (lowerBound <= higherBound) {
    sum = sum + lowerBound;
    lowerBound++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
