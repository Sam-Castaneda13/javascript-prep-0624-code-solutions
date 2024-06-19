//Exercise 1 Object
const person = {
  //This is my Object which is Person
  firstName: 'Sam',
  lastName: 'Castaneda',
  hobby: 'Coding',
};

//Variables for Exercise 1
let firstName;
let lastName;
let hobby;

//Calculations for Exercise 1
firstName = person.firstName;
lastName = person.lastName;
hobby = person.hobby;

//Log the Object
console.log('The data of the object person:', person);
console.log("The Person's first name is:", firstName);
console.log("The Person's last name is:", lastName);
console.log("The Person's hobby is:", hobby);

//Exercise 2
//Variables
let fullName;

//Calculations
fullName = person.firstName + ' ' + person.lastName;

//Log fullName
console.log("The Person's full name is:", fullName);

//Exercise 3
//Adding Job property to Person Object
person.job = 'Server';

//Exercise 3 Variables
const job = person.job;

//Log job
console.log("The Person's job is:", job);

//Exercise 4
//Adding pervious job to Person Object using Bracket Notation
person['previousJob'] = 'Cashier';

//Exercise 4 Variables
const previousJob = person.previousJob;

//Log previousJob
console.log("The Person's previous job is:", previousJob);

//Exercise 5

//Logging the new version of Object Person
console.log('The new version of Object person:', person);
