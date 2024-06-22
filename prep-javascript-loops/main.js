//Prep Javascript Loops part 1

function whileLoop1() {
  const array = [];
  let index = 0;

  while (index < 10) {
    array.push(index);
    index++;
  }
  return array;
}

//Call the Function
const whileLoop1Results = whileLoop1();

//Log the Results
console.log(whileLoop1Results);

//Prep Javascript Loops part 2
function whileLoop2() {
  const array = [];
  let index = 0;

  while (index < 20) {
    array.push(index);
    index += 2;
  }
  return array;
}

//call the function
const whileLoop2Results = whileLoop2();

//Log the Result
console.log(whileLoop2Results);

//Prep Javascript loops For!!!! part 1

function forLoop1() {
  const array = [];

  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}

//Call The Function
const forLoop1Result = forLoop1();

//Log the Results
console.log(forLoop1Result);

//Prep Javascript Loops For!!!! part 2

function forLoop2() {
  const array = [];

  for (let index = 100; index > -1; index--) {
    console.log('Time till explosion', index, '!');
  }
  return 'BOOOOOMMMMMM!!!!!'; //I know you said no return and it works w/o it I just didn't like the undefined
}

//call the function
const forLoop2Result = forLoop2();

//log the results
console.log(forLoop2Result);

//Prep Javascript Loops For...In part 1
function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

//Call the function
const forInLoop1Result = forInLoop1(person);

//Log the results
console.log(forInLoop1Result);

//Prep Javascript loops For...In part 2

function forInLoop2(object) {
  const array = [];

  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}

//Call the Function
const forInLoop2Result = forInLoop2(person);

//log the results
console.log(forInLoop2Result);
