//  For Loops - Lab

// function numbersFrom1To100() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// numbersFrom1To100();

// function numbersNTo1(n) {
//   n = Number(n);
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// }
// numbersNTo1("2");
// numbersNTo1("3");
// numbersNTo1("5");

// function numbers1ToNwithStep3(n) {
//   n = Number(n);
//   for (let i = 1; i <= n; i += 3) {
//     console.log(i);
//   }
// }
// numbers1ToNwithStep3("10");
// numbers1ToNwithStep3("7");
// numbers1ToNwithStep3("15");

// let i = 1;
// i += 3;
// i = i + 3

// function evenPowersOf2(num) {
//   num = Number(num);
//   for (let i = 0; i <= num; i += 2) {
//     console.log(Math.pow(2, i));
//   }
// }
// evenPowersOf2("3");
// evenPowersOf2("4");
// evenPowersOf2("5");
// evenPowersOf2("6");
// evenPowersOf2("7");

// function characterSequence(text) {
//   for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
//   }
// }
// characterSequence("softuni");
// characterSequence("ice cream");

// function vowelsSum(text) {
//   let sum = 0;

//   for (let i = 0; i < text.length; i++) {
//     let currentLetter = text[i];
//     switch (char) {
//       case "a":
//         sum += 1;
//         break;
//       case "e":
//         sum += 2;
//         break;
//       case "i":
//         sum += 3;
//         break;
//       case "o":
//         sum += 4;
//         break;
//       case "u":
//         sum += 5;
//         break;
//     }
//   }
//   console.log(sum);
// }
// vowelsSum("hello");
// vowelsSum("hi");
// vowelsSum("bamboo");
// vowelsSum("beer");

// function lettersSum(input) {
//   let product = input.shift();
//   let num = Number(input.shift());
//   let budget = Number(input.shift());
//   let sum = 0;

//   for (let i = 0; i < product.length; i++) {
//     let currentLetter = product[i];
//     if (
//       currentLetter === "a" ||
//       currentLetter === "e" ||
//       currentLetter === "i" ||
//       currentLetter === "o" ||
//       currentLetter === "u" ||
//       currentLetter === "y"
//     ) {
//       sum += 3;
//     } else {
//       sum += 1;
//     }
//   }
//   let price = sum * num;
//   if (budget < price) {
//     console.log(`Cannot buy ${product}. Product value: ${price.toFixed(2)}`);
//   } else if (budget >= price) {
//     console.log(
//       `${product} bought. Money left: ${(budget - price).toFixed(2)}`
//     );
//   }
// }
// lettersSum(["apple", "2", "20"]);
// lettersSum(["milk", "1.4", "8"]);

// function verySpecialNumbers(start, end, n) {
//   start = Number(start);
//   end = Number(end);
//   n = Number(n);

//   for (let i = start; i <= end; i++) {
//     if (i % n ** 2 === 0) {
//       console.log(`Very special number: ${i}`);
//     } else if (i % n === 0) {
//       console.log(`Special number: ${i}`);
//     } else {
//       console.log(i);
//     }
//   }
// }
// verySpecialNumbers("1", "25", "3");
// verySpecialNumbers("1", "10", "4");

// function numberOnThirdPower(n) {
//   n = Number(n);

//   if (n % 2 != 0) {
//     for (i = 1; i <= n; i += 2) {
//       let cube = i ** 3;
//       console.log(`Current number: ${i}. Cube: ${cube}`);
//     }
//   } else if (n % 2 == 0) {
//     for (i = 2; i <= n; i += 2) {
//       let cube = i ** 3;
//       console.log(`Current number: ${i}. Cube: ${cube}`);
//     }
//   }
// }
// numberOnThirdPower(["5"]);
// numberOnThirdPower(["6"]);

// For Loops - Exercise

// function numbersEndingIn7() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// numbersEndingIn7();

// let num = 5;
// num = num + 1;
// num += 1;
// num++;

// // post increment
// console.log(num++);
// //pre increment
// console.log(++num);

// function sumOfSeries() {
//   for (let i = 10; i >= 0; i += 2) {
//     console.log(i);
//   }
// }
// sumOfSeries();

// function solve() {
//   // let text = "Hello";
//   // let length = text.length;
//   // let firstSymbol = text[0];
//   let lastSymbol = text[1000];
//   console.log(length);
// }
// solve();

// function solve() {
//   let text = "Hellohellohellohello";
//   for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
//   }
// }
// solve();

// function numbersEndingin7() {
//   for (let i = 1; i <= 1000; i++) {
//     // 17 % 10 = 7
//     if (i % 10 === 7) {
//       console.log(i);
//     }
//   }
// }
// numbersEndingin7();

// function sumOfSeries(n) {
//   n = Number(n);
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * i;
//   }
//   console.log(sum);
// }
// sumOfSeries(4);

// function specialSumOfNumbers(start, end, divider) {
//   start = Number(start);
//   end = Number(end);
//   divider = Number(divider);

//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % divider === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// specialSumOfNumbers("10", "30", "7");

// function lotaryStatistics(num) {
//   num = Number(num);
//   let oddSigleDigitNumbers = 0;
//   let evenNumbers = 0;
//   let oddNumbersWithSeven = 0;
//   let numbersDividedByHundred = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i < 10 && i % 2 !== 0) {
//       oddSigleDigitNumbers++;
//     }
//     if (i % 2 === 0) {
//       evenNumbers++;
//     }
//     if (i % 2 !== 0 && i % 10 === 7) {
//       oddNumbersWithSeven++;
//     }
//     if (100 % i === 0) {
//       numbersDividedByHundred++;
//     }
//   }
//   let firstPercentage = (oddSigleDigitNumbers / num) * 100;
//   let secondPercentage = (evenNumbers / num) * 100;
//   let thirdPercentage = (oddNumbersWithSeven / num) * 100;
//   let fourthPercentage = (numbersDividedByHundred / num) * 100;
//   console.log(`${firstPercentage.toFixed(2)}%`);
//   console.log(`${secondPercentage.toFixed(2)}%`);
//   console.log(`${thirdPercentage.toFixed(2)}%`);
//   console.log(`${fourthPercentage.toFixed(2)}%`);
// }
// lotaryStatistics("49");
// lotaryStatistics("35");

// function cleverLily(age, washingMachinePrice, toyPrice) {
//   age = Number(age);
//   washingMachinePrice = Number(washingMachinePrice);
//   toyPrice = Number(toyPrice);

//   let savedMoney = 0;
//   let birthdayMoney = 10;

//   for (let year = 1; year <= age; year++) {
//     if (year % 2 !== 0) {
//       savedMoney += toyPrice;
//     } else {
//       savedMoney += birthdayMoney - 1;
//       birthdayMoney += 10;
//     }
//   }
//   if (savedMoney >= washingMachinePrice) {
//     let moneyLeft = savedMoney - washingMachinePrice;
//     console.log(`Yes! ${moneyLeft.toFixed(2)}`);
//   } else {
//     let moneyNeeded = washingMachinePrice - savedMoney;
//     console.log(`No! ${moneyNeeded.toFixed(2)}`);
//   }
// }
// cleverLily("10", "170.00", "6");
// cleverLily("21", "1570.98", "3");

// For Loops - more exercises

// function backToThePast(input) {
//   let moneyGiven = Number(input.shift());
//   let year = Number(input.shift());

//   let age = 18;
//   let moneySpend = 0;

//   for (let i = 1800; i <= year; i++) {
//     if (i % 2 === 0) {
//       moneySpend += 12000;
//     } else {
//       moneySpend += 12000 + 50 * age;
//     }
//     age++;
//   }
//   if (moneyGiven >= moneySpend) {
//     console.log(
//       `Yes! He will live a carefree life and will have ${(
//         moneyGiven - moneySpend
//       ).toFixed(2)} dollars left.`
//     );
//   } else {
//     console.log(
//       `He will need ${Math.abs(moneyGiven - moneySpend).toFixed(
//         2
//       )} dollars to survive.`
//     );
//   }
// }
// backToThePast(["50000", "1802"]);
// backToThePast(["100000.15", "1808"]);

// function hospital(input) {
//   let days = Number(input.shift());

//   let doctors = 7;
//   let treatedP = 0;
//   let untreatedP = 0;

//   for (let i = 1; i <= days; i++) {
//     let currentPatient = Number(input.shift());
//     if (i % 3 === 0 && untreatedP > treatedP) {
//       doctors++;
//     }
//     if (currentPatient <= doctors) {
//       treatedP += currentPatient;
//     } else {
//       treatedP += doctors;
//       untreatedP += currentPatient - doctors;
//     }
//   }
//   console.log(`Treated patients: ${treatedP}.`);
//   console.log(`Untreated patients: ${untreatedP}.`);
// }
// hospital(["4", "7", "27", "9", "1"]);
// hospital(["6", "25", "25", "25", "25", "25", "2"]);
// hospital(["3", "7", "7", "7"]);

// function logistics(input) {
//   let count = Number(input.shift());

//   let sum = 0;
//   let weight = 0;

//   let vanW = 0;
//   let truckW = 0;
//   let trainW = 0;

//   for (let i = 1; i <= count; i++) {
//     let CurrentNum = Number(input.shift());
//     weight += CurrentNum;
//     if (CurrentNum <= 3) {
//       sum += CurrentNum * 200;
//       vanW += CurrentNum;
//     } else if (CurrentNum >= 4 && CurrentNum <= 11) {
//       sum += CurrentNum * 175;
//       truckW += CurrentNum;
//     } else {
//       sum += CurrentNum * 120;
//       trainW += CurrentNum;
//     }
//   }

//   let avg = sum / weight;
//   let pVan = (vanW / weight) * 100;
//   let pTruck = (truckW / weight) * 100;
//   let pTrain = (trainW / weight) * 100;

//   console.log(avg.toFixed(2));
//   console.log(`${pVan.toFixed(2)}%`);
//   console.log(`${pTruck.toFixed(2)}%`);
//   console.log(`${pTrain.toFixed(2)}%`);
// }
// logistics(["4", "1", "5", "16", "3"]);
// logistics(["5", "2", "10", "20", "1", "7"]);

// function grades(input) {
//   let studentsCount = Number(input.shift());
//   let gradesFail = 0;
//   let gradesB4 = 0;
//   let gradesB5 = 0;
//   let gradesTop = 0;
//   let sum = 0;

//   for (let i = 0; i < studentsCount; i++) {
//     let Currentgrade = Number(input.shift());
//     sum += Currentgrade;
//     if (Currentgrade >= 2 && Currentgrade < 3) {
//       gradesFail++;
//     } else if (Currentgrade >= 3 && Currentgrade < 4) {
//       gradesB4++;
//     } else if (Currentgrade >= 4 && Currentgrade < 5) {
//       gradesB5++;
//     } else {
//       gradesTop++;
//     }
//   }
//   let pTop = (gradesTop / studentsCount) * 100;
//   let pB4 = (gradesB4 / studentsCount) * 100;
//   let pB5 = (gradesB5 / studentsCount) * 100;
//   let pFail = (gradesFail / studentsCount) * 100;
//   let avGrade = sum / studentsCount;

//   console.log(`Top students: ${pTop.toFixed(2)}%`);
//   console.log(`Between 4.00 and 4.99: ${pB5.toFixed(2)}%`);
//   console.log(`Between 3.00 and 3.99: ${pB4.toFixed(2)}%`);
//   console.log(`Fail: ${pFail.toFixed(2)}%`);
//   console.log(`Average: ${avGrade.toFixed(2)}`);
// }
// grades([
//   "10",
//   "3",
//   "2.99",
//   "5.68",
//   "3.01",
//   "4",
//   "4",
//   "6",
//   "4.5",
//   "2.44",
//   "5",
//   "",
// ]);
// grades(["6", "2", "3", "4", "5", "6", "2.2", ""]);

// function gameOfIntervals(input) {
//   let num = Number(input.shift());
//   let num0To9 = 0;
//   let num10To20 = 0;
//   let num20To30 = 0;
//   let num30To40 = 0;
//   let num40To50 = 0;
//   let numInv = 0;

//   let sum = 0;

//   for (let i = 0; i < num; i++) {
//     let CurrentNum = Number(input.shift());

//     if (CurrentNum >= 0 && CurrentNum <= 9) {
//       sum += CurrentNum * 0.2;
//       num0To9++;
//     } else if (CurrentNum >= 10 && CurrentNum <= 19) {
//       sum += CurrentNum * 0.3;
//       num10To20++;
//     } else if (CurrentNum >= 20 && CurrentNum <= 29) {
//       sum += CurrentNum * 0.4;
//       num20To30++;
//     } else if (CurrentNum >= 30 && CurrentNum <= 39) {
//       sum += 50;
//       num30To40++;
//     } else if (CurrentNum >= 40 && CurrentNum <= 50) {
//       sum += 100;
//       num40To50++;
//     } else {
//       sum -= sum / 2;
//       numInv++;
//     }
//   }
//   let p0To9 = (num0To9 / num) * 100;
//   let p10To20 = (num10To20 / num) * 100;
//   let p20To30 = (num20To30 / num) * 100;
//   let p30To40 = (num30To40 / num) * 100;
//   let p40To50 = (num40To50 / num) * 100;
//   let pInv = (numInv / num) * 100;

//   console.log(sum.toFixed(2));
//   console.log(`From 0 to 9: ${p0To9.toFixed(2)}%`);
//   console.log(`From 10 to 19: ${p10To20.toFixed(2)}%`);
//   console.log(`From 20 to 29: ${p20To30.toFixed(2)}%`);
//   console.log(`From 30 to 39: ${p30To40.toFixed(2)}%`);
//   console.log(`From 40 to 50: ${p40To50.toFixed(2)}%`);
//   console.log(`Invalid numbers: ${pInv.toFixed(2)}%`);
// }
// gameOfIntervals([
//   "10",
//   "43",
//   "57",
//   "-12",
//   "23",
//   "12",
//   "0",
//   "50",
//   "40",
//   "30",
//   "20",
// ]);

// function bills(input) {
//   let month = Number(input.shift());

//   let water = 20;
//   let internet = 15;
//   let others = 0;

//   let electricityBill = 0;
//   let waterBill = 0;
//   let internetBill = 0;
//   let othersBill = 0;

//   for (let i = 1; i <= month; i++) {
//     let CurrentNum = Number(input.shift());
//     electricityBill += CurrentNum;
//     waterBill += water;
//     internetBill += internet;
//     othersBill =
//       electricityBill +
//       waterBill +
//       internetBill +
//       (electricityBill + waterBill + internetBill) * 0.2;
//   }
//   let avg = (electricityBill + waterBill + internetBill + othersBill) / month;
//   console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
//   console.log(`Water: ${waterBill.toFixed(2)} lv`);
//   console.log(`Internet: ${internetBill.toFixed(2)} lv`);
//   console.log(`Other: ${othersBill.toFixed(2)} lv`);
//   console.log(`Average: ${avg.toFixed(2)} lv`);
// }
// bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
// bills([
//   "8",
//   "123.54",
//   "231.54",
//   "140.23",
//   "100",
//   "122.4",
//   "430",
//   "178.52",
//   "64.2",
// ]);

// function footballLeague(input) {
//   let capacity = Number(input.shift());
//   let fansTotal = Number(input.shift());

//   let sector = "";
//   let fansA = 0;
//   let fansB = 0;
//   let fansV = 0;
//   let fansG = 0;

//   for (let i = 1; i <= fansTotal; i++) {
//     let sector = input.shift();
//     if (sector == "A") {
//       fansA += 1;
//     } else if (sector == "B") {
//       fansB += 1;
//     } else if (sector == "V") {
//       fansV += 1;
//     } else if (sector == "G") {
//       fansG += 1;
//     }
//   }
//   let pFansA = (fansA / fansTotal) * 100;
//   let pFansB = (fansB / fansTotal) * 100;
//   let pFansV = (fansV / fansTotal) * 100;
//   let pFansG = (fansG / fansTotal) * 100;

//   console.log(`${pFansA.toFixed(2)}%`);
//   console.log(`${pFansB.toFixed(2)}%`);
//   console.log(`${pFansV.toFixed(2)}%`);
//   console.log(`${pFansG.toFixed(2)}%`);
//   console.log(`${((fansTotal / capacity) * 100).toFixed(2)}%`);
// }
// footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
// footballLeague([
//   "93",
//   "16",
//   "A",
//   "V",
//   "G",
//   "G",
//   "B",
//   "B",
//   "G",
//   "B",
//   "A",
//   "B",
//   "B",
//   "B",
//   "A",
//   "B",
//   "B",
//   "A",
// ]);
// footballLeague([
//   "1000",
//   "12",
//   "A",
//   "A",
//   "V",
//   "V",
//   "A",
//   "G",
//   "A",
//   "A",
//   "V",
//   "G",
//   "V",
//   "A",
// ]);

// function equalPairs(args) {
//   let number = Number(args[0]);
//   let sumOne = Number(args[1]) + Number(args[2]);
//   let sumTwo = sumOne;

//   for (i = 3; i <= 2 * number; i += 2) {
//     if (Number(args[i]) + Number(args[i + 1]) != sumOne) {
//       let newSum = Number(args[i]) + Number(args[i + 1]);
//       if (Math.abs(newSum - sumTwo) > Math.abs(sumTwo - sumOne)) {
//         sumOne = Number(args[i - 1]) + Number(args[i - 2]);
//         sumTwo = newSum;
//       }
//     }
//   }
//   if (sumOne == sumTwo) {
//     console.log(`Yes, value=${sumTwo}`);
//   } else {
//     console.log("No, maxdiff=" + Math.abs(sumOne - sumTwo));
//   }
// }
// equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
// equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
// equalPairs(["2", "-1", "0", "0", "-1"]);

// function clock(input) {
//   for (let h = 0; h < 24; h++) {
//     for (let min = 0; min < 60; min++) {
//       console.log(`${h} : ${min}`);
//     }
//   }
// }
// clock();

// function clock(input) {
//   for (let h = 0; h < 24; h++) {
//     for (let min = 0; min < 60; min++) {
//       for (let sec = 0; sec < 60; sec++) {
//         console.log(`${h} : ${min} : ${sec}`);
//       }
//     }
//   }
// }
// clock();

//  While Loops - Lab

// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// for(; ;){
//     console.log("Softuni");
// }

// for (let i = 0; i < 2; i += 0.5) {
//   console.log(i + ",");
// }

// let i = 5;
// while (i <= 10) {
//   console.log("i = " + i);
//   i++;
// }

// for (let i = 5; i <= 10; i++) {
//   console.log("i = " + i);
// }

// function readText(input) {
//   let currentword = input.shift();
//   while (currentword !== "Stop") {
//     console.log(currentword);
//     currentword = input.shift();
//   }
// }
// readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "someText", "Stop"]);

// function password(input) {
//   let name = input.shift();
//   let password = input.shift();

//   let data = input.shift();

//   while (data !== password) {
//     data = input.shift();
//   }
//   console.log(`Welcome ${name}!`);
// }
// password(["Nakov", "1234", "pass", "1324", "1234"]);

// function sumNumbers(input) {
//   let inputElement = input.shift();
//   let sum = 0;
//   while (inputElement != "Stop") {
//     let number = Number(inputElement);
//     sum += number;
//     inputElement = input.shift();
//   }
//   console.log(sum);
// }
// sumNumbers(["10", "20", "30", "45", "Stop"]);

// function sequence2kPlus1(input) {
//   let number = Number(input.shift());
//   let currentNumber = 1;

//   while (currentNumber <= number) {
//     console.log(currentNumber);
//     currentNumber = currentNumber * 2 + 1;
//   }
// }
// sequence2kPlus1(["1"]);

//  while(true){  // безкраен цикъл

//  }
//   for(; ;){   // безкраен цикъл

//   }

// let counter = 1;
// while (true) {
//   if (counter > 12) {
//     break;
//   }
//   console.log(counter);
//   counter++;
// }

// let counter = 1;
// while (counter <= 12) {
//   if (counter > 7) {
//     break;
//   }
//   console.log(counter);
//   counter++;
// }

// function accountBalance(input) {
//   let transactionCount = Number(input.shift());
//   let balance = 0;

//   for (let i = 0; i < transactionCount; i++) {
//     let currentAmount = Number(input.shift());
//     if (currentAmount < 0) {
//       console.log(`Invalid operation!`);
//       break;
//     }
//     balance += currentAmount;
//     console.log(`Increase: ${currentAmount.toFixed(2)}`);
//   }
//   console.log(`Total: ${balance.toFixed(2)}`);
// }
// accountBalance(["3", "5.51", "69.42", "100"]);
// accountBalance(["5", "120", "45.55", "-150"]);

// function minNumber(input) {
//   let count = Number(input.shift());
//   let minNumber = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < count; i++) {
//     let number = Number(input.shift());

//     if (minNumber > number) {
//       minNumber = number;
//     }
//   }
//   console.log(minNumber);
// }
// minNumber(["2", "100", "99"]);

function maxNumber(input) {
  let count = Number(input.shift());
  let maxNumber = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < count; i++) {
    let number = Number(input.shift());

    if (maxNumber < number) {
      maxNumber = number;
    }
  }
  console.log(maxNumber);
}
maxNumber(["2", "100", "99"]);
maxNumber(["43", "43.2", "43.1"]);

// function graduation(input) {
//   let name = input.shift();
//   let counter = 1;
//   let sum = 0;

//   while (counter <= 12) {
//     let currentNum = Number(input.shift());
//     if (currentNum >= 4.0) {
//       sum += currentNum;
//       counter++;
//     }
//   }
//   let avrGrade = sum / 12;
//   console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
// }
// graduation([
//   "Pesho",
//   "4",
//   "5.5",
//   "6",
//   "5.43",
//   "4.5",
//   "6",
//   "5.55",
//   "5",
//   "6",
//   "6",
//   "5.43",
//   "5",
//   "6",
// ]);

// function graduationPart2(input) {
//   let name = input.shift();
//   let counter = 1;
//   let sum = 0;
//   let excluded = 0;
//   let isExcluded = false;

//   while (counter <= 12) {
//     let currentGrade = Number(input.shift());
//     if (currentGrade >= 4.0) {
//       sum += currentGrade;
//       counter++;
//     }
//     if (currentGrade < 4.0) {
//       excluded++;
//     }
//     if (excluded >= 2) {
//       isExcluded = true;
//       break;
//     }
//   }
//   if (isExcluded == false) {
//     let avrGrade = sum / 12;
//     console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
//   } else {
//     console.log(`${name} has been excluded at ${counter} grade`);
//   }
// }
// graduationPart2(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

// function moving(input) {
//   let w = +input.shift();
//   let l = +input.shift();
//   let h = +input.shift();
//   let space = w * l * h;
//   let sum = 0;

//   let current = input.shift();
//   while (current !== "Done") {
//     let currentBox = Number(current);
//     sum += currentBox;

//     if (sum >= space) {
//       console.log(
//         `No more free space! You need ${Math.abs(
//           space - sum
//         )} Cubic meters more.`
//       );
//       break;
//     }
//     current = input.shift();
//   }
//   if (current === "Done") {
//     console.log(` ${Math.abs(sum - space)} Cubic meters left.`);
//   }
// }
// moving(["10", "1", "2", "4", "6", "Done"]);

//  While Loops - Exercises

// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// let num = 1;
// while (true) {
//   if (num === 3) {
//     break;
//   }
//   num++;
// }
// console.log(num);

// function oldBooks(input) {
//   let favouriteBook = input.shift();
//   let booksNum = Number(input.shift());

//   let counter = 0;
//   //  булев флаг
//   let bookNeeded = false;

//   let currentBook = input.shift();
//   while (counter < booksNum) {
//     if (currentBook == favouriteBook) {
//       bookNeeded = true;
//       break;
//     }
//     counter++;
//     currentBook = input.shift();
//   }
//   if (bookNeeded == false) {
//     console.log("The book you search is not here!");
//     console.log(`You checked ${counter} books.`);
//   } else {
//     console.log(`You checked ${counter} books and found it.`);
//   }
// }
// oldBooks(["Troy", "8", "Stronger", "Life Style", "Troy", ""]);

// function examPreparation(input) {
//   let negativeGrades = Number(input.shift());
//   let negativeGradesCount = 0;
//   let goodGradesCounter = 0;
//   let sumGrades = 0;
//   let lastProblem = "";

//   while (negativeGradesCount < negativeGrades) {
//     let currentTask = input.shift();
//     let currentGrade = Number(input.shift());

//     if (currentTask === "Enough") {
//       let avrGrade = (sumGrades / goodGradesCounter).toFixed(2);
//       console.log(`Average score: ${avrGrade}`);
//       console.log(`Number of problems: ${goodGradesCounter}`);
//       console.log(`Last problem: ${lastProblem}`);
//       break;
//     } else {
//       sumGrades += currentGrade;
//       goodGradesCounter++;
//       lastProblem = currentTask;
//     }

//     if (currentGrade <= 4) {
//       negativeGradesCount++;
//     }
//   }
//   if (negativeGradesCount === negativeGrades) {
//     console.log(`You need a break, ${negativeGrades} poor grades.`);
//   }
// }
// examPreparation([
//   "3",
//   "Money",
//   "6",
//   "Story",
//   "4",
//   "Spring Time",
//   "5",
//   "Bus",
//   "6",
//   "Enough",
// ]);

// function vacation(input) {
//   let moneyNeeded = +input.shift();
//   let money = +input.shift();

//   let counter = 0;
//   let days = 0;

//   while (money <= moneyNeeded && counter <= 5) {
//     let action = input.shift();
//     let currentMoney = +input.shift();

//     if (action === "save") {
//       days++;
//       money += currentMoney;
//       counter = 0;

//       if (money >= moneyNeeded) {
//         console.log(`You saved the money for ${days} days.`);
//         break;
//       }
//     } else if (action === "spend") {
//       counter++;
//       days++;
//       money -= currentMoney;

//       if (money <= 0) {
//         money = 0;
//       }
//     }
//     if (counter === 5) {
//       console.log("You can't save the money.");
//       console.log(`${days}`);
//       break;
//     }
//   }
// }
// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

/* stepsMade = 0;
stepsNeeded = 10 000

while stepsMade < stepsNeeded

command = input.shift();
 ако командата е Going Home
  събираме стъпките към вкъщи
  break;

  иначе, събираме текущите стъпки
  
  ако имаме нужните стъпки- принтираме един изход
  иначе - друг
  */

// function walking(input) {
//   let stepsNeeded = 10000;
//   let stepsMade = 0;

//   while (stepsMade < stepsNeeded) {
//     let command = input.shift();
//     if (command === "Going home") {
//       stepsMade += Number(input.shift());
//       break;
//     }
//     stepsMade += Number(command);
//   }

//   if (stepsMade >= stepsNeeded) {
//     console.log(`Goal reached! Good job!`);
//   } else {
//     let diff = stepsNeeded - stepsMade;
//     console.log(`${diff} more steps to reach goal.`);
//   }
// }
// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);

/* 
2лв, 1лв, 50ст, 20ст, 10ст, 5ст, 2ст, 1ст
прехвърляме на стотинки като * по 100
pennies = money * 100
coinsCount = 0;

while(pennies > 0)
if(pennies >= 200){
  pennies -= 200;
  coinsCount++;
} else if(pennies >= 100){
  pennies -= 100;
  coinsCount++;
}
*/

// function coins(input) {
//   let money = +input.shift();
//   let pennies = money * 100;
//   let coinsCount = 0;

//   while (pennies > 0) {
//     if (pennies >= 200) {
//       pennies -= 200;
//       coinsCount++;
//     } else if (pennies >= 100) {
//       pennies -= 100;
//       coinsCount++;
//     } else if (pennies >= 50) {
//       pennies -= 50;
//       coinsCount++;
//     } else if (pennies >= 20) {
//       pennies -= 20;
//       coinsCount++;
//     } else if (pennies >= 10) {
//       pennies -= 10;
//       coinsCount++;
//     } else if (pennies >= 5) {
//       pennies -= 5;
//       coinsCount++;
//     } else if (pennies >= 2) {
//       pennies -= 2;
//       coinsCount++;
//     } else if (pennies >= 1) {
//       pennies -= 1;
//       coinsCount++;
//     }
//     pennies = Math.round(pennies);
//   }
//   console.log(coinsCount);
// }
// coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
// coins(["2.73"]);

// function cake(input) {
//   let side1 = Number(input.shift());
//   let side2 = Number(input.shift());
//   let size = side1 * side2;
//   let piecesTaken = 0;
//   let command = input.shift();

//   while (command !== "STOP") {
//     piecesTaken += Number(command);
//     if (piecesTaken > size) {
//       break;
//     }
//     command = input.shift();
//   }
//   if (piecesTaken > size) {
//     console.log(
//       `No more cake left! You need ${piecesTaken - size} pieces more.`
//     );
//   } else {
//     console.log(`${size - piecesTaken} pieces are left.`);
//   }
// }
// cake(["10", "10", "20", "20", "20", "20", "21"]);
// cake(["10", "2", "2", "4", "6", "STOP"]);

//  While Loops - More exercises

// function dishwasher(input) {
//   let bottlesWithdetergent = Number(input.shift());
//   let DetergentOwned = bottlesWithdetergent * 750;
//   let DetergentNeeded = 0;
//   let plates = 0;
//   let pots = 0;
//   let counter = 1;

//   while (true) {
//     let command = input.shift();
//     if (command === "End") {
//       break;
//     }
//     if (counter % 3 === 0) {
//       DetergentNeeded += command * 15;
//     } else {
//       DetergentNeeded += command * 5;
//     }
//     if (DetergentNeeded > DetergentOwned) {
//       break;
//     }
//     if (counter % 3 === 0) {
//       pots += Number(command);
//     } else {
//       plates += Number(command);
//     }
//     counter++;
//   }
//   if (DetergentNeeded <= DetergentOwned) {
//     console.log(`Detergent was enough!`);
//     console.log(`${plates} dishes and ${pots} pots were washed.`);
//     console.log(
//       `Leftover detergent ${Math.abs(DetergentOwned - DetergentNeeded)} ml.`
//     );
//   } else {
//     console.log(
//       `Not enough detergent, ${Math.abs(
//         DetergentNeeded - DetergentOwned
//       )} ml. more necessary!`
//     );
//   }
// }
// dishwasher(["2", "53", "65", "55", "End"]);
// dishwasher(["1", "10", "15", "10", "12", "13", "30"]);

// function reportSystem(input) {
//   let requiredSum = Number(input.shift());

//   let expectedSum = 0;
//   let counter = 1;
//   let cardTransactionSum = 0;
//   let cashTransactionSum = 0;
//   let cardCounter = 0;
//   let cashCounter = 0;

//   while (true) {
//     let command = input.shift();
//     if (command === "End") {
//       break;
//     }
//     if (counter % 2 === 0) {
//       if (command < 10) {
//         console.log("Error in transaction!");
//       } else {
//         console.log("Product sold!");
//         cardTransactionSum += Number(command);
//         expectedSum += Number(command);
//         cardCounter++;
//       }
//     } else {
//       if (command > 100) {
//         console.log("Error in transaction!");
//       } else {
//         console.log("Product sold!");
//         cashTransactionSum += Number(command);
//         expectedSum += Number(command);
//         cashCounter++;
//       }
//     }

//     if (expectedSum >= requiredSum) {
//       break;
//     }
//     counter++;
//   }
//   if (expectedSum >= requiredSum) {
//     let avrCash = cashTransactionSum / cashCounter;
//     let avrCard = cardTransactionSum / cardCounter;
//     console.log(`Average CS: ${avrCash.toFixed(2)}`);
//     console.log(`Average CC: ${avrCard.toFixed(2)}`);
//   } else {
//     console.log("Failed to collect required money for charity.");
//   }
// }
// reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
// reportSystem(["600", "86", "150", "98", "227", "End"]);

// function streamOfLetters(input) {
//   let word = "";

//   let isCappear = false;
//   let isOappear = false;
//   let isNappear = false;

//   let symbol;
//   while ((symbol = input.shift()) !== "End") {
//     if (
//       !((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z"))
//     ) {
//       continue;
//     }

//     switch (symbol) {
//       case "c":
//         if (isCappear == true) {
//           word += symbol;
//         }
//         isCappear = true;
//         break;
//       case "o":
//         if (isOappear == true) {
//           word += symbol;
//         }
//         isOappear = true;
//         break;
//       case "n":
//         if (isNappear == true) {
//           word += symbol;
//         }
//         isNappear = true;
//         break;
//       default:
//         word += symbol;
//         break;
//     }

//     if (isCappear == true && isOappear == true && isNappear == true) {
//       console.log(`${word} `);
//       isCappear = false;
//       isOappear = false;
//       isNappear = false;
//       word = "";
//     }
//   }
// }
// streamOfLetters([
//   "H",
//   "n",
//   "e",
//   "l",
//   "l",
//   "o",
//   "o",
//   "c",
//   "t",
//   "c",
//   "h",
//   "o",
//   "e",
//   "r",
//   "e",
//   "n",
//   "e",
//   "End",
// ]);
// streamOfLetters([
//   "%",
//   "!",
//   "c",
//   "^",
//   "B",
//   "`",
//   "o",
//   "%",
//   "o",
//   "o",
//   "M",
//   ")",
//   "{",
//   "n",
//   "\\",
//   "A",
//   "D",
//   "End",
// ]);
// streamOfLetters([
//   "o",
//   "S",
//   "%",
//   "o",
//   "l",
//   "^",
//   "v",
//   "e",
//   "c",
//   "n",
//   "&",
//   "m",
//   "e",
//   "c",
//   "o",
//   "n",
//   "End",
// ]);

// function numbersDividedby3WithoutReminder() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// }
// numbersDividedby3WithoutReminder();

// function averageNumber(input) {
//   let n = Number(input.shift());
//   let counter = 0;
//   let sum = 0;

//   while (counter < n) {
//     let currentNumber = Number(input.shift());
//     sum += currentNumber;
//     counter++;
//   }
//   let avr = sum / counter;
//   console.log(avr.toFixed(2));
// }
// averageNumber(["4", "3", "2", "4", "2"]);
// averageNumber(["2", "6", "4"]);
// averageNumber(["3", "82", "43", "22"]);
// averageNumber(["4", "95", "23", "76", "23"]);

// Nested Loops - Lab

// function clock() {
//   for (let hour = 0; hour <= 24; hour++) {
//     for (let min = 0; min <= 60; min++) {
//       if (hour < 10 && min < 10) {
//         console.log(`0${hour}:0${min}`);
//       } else {
//         console.log(`${hour}:${min}`);
//       }
//     }
//   }
// }
// clock();

// function multiplicationTable() {
//   let result = 0;
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       let result = i * j;
//       console.log(`${i} * ${j} = ${result}`);
//     }
//   }
// }
// multiplicationTable();

// function combinations(input) {
//   let n = Number(input.shift());
//   let counter = 0;
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       for (let k = 0; k <= n; k++) {
//         if (i + j + k === n) {
//           sum = n;
//           counter++;
//         }
//       }
//     }
//   }
//   console.log(counter);
// }
// combinations(["25"]);
// combinations(["20"]);
// combinations(["5"]);

// function sumOfTwoNumbers(input) {
//   let numStart = Number(input.shift());
//   let numEnd = Number(input.shift());
//   let numMagic = Number(input.shift());
//   let counter = 0;
//   let isFound = false;

//   for (let i = numStart; i <= numEnd; i++) {
//     for (let z = numStart; z <= numEnd; z++) {
//       counter++;
//       if (i + z === numMagic) {
//         isFound = true;
//         console.log(`Combination N:${counter} (${i} + ${z} = ${numMagic})`);
//         break;
//       }
//     }
//     if (isFound) {
//       break;
//     }
//   }
//   if (!isFound) {
//     console.log(`${counter} combinations - neither equals ${numMagic}`);
//   }
// }
// sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["23", "24", "20"]);
// sumOfTwoNumbers(["88", "888", "1000"]);
// sumOfTwoNumbers(["88", "888", "2000"]);

// function travelling(input) {
//   let destination = input.shift();
//   let budget = Number(input.shift());

//   let savedMoney = 0;
//   let counter = 1;

//   while (destination !== "End") {
//     counter++;

//     while (savedMoney < budget) {
//       savedMoney += Number(input.shift());
//       counter++;
//     }
//     console.log(`Going to ${destination}!`);
//     destination = input.shift();
//     budget = Number(input.shift());
//     savedMoney = 0;
//   }
// }
// travelling([
//   "Greece",
//   "1000",
//   "200",
//   "200",
//   "300",
//   "100",
//   "150",
//   "240",
//   "Spain",
//   "1200",
//   "300",
//   "500",
//   "193",
//   "423",
//   "End",
// ]);
// travelling([
//   "France",
//   "2000",
//   "300",
//   "300",
//   "200",
//   "400",
//   "190",
//   "258",
//   "360",
//   "Portugal",
//   "1450",
//   "400",
//   "400",
//   "200",
//   "300",
//   "300",
//   "Egypt",
//   "1900",
//   "1000",
//   "280",
//   "300",
//   "500",
//   "End",
// ]);

// function building(input) {
//   let floor = Number(input.shift());
//   let room = Number(input.shift());

//   let result = "";

//   for (let floorCounter = floor; floorCounter > 0; floorCounter--) {
//     let result = "";
//     for (let roomCounter = 0; roomCounter < room; roomCounter++) {
//       if (floor === floorCounter) {
//         result += `L${floorCounter}${roomCounter} `;
//       } else if (floorCounter % 2 === 0) {
//         result += `O${floorCounter}${roomCounter} `;
//       } else {
//         result += `A${floorCounter}${roomCounter} `;
//       }
//     }
//     console.log(result);
//   }
// }
// building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);

// function cinemaTickets(input) {
//   let nameMovie = input.shift();
//   let sum = 0;
//   let countStudentTickets = 0;
//   let countStandardTickets = 0;
//   let countKidsTickets = 0;

//   while (nameMovie !== "Finish") {
//     let freeSpace = Number(input.shift());
//     let typeTicket = input.shift();
//     let sellTicket = 0;

//     while (typeTicket !== "End") {
//       if (typeTicket === "student") {
//         countStudentTickets++;
//       } else if (typeTicket === "standard") {
//         countStandardTickets++;
//       } else if (typeTicket === "kid") {
//         countKidsTickets++;
//       }
//       sellTicket++;
//       sum++;
//       if (sellTicket >= freeSpace) {
//         break;
//       }
//       typeTicket = input.shift();
//     }
//     let percentSpace = (sellTicket / freeSpace) * 100;

//     console.log(`${nameMovie} - ${percentSpace.toFixed(2)}% full.`);
//     nameMovie = input.shift();
//   }
//   let percentStudent = (countStudentTickets / sum) * 100;
//   let percentStandard = (countStandardTickets / sum) * 100;
//   let percentKid = (countKidsTickets / sum) * 100;
//   console.log(`Total tickets: ${sum}`);
//   console.log(`${percentStudent.toFixed(2)}% student tickets.`);
//   console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
//   console.log(`${percentKid.toFixed(2)}% kids tickets.`);
// }
// cinemaTickets([
//   "Taxi",
//   "10",
//   "standard",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "standard",
//   "End",
//   "Scary Movie",
//   "6",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "Finish",
// ]);
// cinemaTickets([
//   "The Matrix",
//   "20",
//   "student",
//   "standard",
//   "kid",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "The Green Mile",
//   "17",
//   "student",
//   "standard",
//   "standard",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "Amadeus",
//   "3",
//   "standard",
//   "standard",
//   "standard",
//   "Finish",
// ]);

// Nested Loops - Exercise

//   решение Кирил
// function numberPyramid(input) {
//   let n = Number(input.shift());
//   let currentNumber = 1;
//   let isOver = false;

//   for (let row = 1; row <= n; row++) {
//     let currentRowOutput = "";
//     for (let col = 1; col <= row; col++) {
//       currentRowOutput += currentNumber + " ";
//       if (currentNumber === n) {
//         console.log(currentRowOutput);
//         isOver = true;
//         break;
//       }

//       currentNumber++;
//     }
//     if (isOver) {
//       break;
//     }
//     console.log(currentRowOutput);
//   }
// }
// numberPyramid(["7"]);

// function numberPyramid(input) {
//   let n = Number(input.shift());
//   let current = 1;
//   let isBigger = false;
//   let printCurrentLine = "";

//   for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= row; col++) {
//       if (current > n) {
//         isBigger = true;
//         break;
//       }
//       printCurrentLine += current + " ";
//       current++;
//     }
//     console.log(printCurrentLine);
//     printCurrentLine = "";
//     if (isBigger) {
//       break;
//     }
//   }
// }
// numberPyramid(["7"]);
// numberPyramid(["10"]);
// numberPyramid(["12"]);
// numberPyramid(["15"]);
// numberPyramid(["1"]);
// numberPyramid(["2"]);
// numberPyramid(["3"]);
// numberPyramid(["50"]);

// решение Кирил
//   function equalSumsEvenOddPosition(input) {
//   let start = Number(input.shift());
//   let end = Number(input.shift());
//   let output = "";

//   for (let i = start; i <= end; i++) {
//     let evenSum = 0;
//     let oddSum = 0;
//     let currentNum = i.toString();

//     for (let j = 0; j < currentNum.length; j++) {
//       let digit = Number(currentNum[j]);
//       if (j % 2 === 0) {
//         evenSum += digit;
//       } else {
//         oddSum += digit;
//       }
//     }
//     if (evenSum === oddSum) {
//       output += currentNum + " ";
//     }
//   }
//   console.log(output);
// }
// equalSumsEvenOddPosition(["100000", "100050"]);

// function equalSumsEvenOddPosition(input) {
//   let firstNum = Number(input.shift());
//   let secondNum = Number(input.shift());
//   let printLine = "";
//   for (let i = firstNum; i <= secondNum; i++) {
//     let oddSum = 0;
//     let evenSum = 0;
//     let currentNum = "" + i;
//     for (let j = 0; j < currentNum.length; j++) {
//       let currentDigit = Number(input.shift());
//       if (j % 2 === 0) {
//         evenSum += currentDigit;
//       } else {
//         oddSum += currentDigit;
//       }
//     }
//   }
//   if (oddSum === evenSum) {
//     printLine += i + " ";
//   }
// }
// equalSumsEvenOddPosition(["100000", "100050"]);

// решение Кирил
// function sumPrimeNonPrime(input) {
//   let primeSum = 0;
//   let nonPrimeSum = 0;
//   let currentLine = input.shift();

//   while (currentLine !== "stop") {
//     let number = Number(currentLine);
//     if (number < 0) {
//       console.log(`Number is negative.`);
//       currentLine = input.shift();
//       continue;
//     }
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primeSum += number;
//     } else {
//       nonPrimeSum += number;
//     }
//     currentLine = input.shift();
//   }
//   console.log(`Sum of all prime numbers is: ${primeSum}`);
//   console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
// }
// sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);

//  решение Кирил
// function trainTheTrainers(input) {
//   let n = Number(input.shift());
//   let currentLine = input.shift();
//   let gradesCount = 0;
//   let sumOfAllGrades = 0;

//   while (currentLine !== "Finish") {
//     let presentation = currentLine;
//     let currentSum = 0;

//     for (let i = 0; i < n; i++) {
//       let currentGrade = Number(input.shift());
//       currentSum += currentGrade;
//     }
//     sumOfAllGrades += currentSum;
//     gradesCount += n;
//     let currentAvg = (currentSum / n).toFixed(2);
//     console.log(`${presentation} - ${currentAvg}.`);

//     currentLine = input.shift();
//   }
//   let allGradeAvg = (sumOfAllGrades / gradesCount).toFixed(2);
//   console.log(`Student's final assessment is ${allGradeAvg}.`);
// }
// trainTheTrainers([
//   "2",
//   "While-Loop",
//   "6.00",
//   "5.50",
//   "For-Loop",
//   "5.84",
//   "5.66",
//   "Finish",
// ]);

//   решение Кирил
// function passwordGenerator(input) {
//   let n = Number(input.shift());
//   let l = Number(input.shift());
//   let output = "";

//   for (let s1 = 1; s1 <= n; s1++) {
//     for (let s2 = 1; s2 <= n; s2++) {
//       for (let s3 = 97; s3 < 97 + l; s3++) {
//         for (let s4 = 97; s4 < 97 + l; s4++) {
//           for (let s5 = 1; s5 <= n; s5++) {
//             if (s5 > s2 && s5 > s1) {
//               let thirdLetter = String.fromCharCode(s3);
//               let fourthLetter = String.fromCharCode(s4);

//               output += `${s1}${s2}${thirdLetter}${fourthLetter}${s5} `;
//             }
//           }
//         }
//       }
//     }
//   }
//   console.log(output);
// }
// passwordGenerator(["2", "4"]);

// function specialNumbers(input) {
//   let n = Number(input.shift());
//   let output = "";

//   for (let d1 = 1; d1 <= 9; d1++) {
//     for (let d2 = 1; d2 < 9; d2++) {
//       for (let d3 = 1; d3 <= 9; d3++) {
//         for (let d4 = 1; d4 <= 9; d4++) {
//           let firstIsMagic = n % d1 === 0;
//           let secondIsMagic = n % d2 === 0;
//           let thirdIsMagic = n % d3 === 0;
//           let forthIsMagic = n % d4 === 0;

//           if (firstIsMagic && secondIsMagic && thirdIsMagic && forthIsMagic) {
//             output += `${d1}${d2}${d3}${d4} `;
//           }
//         }
//       }
//     }
//   }

//   console.log(output);
// }
// specialNumbers(["3"]);

// function specialNumbers(input) {
//   let n = 1234;
//   let lastDigit = n % 10;
//   n = Math.trunc(n / 10);
//   lastDigit = n % 10;
//   console.log(lastDigit);
// }
// specialNumbers(["11"]);

// решение Кирил
// function specialNumbers(input) {
//   let n = Number(input.shift());
//   let output = "";

//   for (let i = 1111; i <= 9999; i++) {
//     let currentNumber = i;
//     let isMagic = true;
//     while (currentNumber > 0) {
//       let lastDigit = currentNumber % 10;

//       if (n % lastDigit !== 0) {
//         isMagic = false;
//         break;
//       }
//       currentNumber = Math.trunc(currentNumber / 10);
//     }
//     if (isMagic) {
//       output += i + " ";
//     }
//   }
//   console.log(output);
// }
// specialNumbers(["3"]);
