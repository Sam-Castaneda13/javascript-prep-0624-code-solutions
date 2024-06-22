//Prep Javascript conditionals part 1
function isAdult(age) {
  if (age < 18) {
    let c = false;
    return c;
  } else {
    let c = true;
    return c;
  }
}

//Calling the Function
const isAdultResult = isAdult(21);

console.log('isAdultResult is:', isAdultResult);

//Prep Javascript Conditionals part 2
function didStudentPass(score) {
  if (score < 70) {
    const c = false;
    return c;
  } else {
    const c = true;
    return c;
  }
}

//Calling the Function
const didStudentPassResults = didStudentPass(70);

//Log The Result
console.log('Did the student Pass:', didStudentPassResults);

//Prep Javascript Conditionals part 3

function gradeCalculator(score) {
  if (score < 60) {
    const c = 'F';
    return c;
  } else if (score < 70) {
    const c = 'D';
    return c;
  } else if (score < 80) {
    const c = 'C';
    return c;
  } else if (score < 90) {
    const c = 'B';
    return c;
  } else if (score < 100) {
    const c = 'A';
    return c;
  } else if (score > 100) {
    const c = 'A++';
    return c;
  }
}

//Call The Function
const gradeCalculatorResult = gradeCalculator(101);

//Log The Result
console.log('Your Grade is:', gradeCalculatorResult);

//Prep Javascript Conditional part 4

function seasonMessenger(season) {
  if (season === 'summer') {
    const c = 'it is hot today';
    return c;
  } else if (season === 'spring') {
    const c = 'the flowers are blooming';
    return c;
  } else if (season === 'autumn') {
    const c = 'the leaves are changing colors';
    return c;
  } else if (season === 'winter') {
    const c = 'it is cold today';
    return c;
  } else {
    const c = 'please enter a valid season';
    return c;
  }
}

//Call the function
const seasonMessengerResult = seasonMessenger('autumn');

//Log the Result
console.log(seasonMessengerResult);

//Prep Javascript Conditional part 5

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    const c = 'have a good weekend';
    return c;
  } else {
    const c = 'It is a weekday!';
    return c;
  }
}

//Call The Function
const dayDetectorResult = dayDetector('monday');

//Log the Result
console.log(dayDetectorResult);
