// COMP229 M22 Lab1
// Kay Yan Cheung 301183574

var myValue = Math.max(1, 2, 3, 4, 5, 6, 7, 8);

function sum(...args) {
  let numSum = 0;
  for (const arg of args) {
    numSum += arg;
  }

  return numSum;
}

var myArray = [4, 5, 1, 2];

function sumX(a, b, ...args) {
  let sum = 0;
  let product = a * b;
  for (const arg of args) {
    sum += arg;
  }

  return [product, sum];
}
