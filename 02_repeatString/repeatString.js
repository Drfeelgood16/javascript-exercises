const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR"
  }

  let sum = ""
  while (num > 0) {
      sum = sum + string;
    num--;
  }
  return sum
 
  }
 

// Do not edit below this line
module.exports = repeatString;
