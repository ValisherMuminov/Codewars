/* 1. Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]*/
const reverseSeq = (n) => {
  let res = [];
  for (let i = n; i >= 1; i--) {
    res.push(i);
  }
  return res;
};
console.log(reverseSeq(5));
//////////////////////////////////////////////////////////////////////////////

/* 2. 6KYU Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
 The input will be a non-negative integer.
  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */

const digitalRoot = (n) => {
  while (n >= 10) {
    let sum = 0;
    for (let digit of String(n)) {
      sum += Number(digit);
    }
    n = sum;
  }
  return n;
};
console.log(digitalRoot(15), 6);
console.log(digitalRoot(456), 6);
//------------------------------------------------------------------------
function digital_root(n) {
  if (n < 10) {
    return n;
  }
  n = n.toString().split("");
  var result = 0;
  for (let i = 0; i < n.length; i++) {
    result += parseInt(n[i]);
  }
  return result < 10 ? result : digital_root(result);
}
console.log(digital_root(45));
//////////////////////////////////////////////////////////////////////////////

/* 3. Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different.
 She added a special case to her function, but she made a mistake.
Can you help her? */
function greet(name) {
  //return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log(greet("Jim"));

/* 4. I'm new to coding and now I want to get the sum of two arrays...
 Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
arrayPlusArray([1, 2, 3], [4, 5, 6]), 21*/
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 2]), 17);

//------------------------------------------------------------
function arrayPlusArray2(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}
console.log(arrayPlusArray2([1, 2, 3], [1, 5, 6]), 18);

//------------------------------------------------------------
function arrayPlusArray3(arr1, arr2) {
  let sum = 0;
  for (let num of arr1) {
    sum += num;
  }
  for (let num of arr2) {
    sum += num;
  }
  return sum;
}
console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]), 21);


