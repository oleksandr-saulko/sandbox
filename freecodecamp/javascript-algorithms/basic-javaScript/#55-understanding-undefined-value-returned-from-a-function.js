// ❓DESCRIPTION:
// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// setup:
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// ✅SOLUTION:

function addFive() {
  sum += 5;
}

addThree();
addFive();