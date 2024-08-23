/*
  1: Write a function `isAnagram` which takes 2 parameters and returns
  true/false if those are anagrams or not.
*/

/**
 * Checks if two strings are anagrams.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} Returns true if the strings are anagrams, false otherwise.
 */
function isAnagram(str1, str2) {
  // Return If not same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort
  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
}

/* 
  2: Implement a function `calculateTotalSpentByCategory` which takes 
  a list of transactions as parameter and returns a list of objects 
  where each object is unique category-wise and has total price spent
  as its value.
 */

/**
 * Returns the total amount spent by category.
 *
 * @param {Array<Object>} transactions - The transactions.
 * @returns {Object} Returns the total amount spent by category.
 */
function calculateTotalSpentByCategory(transactions) {
  const category = {};

  transactions.forEach((transaction) => {
    if (!category[transaction.category]) {
      category[transaction.category] = 0;
    }
    category[transaction.category] += transaction.amount;
  });

  return category;
}

/*
  3: Write a function `findLargestElement` that takes an array of numbers 
  and returns the largest element.
*/

/**
 * Returns the largest element in an array.
 *
 * @param {Array<Number>} numbers A List of Numbers.
 * @returns {Number} Returns the largest element in the array.
 */
function findLargestElement(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0];
}

/* 
  4: Implement a function `isPalindrome` which takes a string as 
  argument and returns true/false as its result.
*/

/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str String to Test.
 * @returns {boolean} Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const rev = str.split("").reverse().join("");
  return str == rev;
}

/*
  5: Write a function that calculates the time (in seconds) it takes 
  for the JS code to calculate sum from 1 to n, given n as the input.
*/

/**
 * Calculates the time taken to execute a loop.
 *
 * @param {Number} n Number of Iterations.
 */
function calculateTime(n) {
  const startTime = performance.now();

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  const endTime = performance.now();
  return endTime - startTime;
}

/*
  6: Implement a function `countVowels` that takes a string as an
  argument and returns the number of vowels in the string.
*/

function countVowels(str) {
  const vowels = "AaEeIiOoUu";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

/*
  7: Write a function `sumArray` that takes an array of numbers as
  input and returns the sum of all the numbers.
*/

/**
 *  Returns the sum of all the numbers in an array.
 *
 * @param {Array} nums List of Numbers.
 * @returns {Number} Returns the sum of all the numbers in the array.
 */
function sumArray(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

/*
  8: Implement a function `filterEvenNumbers` that takes an array 
  of numbers and returns a new array containing only the even numbers.
*/

/**
 * Returns a new array containing only the even numbers.
 * @param {Array} nums List of Numbers
 * @returns {Array} Returns a new array containing only the even numbers.
 */
function filterEvenNumber(nums) {
  return nums.filter((num) => num % 2 === 0);
}

/*
  9: Write a function `findSmallestElement` that takes an array of 
  numbers and returns the smallest element.
*/

/**
 * Returns the smallest element in an array.
 *
 * @param {Array} nums List of Numbers.
 * @returns {Number} Returns the smallest element in the array.
 */
function findSmallestElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[0];
}

/*
  10: Create a function `reverseString` that takes a string and returns
  the string reversed.
*/

/**
 *  Returns the string reversed.
 *
 * @param {String} str String to Reverse.
 * @returns {String} Returns the string reversed.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/*
  11: Write a function `fibonacci` that takes a number `n` and returns
  the `n`th number in the Fibonacci sequence.
*/

/**
 *  Returns the nth number in the Fibonacci sequence.
 *
 * @param {Number} num Number
 * @returns {Number} Returns the nth number in the Fibonacci sequence.
 */
function fibonacci(num) {
  var prev = 0;
  var curr = 1;
  for (let i = 1; i < num; ++i) {
    var temp = curr;
    curr += prev;
    prev = temp;
  }
  return prev;
}

/*
  12: Implement a function `removeDuplicates` that takes an array and 
  returns a new array with duplicate values removed.
*/

/**
 * Returns a new array with duplicate values removed.
 *
 * @param {Number} arr List of Numbers.
 * @returns {Array} Returns a new array with duplicate values removed.
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/*
  13: Write a function `countOccurrences` that takes a string and a 
  character and returns the number of times the character appears in 
  the string.
*/

/**
 * Returns the number of times the character appears in the string.
 *
 * @param {String} str A String.
 * @param {String} ch Character to Count.
 * @returns {Number} Returns the number of times the character appears in the string.
 */
function countOccurrences(str, ch) {
  return str
    .split("")
    .reduce((count, curr) => (curr === ch ? 1 : 0) + count, 0);
}

/*
  14: Create a function `findCommonElements` that takes two arrays 
  and returns a new array containing the elements that are present 
  in both arrays.
*/

/**
 * Returns a new array containing the elements that are present in
 * both arrays.
 *
 * @param {Array} arr1 Array 1.
 * @param {Array} arr2 Array 2.
 * @returns {Array} Returns a new array containing the elements that
 *                  are present in both arrays.
 */
function findCommonElements(arr1, arr2) {
  const arr = [];

  for (const v of arr1) {
    if (arr2.includes(v)) arr.push(v);
  }
  return arr;
}

/*
  15: Implement a function `sortStrings` that takes an array of 
  strings and returns the array sorted in alphabetical order.
*/

/**
 * Sorts an array of strings in alphabetical order.
 *
 * @param {Array} strArray List of Strings.
 * @returns {Array} Returns the array sorted in alphabetical order.
 */
function sortStrings(strArray) {
  return strArray.sort();
}

module.exports = {
  isAnagram,
  calculateTotalSpentByCategory,
  findLargestElement,
  isPalindrome,
  calculateTime,
  countVowels,
  sumArray,
  filterEvenNumber,
  findSmallestElement,
  reverseString,
  fibonacci,
  removeDuplicates,
  countOccurrences,
  findCommonElements,
  sortStrings,
};
