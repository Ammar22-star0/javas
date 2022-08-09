/* // Variable Challenge
let pagTitle = "Elzero",
  pagDescription = "Elzero Web School",
  pagDate = "25/10";
let card = `<div>
<h3>Hello ${pagTitle}</h3>
<p>${pagDescription}</p>
<span>${pagDate}</span>
</div>`;
document.write(card.repeat(4));
 */
/* let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * 19 + e * 3 + 30 + g * 10); // 2000
console.log(-d + e * 2 + f + g * 3); // 173 */
/*
  Number Challenge
*/

/* let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log((Math.round(Math.floor(b) - 133.33 + d * 0 )-0.33).toString()); // 66.67 => String
console.log(Math.round(Math.floor(b) - 133.33 + d * 0 )); // 67 => Number */
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
/* 
let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substr(-4, 1).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 7) + a.substr(-6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1, length - 1).toUpperCase() + a.slice(-1).toLowerCase())// eLZERO WEB SCHOOl */
/*
  If Condition Challenge
*/

/* let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School string";

// W Position May Change
if (!(st === "34")) {
  console.log("Good");
}
if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
} */

/*
  Switch Challenge
*/
/* 
let job = "IT";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`My Salary is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`My Salary is ${salary}`);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`My Salary is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`My Salary is ${salary}`);
} */
/*
  If Challenge
*/

/* let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
 */

/*
  Array Challenge
*/

/* let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]; */

// Write Code Here

/* console.log(my.slice(0, 4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

my.splice(--zero, counter + counter, "Elzero"); // "Elzero"

console.log(my);
my.splice(zero, counter + counter, "rO");
console.log(my); */

let theName = "  Ahmed  ";


console.log(theName.startsWith("h"));

