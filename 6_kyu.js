
/* Inspired by one of Uncle Bob's TDD Kata
Write a function that generates factors for a given number.
The function takes an integer as parameter and returns a list of integers 
(ObjC: array of NSNumbers representing integers). 
That list contains the prime factors in numerical sequence. 
12 ==>  [2, 2, 3]
*/
const primeFactors = (n) => {
  if (n === 1) return [];
  let limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++)
    if (n % i === 0) return [i, ...primeFactors(n / i)];
  return [n];
};
console.log(primeFactors(16));

///////////////////////////////////////////////////
/* Write a function that accepts an array of 10 integers (between 0 and 9),
 that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"; */

function createPhoneNumber(numbers) {
  let areaCode = numbers.slice(0, 3).join("");
  let firstPart = numbers.slice(3, 6).join("");
  let secondPart = numbers.slice(6).join("");
  let phoneNumber = `(${areaCode}) ${firstPart}-${secondPart}`;
  return phoneNumber;
}

let numbers = [0, 1, 0, 4, 5, 0, 7, 8, 4, 0];
const phoneNumber = createPhoneNumber(numbers);
console.log(phoneNumber);

