/* exported reverseWord */
function reverseWord(word) {
  const stringVal = word;
  const thing = [];
  for (let index = 0; index <= stringVal.length - 1; index++) {
    thing.push(stringVal[index]);
  }
  const reversed = thing.reverse();
  const joined = reversed.join('');
  return joined;
}
