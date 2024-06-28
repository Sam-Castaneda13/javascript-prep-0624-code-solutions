/* exported getWords */
function getWords(string) {
  if (string === '') {
    const thing = [];
    return thing;
  } else {
    const thing = string.split(' ');
    return thing;
  }
}
