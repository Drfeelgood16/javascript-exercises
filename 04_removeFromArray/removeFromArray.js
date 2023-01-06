const removeFromArray = function(array) {
  const numbersToRemove = [];
  for (let i = 1; i < arguments.length; i++) {
    numbersToRemove.push(arguments[i]);
  }

  //for every number in "array" it will loop through all numbers in "numbersToRemove" 
  //and check for similarities"
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < numbersToRemove.length; j++) { 
      if (array[i] === numbersToRemove[j]) {
        array.splice(i, 1);
        i--; //since splicing removes an entry i needs to decrement otherwise it will skip an entry
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
