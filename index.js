"Strict";

let days;

switch (new Date().getDay()) {
  case 0:
    days = "Sunday";
    break;
  case 1:
    days = "Monday";
    break;
  case 2:
    days = "Tuesday";
    break;
  case 3:
    days = "Wednesday";
    break;
  case 4:
    days = "Thursday";
    break;
  case 5:
    days = "Friday";
    break;
  case 6:
    days = "Saturday";
    break;
}
// console.log("Today is " + day);

// Quadratic Equation
let root1, root2;
let a = 1;
let b = 6;
let c = 5;

//calculating discriminant b*b-4ac
let discriminant = b * b - 4 * a * c;

//if discriminant > 0 roots would be real & different
if (discriminant > 0) {
  root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
  root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;

  console.log(root1, root2);
}

//if discriminant == 0 roots are real and equal
else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(root1, root2);
}
//if discriminant < 0 final cond
else {
  let real = (-b / (2 * a)).toFixed(2);
  let imaginary = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  console.log(`${real} + ${imaginary}i and ${real} - ${imaginary}i`);
}

//convert KM to Miles
let km = 10;
//1 km in miles = 0.62137119
const mile = 0.62137119;
console.log(`10 km is equal to ${km * mile}`);

//convert celsius to fahrenheit
let celsius = -49;

console.log(`${celsius} degree celsius is equal to ${celsius * 1.8 + 32}`);

//check if a number is + - or 0
let num = 1;
if (num > 0) console.log(`${num} is positive`);
else if (num < 0) console.log(`${num} is negative`);
else console.log(`${num} is zero`);
// console.log("hi");
// Armstrong Number
//works for 3 digit numbers only
//to make it work for n digit number result += rem * num of digits(length of the number)
const armNum = 153;
let dup = armNum;
let result = 0;
while (dup != 0) {
  let rem = dup % 10;
  result += rem * rem * rem;
  dup = parseInt(dup / 10);
}
console.log(result);
if (result == armNum) console.log(`${armNum} is an Armstrong Number`);
else console.log(`${armNum} is not an Armstrong Number`);
//Fibonacci
// const sequence = 10;
// let n = 0;
// let n1 = 1;
// let n2, i;
// for (i = 1; i <= sequence; i++) {
//   console.log(n);
//   n2 = n + n1;
//   n = n1;
//   n1 = n2;
// }

//Find Armstrong between two intervals
const low = 8;
const high = 100;
let j;
for (j = low; j <= high; j++) {
  let numOfDigits = j.toString().length;
  let sum = 0;
  let temp = j;
  while (temp != 0) {
    let remainder = temp % 10;
    sum += remainder * numOfDigits;
    temp = parseInt(temp / 10);
  }
  // console.log(sum);
  if (sum == j) console.log(sum);
}
//Sum of N Natural Numbers
const natural = 10;
let sum = 0;
for (let k = 0; k <= natural; k++) {
  sum += k;
}
console.log(`sum of ${natural} natural numbers is ${sum}`);

//check if the 2 numbers have same last digit
let num1 = 300;
let num2 = 21;

let str1 = num1.toString();
let str2 = num2.toString();
if (str1.slice(str1.length - 1) == str2.slice(str2.length - 1))
  console.log(`last digits of ${num1} and ${num2} are same`);

//HCF or GCD
const number1 = 60;
const number2 = 72;
let hcf;
for (let k = 1; k <= number1 && number2; k++) {
  if (number1 % k == 0 && number2 % k == 0) {
    hcf = k;
  }
}
console.log(`${hcf} is Highest common factor`);

//LCM
const l1 = 6;
const l2 = 8;
let min = l1 > l2 ? l1 : l2;

while (true) {
  if (min % l1 == 0 && min % l2 == 0) {
    console.log(`LCM of ${l1} and ${l2} is ${min}`);
    break;
  }
  min++;
}

//Factors
const f = 10;
for (let i = 1; i <= f; i++) {
  if (f % i == 0) console.log(i);
}
//Recursion sum of Natural
const sumNatural = function (natural) {
  if (natural > 0) {
    return natural + sumNatural(natural - 1);
  } else {
    return natural;
  }
};
const output = sumNatural(natural);
console.log(output);

//Recursion Fibonacci
const Fibonacci = function (fib) {
  if (fib < 2) {
    return fib;
  }
  return Fibonacci(fib - 1) + Fibonacci(fib - 2);
};
const sequence = 10;
for (let i = 0; i <= sequence; i++) {
  console.log(Fibonacci(i));
}

//Recursion Factorial
const Factorial = function (fact) {
  if (fact < 1) return 1;
  else {
    return fact * Factorial(fact - 1);
  }
};
console.log(Factorial(5));

//Convert decimal to Binary

function convertToBinary(decimal) {
  let binary = 0;
  let i = 1,
    rem;
  while (decimal != 0) {
    rem = decimal % 2;
    decimal = parseInt(decimal / 2);
    binary = binary + rem * i;
    i *= 10;
  }
  console.log(binary);
}
let decimal = 9;

convertToBinary(decimal);

//ASCII value
let str = "f";
const ascii = str.charCodeAt(0);
console.log(ascii);

//Palindrome
let string = "malayalam";
let strArr = [];

for (let i = string.length - 1; i >= 0; i--) {
  strArr.push(string[i]);
}
let reverse = strArr.join("");
if (string == reverse) console.log(`${string} is a palindrome`);

//Alphabetical order
const name = "joseph";
const nameArr = name.split("");
nameArr.sort();
let order = nameArr.join("");
console.log(order);

//replace
const sentence = "Hello World";
let newSentence = sentence.replace("Hello", "Ola");
console.log(newSentence);

//Object creation ways
//1. object literal
const menu = {
  manager: "Bob",
  headChef: "Monica",
  souChef: "Petra",
  Cuisines: ["Indian", "Chinese", "Ítalian", "Mexican", "American"],
  timings: {
    mon_fri_open: 8,
    mon_fri_close: 10,
    sat_sun_open: 8,
    sat_sun_close: 12,
  },
};
//2. object creation using instance of object directly
const menu2 = new Object({
  manager: "Bobby",
  headChef: "Janice",
  souChef: "anna",
  Cuisines: ["Indian", "American", "Ítalian", "Mexican", "American"],
  timings: {
    mon_fri_open: 8,
    mon_fri_close: 10,
    sat_sun_open: 8,
    sat_sun_close: 12,
  },
});

//3.using constructor function
function RestaurantMenu() {
  (this.manager = "bob"),
    (this.headChef = "Monica"),
    (this.souChef = "Petra"),
    (this.Cuisines = ["Indian", "Chinese", "Ítalian", "Mexican", "American"]);
  this.timings = {
    mon_fri_open: 8,
    mon_fri_close: 10,
    sat_sun_open: 8,
    sat_sun_close: 12,
  };
}
const restaurantMenu = new RestaurantMenu();
console.log(restaurantMenu.manager);

// Date and Time Functions
const date1 = new Date();
const date2 = new Date(2023, 10, 27, 18, 30, 00);
console.log(date2);
console.log(date1);
console.log(date1 > date2);

//Leap year check
// let year = 2000;
// if ((year % 400 == 0 && year % 4 == 0) || year % 100 != 0)
//   console.log(`${year} is leap year`);
// else console.log(`${year} is not a leap year`);

//Format the date
let fullDate = new Date();
let date = fullDate.getDate();
let year = fullDate.getFullYear();
let month = fullDate.getMonth() + 1;
console.log(fullDate);
if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

const formatDate = date + "/" + month + "/" + year;
console.log(formatDate);

//Count character occurences in a string
function countCharacter(word, letter) {
  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word.charAt(i) == letter) count += 1;
  }
  return count;
}

console.log(countCharacter("Hello", "l"));

//RegEx patterns are used with few methods of string to match char comb

//regex literal enclosed btw slashes
const re = /ab+c/;
console.log(re);

//regex calling the constructor function
const re1 = new RegExp("ab+c");
console.log(re1);
//useful in matching patterns in two strings
const strOne = "Vishnu";
const vowelCheck = strOne.match(/[aeiou]/gi).length;
console.log(vowelCheck);
//or else use includes method

//String methods
const main = "Hello World";
const checkString = "Hello";

if (main.startsWith(checkString)) {
  console.log("Yes");
}
if (main.endsWith(checkString)) {
  console.log("No"); //doesn't print
}
//Replace all occurences of a string
let stringOne = "GOOD Morning JavaScript, Morning World, Morning Tea";
//regex
const regex = /Morning/gi; //g refers to global replacement across string and i refers to case insensitive
const newString = stringOne.replace(regex, "Evening");
console.log(newString);

//Multiline String
const multiLineString =
  "hellooooooo hiiii \n" + "Hello two three one \n" + "Good Morning";
console.log(multiLineString);

//Currency formatter to string
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatter.format(10000));

//Random String
const randomString = Math.random().toString(36).substring(3, 8);
console.log(randomString);
//trim
const stringTrimmy = "            Hello spaces";
console.log(stringTrimmy.trim());

//converting above menu2 object to string
const stringObject = JSON.stringify(menu2);
console.log(stringObject);
console.log(typeof stringObject);
//conatins substring?
const hello = "Hello";
console.log(stringTrimmy.includes(hello));
console.log(stringTrimmy.toUpperCase() == hello.toUpperCase());

//convert a string to base64 and back
//base64 binary to text encoding schemes

const base64 = window.btoa(hello);
console.log(base64);
console.log(window.atob(base64));

const myName = "tatavarthy Vishnu Priya";

const myPerfectName = myName.replace(/t/, "T");
console.log(myPerfectName);

//replace line breaks
//pattern that check for breaks /(\r\n|\r|\n)/g
const breakString = multiLineString.replace(/(\r\n|\r|\n)/g, "  ");
console.log(breakString);

//Arrays
const arr = [1, 6, 3, 4, 5, 6, 6];
const n = 6;
const index = arr.indexOf(n);
if (index != -1) {
  arr.splice(index, 1); // 2nd parameter delets that index as mentioned no.of times
}
console.log(arr);

console.log(arr.includes(6));
arr.splice(1, 0, 2);
console.log(arr);

// const obj = {                           |
//   a: 2,                                 |
//   b: 3,                                 |    // doesnt work
// };                                      |
// const arrObj = arr.push(obj);           |
// console.log(arrObj);                    |

const obj = { x: 1, y: 2 };
arr.splice(arr.length, 0, obj);
console.log(arr);

console.log(Array.isArray(arr));
// arr.splice(0, arr.length);
// console.log(arr);
//Unshift
arr.unshift(0);
console.log(arr);
//shift
arr.shift();
console.log(arr);
//remove duplicates using set
let unique = [...new Set(arr)];
console.log(unique);
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 4, 6, 7];
const merge = [...arr1, ...arr2];
const mergeUnique = [...new Set(merge)];
console.log(mergeUnique);

//2D Array
let arrTwoD = [];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    arrTwoD[i] = [];
  }
}
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    arrTwoD[i][j] = j;
  }
}

console.log(arrTwoD);

const arrObjOne = [
  { one: 1, Two: 2, Three: 3 },
  { one: 10, Two: 20, Three: 30 },
];
const prop = "one";
const extract = arrObjOne.map((item) => item[prop]);
console.log(extract);

//comapre arrays
const compArr = JSON.stringify(arr1) == JSON.stringify(arr2);
console.log(compArr);
//also possible with for loop by comparing each index to know the element comparison

//Random element from array
console.log(arr[Math.floor(Math.random() * arr.length)]);

//Intersect arrays
const setA = new Set(arr1);
const setB = new Set(arr2);
const intersect = [];

for (let i of setA) {
  if (setB.has(i)) intersect.push(i);
}
console.log(intersect);
//Split Arrays
const bigArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let splits = [];
for (let i = 0; i < bigArr.length; i += 3) {
  splits = bigArr.slice(i, i + 3);
  console.log(splits);
}
const file = "index.js";
const ext = file.split(".").pop();
console.log(ext);

let vari = undefined;
if (vari == null) console.log(true);
else console.log(false);

// let city;
// function Address(city = "HYD", area) {
//   console.log(city, area);
// }
// Address(city, "A.S.Rao Nagar");

//Set operations
//union and intersection done above
//difference
const setOne = new Set([1, 2, 3, 4]);
const setTwo = new Set([1, 1, 5, 6]);

function difference(setOne, setTwo) {
  const diff = new Set(setOne);
  for (i of setTwo) {
    diff.delete(i);
  }
  return diff;
}
console.log(difference(setOne, setTwo));

// Generate random number btw two numbers
let max = 30;
let mini = 13;
const randomInterval = Math.floor(Math.random() * (max - mini + 1) + mini);
console.log(randomInterval);

//GET url
const url1 = window.location.href;
const url2 = document.URL;
// console.log(url1);
// console.log(url2);

//Validate mail
const mail1 = "tatavarthyvishnupriya877@gmail.com";
const mail2 = "jndjnjndjmail.com";
const regex_mail_checker =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (regex_mail_checker.test(mail2)) console.log("Valid");

const fnExpr = function hello() {
  console.log("EMpty");
};

if (fnExpr instanceof Function) {
  console.log("Yes");
}

const object = {
  programmingLang: "JavaScript",
  editor: "VSCode",
  project: "Training",
  developer: "Vishnupriya",
  otherLang: ["HTML", "CSS", "ReactNative"],
};

console.log(object);

// delete object.editor;
//or
delete object["editor"];
console.log(object);

console.log("developer" in object);

//Object clone
const objectClone = Object.assign({}, object);
console.log(objectClone);
//Cloning this way ensures that original isnt effected with changes to dup
objectClone.developer = "Tatavarthy Vishnu Priya";
console.log(objectClone);
console.log(object);

//loop thru object
for (let i in object) {
  let value = object[i];
  console.log(value);
}

//merge objects
//if both objs have same keys it overwrites
const obj1 = {
  name: "Tim",
  age: "25",
};
const obj2 = {
  profession: "Teacher",
  Country: "Austrailia",
};
const fullObj = { ...obj1, ...obj2 };
console.log(fullObj);

//count keys in objs
let count = 0;
for (let key in obj1) {
  ++count;
}
console.log(count);
obj2.subject = "Coding";
console.log(obj2);

//Form Validation
// function validateform() {
//   var name = document.myform.name.value;
//   var password = document.myform.password.value;

//   if (name == null || name == "") {
//     alert("Name can't be blank");
//     return false;
//   } else if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
//     return false;
//   }
// }
//set timeout
const myTimeOut = setTimeout(message, 10000);

function message() {
  console.log("Timeout cleared 10 secs");
}
console.log(myTimeOut);

// clearTimeout(myTimeOut);
//set Interval

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}

//OOPS
class Alien {
  // Name of the class
  // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  // These will be the object's methods.
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}
const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.name);

//Exception Handling
const numerator = 10;
const denominator = "x";
try {
  console.log(numerator / denominator);
  console.log(x);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

//Sort array by object property
let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];
employees.sort((a, b) => {
  return a.age - b.age;
});

employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});

function* iterate(a, b) {
  for (let i = a; i <= b; ++i) yield i;
}

function range(a, b) {
  if (typeof a === "string") {
    let res = [...iterate(a.charCodeAt(), b.charCodeAt())].map((n) =>
      String.fromCharCode(n)
    );
    console.log(res);
  } else {
    let result = [...iterate(a, b)];
    console.log(result);
  }
}
range(1, 10);
range("A", "E");

//Stack
class Stack {
  constructor() {
    this.items = [];
  }
  add(s) {
    return this.items.push(s);
  }
  remove() {
    if (this.items.length > 0) return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
let stack = new Stack();
stack.add(5);
stack.add(6);
stack.add(7);
console.log(stack.items);
stack.remove();
console.log(stack.items);
console.log(stack.peek());

console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.items);

//Queue
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enQueue(q) {
    this.items[this.tail] = q;
    this.tail++;
  }
  deQueue() {
    let dq = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return dq;
  }
  peek() {
    let pk = this.items[this.head];
    return pk;
  }
  size() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}

let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.items);
queue.deQueue();
console.log(queue.items);
console.log(queue.peek());
queue.clear();
console.log(queue.items);

//Get dimensions
// program to get the dimensions of an image

const img = new Image();
// "E:\Wallpapers\rose-pink-.jpg"
// get the image
img.src = "rose-pink-.jpg";

// get height and width
img.onload = function () {
  console.log("width " + this.width);
  console.log("height " + this.height);
};
const x = new Date();
console.log(x.getTime());

//shuffle deck of cards
// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}
// console.log(deck);
// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

console.log("The first five cards are:");

// display 5 results
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}
