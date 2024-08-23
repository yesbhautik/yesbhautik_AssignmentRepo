const funcbase = require("./assignment");

// Test cases
const testcase_func_1 = [
  ["listen", "silent"],
  ["hello", "world"],
  ["racecar", "racecar"],
  ["apple", "elppa"],
  ["good", "dog"],
];

console.log(
  "-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Is  Anagram]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_1.forEach((testcase) => {
  const res = funcbase.isAnagram(testcase[0], testcase[1]);

  console.log(`[${testcase[0]},${testcase[1]}] => ${res}`);
});

const testcase_func_2 = [
  [
    {
      category: "Food",
      amount: 100,
    },
    {
      category: "Transportation",
      amount: 50,
    },
    {
      category: "Food",
      amount: 200,
    },
    {
      category: "Transportation",
      amount: 80,
    },
  ],
  [
    {
      category: "Entertainment",
      amount: 200,
    },
    {
      category: "Investment",
      amount: 2000,
    },
    {
      category: "Food",
      amount: 50,
    },
  ],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Total Spent By Category]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_2.forEach((testcase, index) => {
  const res = funcbase.calculateTotalSpentByCategory(testcase);

  console.log(`TestCase_${index + 1} => ${JSON.stringify(res)}`);
});

const testcase_func_3 = [
  [1, 23, 6, 14, 6, 3],
  [7, 14, 2, 9, 11, 5],
  [8, 19, 3, 12, 7, 1],
  [4, 16, 5, 10, 8, 2],
  [9, 21, 4, 13, 6, 0],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Largest Element]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_3.forEach((testcase) => {
  const res = funcbase.findLargestElement(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_4 = ["taste", "racecar", "level", "hello", "madam"];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Is Palindrome]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_4.forEach((testcase) => {
  const res = funcbase.isPalindrome(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_5 = [1000, 100000, 1000000, 10000000];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Calculate Time]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_5.forEach((testcase) => {
  const res = funcbase.calculateTime(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_6 = [
  "White",
  "Education",
  "Programming",
  "Beautiful",
  "Sky",
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Count  Vowels]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_6.forEach((testcase) => {
  const res = funcbase.countVowels(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_7 = [
  [6, 2, 6, 4, 5, 7, 8, 10],
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  [7, 14, 21, 28, 35],
  [3, 6, 9, 12, 15],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Sum Array]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_7.forEach((testcase) => {
  const res = funcbase.sumArray(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_8 = [
  [6, 2, 6, 4, 5, 7, 8, 10],
  [12, 34, 56, 78, 90],
  [101, 202, 303, 404, 505],
  [17, 29, 35, 48, 59, 63, 72],
  [3, 16, 27, 45, 58, 69, 72, 81, 94],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Filter Even Numbers]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_8.forEach((testcase) => {
  const res = funcbase.filterEvenNumber(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_9 = [
  [15, 23, 42, 56, 78, 91, 102, 115],
  [33, 47, 59, 68, 72, 84, 95],
  [123, 234, 345, 456, 567],
  [19, 28, 37, 46, 55, 64, 73, 82],
  [5, 14, 23, 32, 41, 50, 59, 68, 77, 86],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Smallest Element]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_9.forEach((testcase) => {
  const res = funcbase.findSmallestElement(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_10 = [
  "takeover",
  "hello",
  "world",
  "JavaScript",
  "VisualStudioCode",
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Reverse String]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_10.forEach((testcase) => {
  const res = funcbase.reverseString(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_11 = [5, 8, 11, 2, 54, 19];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Fibonacci Numbers]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_11.forEach((testcase) => {
  const res = funcbase.fibonacci(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_12 = [
  [5, 2, 2, 7, 45, 8, 3, 2, 8],
  [1, 1, 2, 3, 4, 4, 5, 6, 6],
  [10, 20, 20, 30, 40, 50, 50, 60],
  [7, 8, 9, 9, 10, 11, 11, 12],
  [100, 200, 200, 300, 400, 500, 500, 600],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Remove Duplicates]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_12.forEach((testcase) => {
  const res = funcbase.removeDuplicates(testcase);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_13 = [
  ["large", "e"],
  ["prototye", "o"],
  ["example", "e"],
  ["function", "n"],
  ["unique", "u"],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Count Occurrences]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_13.forEach((testcase) => {
  const res = funcbase.countOccurrences(testcase[0], testcase[1]);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_14 = [
  [
    [1, 2, 3, 4, 5],
    [2, 12, 4, 1, 7, 9],
  ],
  [
    [10, 20, 30, 40],
    [15, 20, 25, 30, 35],
  ],
  [
    [5, 10, 15, 20, 25],
    [3, 6, 9, 12, 15, 18, 21],
  ],
  [
    [7, 14, 21, 28],
    [14, 28, 42, 56],
  ],
  [
    [100, 200, 300, 400],
    [50, 100, 150, 200, 250],
  ],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Common Elements]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_14.forEach((testcase) => {
  const res = funcbase.findCommonElements(testcase[0], testcase[1]);

  console.log(`[${testcase}] => ${res}`);
});

const testcase_func_15 = [
  ["White", "Education", "Programming", "Beautiful", "Sky"],
  ["Apple", "Banana", "Carrot", "Dog", "Elephant"],
  ["Hello", "World", "JavaScript", "VisualStudioCode", "NodeJS"],
  ["Lion", "Tiger", "Elephant", "Zebra", "Giraffe"],
  ["Red", "Green", "Blue", "Yellow", "Orange"],
];

console.log(
  "\n-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-[Sort Strings]-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"
);

testcase_func_15.forEach((testcase) => {
  const res = funcbase.sortStrings(testcase);

  console.log(`[${testcase}] => ${res}`);
});
