// ЦИКЛИ

function Numbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
Numbers([]);

function solve() {
  for (let i = 1; i <= 3; i++) {
    console.log("Bottom bun");
    console.log("Mustard");
    console.log("Meat");
    console.log("Lettuce");
    console.log("Top bun");
  }
}
solve();

function NumbersBackwards(input) {
  let n = Number(input.shift());
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
NumbersBackwards(["2"]);
NumbersBackwards(["3"]);
NumbersBackwards(["5"]);

function Num3(input) {
  let n = Number(input.shift());
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}
Num3(["10"]);

function EvenPowers(input) {
  let n = Number(input.shift());
  for (let i = 0; i <= n; i += 2) {
    let result = Math.pow(2, i);
    console.log(result);
  }
}
EvenPowers(["3"]);

function Text() {
  let name = "Softuni";
  console.log(name.length);
  let ch = name[5];
  console.log(ch);
}
Text([]);

function Softuni(input) {
  let name = input.shift();
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}
Softuni(["softuni"]);

function Vowels(input) {
  let text = input.shift();
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    switch (ch) {
      case "a":
        result += 1;
        break;
      case "e":
        result += 2;
        break;
      case "i":
        result += 3;
        break;
      case "o":
        result += 4;
        break;
      case "u":
        result += 5;
        break;
    }
  }
  console.log(result);
}
Vowels(["hello"]);
Vowels(["hi"]);
Vowels(["bamboo"]);
Vowels(["beer"]);

function SumNumbers(input) {
  let n = Number(input.shift());
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let num = Number(input.shift());
    sum += num;
  }
  console.log(sum);
}
SumNumbers(["2", "10", "20"]);

function BigNumbers(input) {
  let n = Number(input.shift());
  let smallest = Number.MAX_SAFE_INTEGER;
  let biggest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let num = Number(input.shift());
    if (num < smallest) {
      smallest = num;
    }
    if (num > biggest) {
      biggest = num;
    }
  }
  console.log(`Max number: ${biggest}`);
  console.log(`Min number: ${smallest}`);
}
BigNumbers(["5", "10", "20", "304", "0", "50"]);
BigNumbers(["6", "250", "5", "2", "0", "100", "1000"]);

function Sum(input) {
  let n = Number(input.shift());
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i <= n * 2; i++) {
    let num = Number(input.shift());
    if (i <= n) {
      leftSum += num;
    } else {
      rightSum += num;
    }
  }
  if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else {
    let diff = Math.abs(leftSum - rightSum);
    console.log(`No, diff = ${diff}`);
  }
}
Sum(["2", "10", "90", "60", "40"]);
Sum(["2", "90", "9", "50", "50"]);

function OddEvenSum(input) {
  let n = Number(input.shift());
  let evenSum = 0;
  let oddSum = 0;
  for (i = 1; i <= n; i++) {
    let num = Number(input.shift());
    if (i % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  if (evenSum === oddSum) {
    console.log("Yes");
    console.log(`Sum = ${evenSum}`);
  } else {
    let diff = Math.abs(evenSum - oddSum);
    console.log("No");
    console.log(`Diff = ${diff}`);
  }
}
OddEvenSum(["4", "10", "50", "60", "20"]);
OddEvenSum(["4", "3", "5", "1", "-2"]);
OddEvenSum(["3", "5", "8", "1"]);

function Lily(input) {
  let age = Number(input.shift());
  let priceWashingMachine = Number(input.shift());
  let singlePriceToy = Number(input.shift());

  let countOfToys = 0;
  let money = 0;
  let incomimingMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 !== 0) {
      countOfToys += 1;
    } else {
      money += incomimingMoney;
      incomimingMoney += 10;
      money -= 1;
    }
  }
  money += countOfToys * singlePriceToy;
  if (priceWashingMachine <= money) {
    console.log(`Yes! ${(money - priceWashingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWashingMachine - money).toFixed(2)}`);
  }
}
Lily(["10", "170.00", "6"]);
Lily(["21", "1570.98", "3"]);

function Numbers1000() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
Numbers1000();

function Element(input) {
  let n = Number(input.shift()); // общият брой числа, случая е 7
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // цикъла се върти докато i = общият брой числа
    let currentNumber = Number(input.shift()); // всяко следващо от числата изброени долу след 7-цата
    sum += currentNumber; // сумата се е надграждала след всяко число в цикъла и накрая е след всичките числа, тотал
    // след като сме добавили всяко текущо число към общата сума, правим проверка
    if (currentNumber > max) {
      max = currentNumber; // презаписваме стойността на max
    }
  }
  let result = sum - max;
  if (result === max) {
    console.log("Yes");
    console.log(`Sum = ${result}`);
  } else {
    console.log("No");
    console.log(`Diff = ${Math.abs(result - max)}`);
  }
}
Element(["7", "3", "4", "1", "1", "2", "12", "1"]);
Element(["3", "1", "1", "10"]);
Element(["3", "5", "5", "1"]);
Element(["3", "1", "1", "1"]);

function evenodd(input) {
  let n = Number(input.shift());
  let OddSum = 0;
  let OddMin = Number.MAX_SAFE_INTEGER;
  let OddMax = Number.MIN_SAFE_INTEGER;
  let EvenSum = 0;
  let EvenMin = Number.MAX_SAFE_INTEGER;
  let EvenMax = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input.shift());
    if (i % 2 === 0) {
      EvenSum += currentNumber;
      if (currentNumber > EvenMax) {
        EvenMax = currentNumber;
      }
      if (currentNumber < EvenMin) {
        EvenMin = currentNumber;
      }
    } else {
      OddSum += currentNumber;
      if (currentNumber > OddMax) {
        OddMax = currentNumber;
      }
      if (currentNumber < OddMin) {
        OddMin = currentNumber;
      }
    }
  }
  console.log(`OddSum=${OddSum.toFixed(2)},`);
  if (
    OddMin !== Number.MAX_SAFE_INTEGER &&
    OddMax !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`OddMin=${OddMin.toFixed(2)},`);
    console.log(`OddMax=${OddMax.toFixed(2)},`);
  } else {
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${EvenSum.toFixed(2)},`);
  if (
    EvenMin !== Number.MAX_SAFE_INTEGER &&
    EvenMax !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`EvenMin=${EvenMin.toFixed(2)},`);
    console.log(`EvenMax=${EvenMax.toFixed(2)}`);
  } else {
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
  }
}
evenodd(["6", "2", "3", "5", "4", "2", "1"]);
evenodd(["1", "-5"]);

function histogram(input) {
  let n = Number(input.shift());
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input.shift());

    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let p1Percent = (p1 / n) * 100;
  let p2Percent = (p2 / n) * 100;
  let p3Percent = (p3 / n) * 100;
  let p4Percent = (p4 / n) * 100;
  let p5Percent = (p5 / n) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);

function Divide(input) {
  let n = Number(input.shift());
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input.shift());
    if (currentNumber % 2 === 0) {
      p1++;
    }
    if (currentNumber % 3 === 0) {
      p2++;
    }
    if (currentNumber % 4 === 0) {
      p3++;
    }
  }
  let p1Percent = (p1 / n) * 100;
  let p2Percent = (p2 / n) * 100;
  let p3Percent = (p3 / n) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
}
Divide([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);

function salary(input) {
  let tabs = Number(input.shift());
  let salary = Number(input.shift());

  for (let i = 1; i <= tabs; i++) {
    let currentSite = input.shift();
    switch (currentSite) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (salary > 0) {
    console.log(salary);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);

function solve() {
  for (let i = 0; i < 2; i += 0.5) {
    console.log(i + ", ");
  }
}
solve();

// ======================================
FOR;
function solve() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}
solve();

// WHILE
function solve() {
  let i = 5;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
solve();
// ======================================

function Words(input) {
  let text = input.shift();
  while (text !== "Stop") {
    text = input.shift;
  }
  console.log(text);
}
Words(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop"]);

function password(input) {
  let name = input.shift();
  let password = input.shift();

  let data = input.shift();
  while (data !== password) {
    data = input.shift();
  }
  console.log(`Welcome ${name}!`);
}
password(["Nakov", "1234", "pass", "1324", "1234"]);

function Sum(input) {
  let com = input.shift();
  let sum = 0;
  while (com !== "Stop") {
    let num = Number(com);
    sum += num;
    com = input.shift();
  }
  console.log(sum);
}
Sum(["10", "20", "30", "45", "Stop"]);
Sum(["1", "2", "3", "4", "5", "6", "Stop"]);

function rownNumbers(input) {
  let n = Number(input.shift());
  let currentNum = 1;
  while (n >= currentNum) {
    console.log(currentNum);
    currentNum = currentNum * 2 + 1;
  }
}
rownNumbers(["17"]);

function solve(input) {
  let transactionCount = Number(input.shift());
  let balance = 0;
  let counter = 1;

  while (transactionCount >= counter) {
    let num = Number(input.shift());
    if (num < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += num;
    console.log(`Increase: ${num.toFixed(2)}`);
    counter++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
solve([["3", "5.51", "69.42", "100"]]);
solve(["5", "120", "45.55", "-150"]);

function solve(input) {
  let n = +input.shift();
  let max = Number.MIN_SAFE_INTEGER;
  let counter = 0;

  while (counter < n) {
    let num = +input.shift();
    if (num > max) {
      max = num;
    }
    counter++;
  }
  console.log(max);
}
solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999"]);
solve(["2", "-1", "-2"]);

function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while (n > counter) {
    let num = +input.shift();
    if (num < min) {
      min = num;
    }
    counter++;
  }
  console.log(min);
}
solve(["2", "99", "100"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999"]);
solve(["2", "-1", "-2"]);

function graduation(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;

  while (counter <= 12) {
    let currentgrade = Number(input.shift());
    if (currentgrade >= 4.0) {
      sum += currentgrade;
      counter++;
    }
  }
  let gradeAverage = sum / 12;
  console.log(`${name} graduated. Average grade: ${gradeAverage.toFixed(2)}`);
}
graduation([
  "Pesho",
  "4",
  "5.5",
  "6",
  "5.43",
  "4.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
  "6",
]);
graduation([
  "Ani",
  "5",
  "5.32",
  "6",
  "5.43",
  "5",
  "6",
  "5.5",
  "4.55",
  "5",
  "6",
  "5.56",
  "6",
  "5",
]);

function graduationpart2(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;
  let excluded = 0;
  let isExcluded = false;

  while (counter <= 12) {
    let currentgrade = Number(input.shift());
    if (currentgrade < 4.0) {
      excluded++;
    }
    if (currentgrade >= 4.0) {
      sum += currentgrade;
      counter++;
    }
    if (excluded >= 2) {
      isExcluded = true;
      break;
    }
  }
  if (isExcluded == false) {
    let gradeAverage = sum / 12;
    console.log(`${name} graduated. Average grade: ${gradeAverage.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${counter} grade`);
  }
}
graduationpart2([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduationpart2(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

function moving(input) {
  let width = Number(input.shift());
  let length = Number(input.shift());
  let height = Number(input.shift());

  let totalFreeSpace = width * length * height;

  let command = input.shift();

  while (command !== "Done") {
    let box = Number(command);
    totalFreeSpace -= box;
    if (totalFreeSpace < 0) {
      break;
    }
    command = input.shift();
  }
  if (totalFreeSpace < 0) {
    console.log(
      `No more free space! You need ${Math.abs(
        totalFreeSpace
      )} Cubic meters more.`
    );
  } else {
    console.log(`${totalFreeSpace} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122", ""]);
moving(["10", "1", "2", "4", "6", "Done"]);

function library(input) {
  let book = input.shift();
  let libraryCapacity = Number(input.shift());

  let counter = 0;
  let isFound = false;

  while (counter < libraryCapacity) {
    let currentBook = input.shift();
    if (currentBook === book) {
      console.log(`You checked ${counter} books and found it.`);
      isFound = true;
      break;
    }
    counter++;
  }
  if (isFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${counter} books.`);
  }
}
library(["Troy", "8", "Stronger", "Life Style", "Troy"]);
library([
  "The Spot",
  "4",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "",
]);
library([
  "Bourne",
  "32",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);

function exam(input) {
  let numberOfNegativeGrade = Number(input.shift());

  let command = input.shift();

  let countOfNegativeGrade = 0;
  let lastProblem = "";
  let countOfProblems = 0;
  let resolveProblemsCount = 0;
  let isNeedBreak = false;
  let totalGrade = 0;

  while (command !== "Enough") {
    let taskName = command;
    let grade = Number(input.shift());
    lastProblem = taskName;
    countOfProblems++;

    if (grade <= 4.0) {
      countOfNegativeGrade++;
    }
    resolveProblemsCount++;
    totalGrade += grade;

    if (countOfNegativeGrade == numberOfNegativeGrade) {
      isNeedBreak = true;
      break;
    }
    command = input.shift();
  }

  if (isNeedBreak) {
    console.log(`You need a break, ${numberOfNegativeGrade} poor grades.`);
  } else {
    console.log(
      `Average score: ${(totalGrade / resolveProblemsCount).toFixed(2)}`
    );
    console.log(`Number of problems: ${resolveProblemsCount}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
exam([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
  "",
]);
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4", ""]);

function vacation(input) {
  let moneyNeeded = Number(input.shift());
  let moneyCurrent = Number(input.shift());

  let spendCounter = 0;
  let daysCounter = 0;

  while (moneyCurrent < moneyNeeded) {
    daysCounter++;
    let action = input.shift();
    let money = Number(input.shift());

    if (action === "spend") {
      moneyCurrent -= money;
      if (moneyCurrent < 0) {
        moneyCurrent = 0;
      }
      spendCounter++;
    } else if (action === "save") {
      moneyCurrent += money;
      spendCounter = 0;
    }
    if (spendCounter == 5) {
      break;
    }
  }
  if (spendCounter == 5) {
    console.log("You can't save the money.");
    console.log(`${daysCounter}`);
  } else {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

function walking(input) {
  let action = input.shift();
  let stepsSum = 0;

  while (action !== `Going home`) {
    let daySteps = Number(action);
    stepsSum += daySteps;
    if (stepsSum >= 10000) {
      break;
    }
    action = input.shift();
  }

  if (action === `Going home`) {
    stepsSum += Number(input.shift());
  }
  if (stepsSum >= 10000) {
    console.log(`Goal reached! Good job!`);
  } else {
    console.log(`${10000 - stepsSum} more steps to reach goal.`);
  }
}
walking(["1000", "1500", "2000", "6500", ""]);

function cake(input) {
  let w = Number(input.shift());
  let l = Number(input.shift());

  let cakeArea = w * l;
  let command = input.shift();

  while (command !== "STOP") {
    let pieces = Number(command);
    cakeArea -= pieces;
    if (cakeArea < 0) {
      break;
    }
    command = input.shift();
  }
  if (cakeArea >= 0) {
    console.log(`${cakeArea} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(cakeArea)} pieces more.`
    );
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);

function coins(input) {
  let money = Number(input.shift());
  let count = 0;
  let coins = Math.floor(money * 100);

  while (coins > 0) {
    if (coins - 200 >= 0) {
      coins -= 200;
      count++;
    } else if (coins - 100 >= 0) {
      coins -= 100;
      count++;
    } else if (coins - 50 >= 0) {
      coins -= 50;
      count++;
    } else if (coins - 20 >= 0) {
      coins -= 20;
      count++;
    } else if (coins - 10 >= 0) {
      coins -= 10;
      count++;
    } else if (coins - 5 >= 0) {
      coins -= 5;
      count++;
    } else if (coins - 2 >= 0) {
      coins -= 2;
      count++;
    } else if (coins - 1 >= 0) {
      coins -= 1;
      count++;
    }
  }
  console.log(count);
}
coins(["1.23"]);
coins(["2"]);
coins(["2.73"]);
