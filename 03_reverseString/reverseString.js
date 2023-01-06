const reverseString = function(string) {
  const stringArray = Array.from(string);
  let bigIterator = stringArray.length;
  let smallIterator = 0;
  while (bigIterator >= smallIterator) {
    let tempvalue = stringArray[bigIterator];
    stringArray[bigIterator] = stringArray[smallIterator];
    stringArray[smallIterator] = tempvalue;
    bigIterator--;
    smallIterator++;
}
return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
