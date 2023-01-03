/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both 
versions).
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmiJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(bmiMark1, bmiJohn1);

const markHigherBMI1 = bmiMark1 > bmiJohn1;
console.log(markHigherBMI1);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(bmiMark2, bmiJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);


/* Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement. */

if (bmiMark1 > bmiJohn1) {
  console.log(`Mark's BMI (${bmiMark1}) is higher than John's (${bmiJohn1})!`);
} else {
  console.log(`John's BMI (${bmiJohn1}) is higher than Mark's (${bmiMark1})!`);
}

if (bmiMark2 > bmiJohn2) {
  console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})!`);
} else {
  console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`);
}