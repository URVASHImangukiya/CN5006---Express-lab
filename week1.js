const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('This, is my first program');
console.log('Welcome John, your monthly salary is 500000');

const num1 = 5;
const num2 = 3;

const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const sub = num1 - num2;
console.log('The subtraction of ' + num1 + ' and ' + num2 + ' is: ' + sub);

const mul=num1*num2;
console.log('The multiplication of ' + num1 + ' and '+ num2 + ' is: ' + mul);

const div= num1/num2;
console.log('The division of ' + num1 + ' and ' + num2 + ' is: ' + div);

rl.question("Enter a number: ", function(mynumber) {
    mynumber = parseInt(mynumber);

    if (mynumber > 0) {
        console.log(mynumber + ' is a positive number');
    } else if (mynumber === 0) {
        console.log(mynumber + ' is Zero');
    } else {
        console.log(mynumber + ' is a negative number');
    }

    rl.close();  // Close the input stream
});
