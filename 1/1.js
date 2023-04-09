// 1.Write a function in JavaScript that takes an array of integers and returns the sum of all even numbers in the array.

function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}


const myArray = [11,12,13,14,15,16];
const sumOfEvens = sumEvenNumbers(myArray);
console.log(sumOfEvens); 