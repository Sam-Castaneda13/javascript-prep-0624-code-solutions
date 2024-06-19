//Variables for Test 1
const number1 = 3;
const number2 = 7;
let product;
//The Calculations of part one
product = number1 * number2;

//Log the Product
console.log('The value of', number1, 'and', number2, 'is', product);
console.log('The data type of Product is:', typeof product);

//Variables for Test 2
const charge = 200;
const payment = 169;
let amountRemaining;

//Calculations for test 2
amountRemaining = charge - payment;

//Log the amountRemaining
console.log(
  'You pay $',
  payment,
  'of your $',
  charge,
  'bill then you have $',
  amountRemaining,
  'remaining'
);
console.log('The data type of amountRemaining is:', typeof amountRemaining);

//Variables for test 3
const test = 75;
const assignments = 99;
const final = 87;
let grade;

//Calculations for test 3
grade = (test + assignments + final) / 3;

//log the grade
console.log('The average of your test, assignment, and final is', grade);
console.log('The data type of grade is:', typeof grade);

//Variables for Test 4
const firstName = 'Sam';
const lastName = 'Castaneda';
let fullName;

//Calculations for Test 4
fullName = firstName + ' ' + lastName;

//Log the fullName
console.log('Your full name is:', fullName);
console.log('The Data type of fullName is', typeof fullName);

//Variables for Test 5
const pH = 100;
let isAcidic;

//Calculations
isAcidic = pH < 7;

//Log the isAcidic
console.log('Is this item Acidic:', isAcidic);
console.log('The Data type of isAcidic is:', typeof isAcidic);

//Variables for Test 6
const numberOfSoldiers = 50000;
let isSparta;

//Calculations for Test 6
isSparta = numberOfSoldiers === 300;

//Log the isSparta
console.log(
  'The strict equality comparison of',
  'Number of Soldier',
  numberOfSoldiers,
  'and 300 is',
  isSparta
);
console.log('The Data type of isSparta is:', typeof isSparta);

//Variables for Test 7
let nickname = fullName;

//Calculations for Test 7
nickname += ' is the GOAT';

//Log the nickname
console.log('The value of nickName is:', nickname);
console.log('The Data Type of nickname is: ', typeof nickname);
