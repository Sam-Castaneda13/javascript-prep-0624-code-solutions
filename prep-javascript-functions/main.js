//Prep Javascript Functions part 1

function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResults = addTwoNumbers(32, 37);

console.log('addTwoNumbers Results: ', addTwoNumbersResults);

//Prep Javascript Functions part 2

function convertHoursToMinutes(a) {
  const b = a * 60;
  return b;
}

const hours = 5;

const minutes = convertHoursToMinutes(hours);

console.log('The amount of minutes for', hours, 'hours is:', minutes);

//Prep Javascript Functions part 3

function getGreeting(a) {
  const b = 'Hello' + ' ' + a + '!';
  return b;
}

const name = 'Sam';

const greeting = getGreeting(name);

console.log(greeting);

//Prep Javascript Functions part 4

function addAndMultipleBy5(a, b) {
  const c = (a + b) * 5;
  return c;
}

const num1 = 6;
const num2 = 2;

const sumTimesFive = addAndMultipleBy5(num1, num2);

console.log('The sum of the two numbers is:', sumTimesFive);

//Prep Javascript Functions part 5

function multiplyAndDivideBy5(num1, num2) {
  const c = (num1 * num2) / 5;
  return c;
}

const productDivideByFive = multiplyAndDivideBy5(35, 10);

console.log('The product is:', productDivideByFive);

//Prep Javascript Functions part 6

function subtractTwoNumbers(num1, num2) {
  const c = num1 - num2;
  return c;
}

const difference = subtractTwoNumbers(22, 7);

console.log('The difference is:', difference);

//Prep Javascript Functions part 7

function getCircleCircumference(radius) {
  const c = 2 * radius * 3.14;
  return c;
}

const circumference = getCircleCircumference(5);

console.log('The circumference is:', circumference);

//Prep Javascript Function part 8

function getFullName(firstName, lastName) {
  c = firstName + ' ' + lastName;
  return c;
}

const fullName = getFullName('Sam', 'Castaneda');

console.log('The Full Name is:', fullName);

//Prep Javascript Functions part 8

function cube(number) {
  c = number * number * number;
  return c;
}

const cubed = cube(5);

console.log('The value of the number cubed is: ', cubed);
