function capitalize(word) {
  const start = word[0].toUpperCase();
  const sliced = word.slice(1);
  const end = sliced.toLowerCase();
  const newWord = start + end;
  return newWord;
}
