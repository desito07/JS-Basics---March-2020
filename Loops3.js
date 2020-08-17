//========================================= Цикли - лекция 2 лаб упражнения
// преговор

// function solve() {
//   let i = 0;
//   while (i <= 5) {
//     console.group("Softuni");
//     i++;
//   }
// }
// solve();

// function solve() {
//   let i = 0;
//   while (i == 0) {
//     console.group("Softuni");
//     if (i == 1);
//     break;
//   }
// }
// solve();

// function solve() {
//   let i = 0;
//   while (i < 6) {
//     i++;
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// solve();

//=======================================================
// задачки

// function forcycle() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// forcycle();

//======================================================
// упр. 1

// function numbers1To100() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// numbers1To100();

//========================================================
// упр. 2.1

// function alphabet() {
//   for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//     console.log(String.fromCharCode(i));
//   }
// }
// alphabet();

// упр. 2.2

// function alphabet() {
//   for (let i = 97; i <= 122; i++) {
//     let char = String.fromCharCode(i);
//     console.log(char);
//   }
// }
// alphabet();

//====================================================

// function solve() {
//   for (let u = 65, l = 97; u <= 90 && l <= 122; u++, l++) {
//     console.log(`${String.fromCharCode(u)} - ${String.fromCharCode(l)}`);
//   }
// }
// solve();

//====================================================
//  упр. 3

// function SoftUni(input) {
//   let text = input.shift();
//   for (let i = 0; i < text.length; i++) {
//     let letter = text[i];
//     console.log(letter);
//   }
// }
// SoftUni(["softuni"]);

//===================================================
// упр.4

// function Letter(input) {
//   let string = input.shift();
//   let totalSum = 0;
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     switch (char) {
//       case "a":
//         totalSum += 1;
//         break;
//       case "e":
//         totalSum += 2;
//         break;
//       case "i":
//         totalSum += 3;
//         break;
//       case "o":
//         totalSum += 4;
//         break;
//       case "u":
//         totalSum += 5;
//         break;
//     }
//   }
//   console.log(totalSum);
// }
// Letter(["hello"]);

//===================================================
// упр. 5

// function Numbers(input) {
//   let num = +input.shift();
//   let totalSum = 0;
//   for (let i = 1; i <= num; i++) {
//     let currentNumber = +input.shift();
//     totalSum += currentNumber;
//   }
//   console.log(totalSum);
// }
// Numbers(["2", "10", "20"]);

//===================================================
// упр. 6

// function Num(input) {
//   let end = Number(input.shift());
//   let max = Number.MIN_SAFE_INTEGER;
//   let min = Number.MAX_SAFE_INTEGER;

//   for (let i = 1; i <= end; i++) {
//     let currentNum = Number(input.shift());
//     if (currentNum < min) {
//       min = currentNum;
//     } else if (currentNum > max) {
//       max = currentNum;
//     }
//   }
//   console.log(`Max number: ${max}`);
//   console.log(`Min number: ${min}`);
// }
// Num(["6", "250", "5", "2", "0", "100", "1000"]);

//=======================================================
// упр. 7

// function LeftRight(input) {
//   let n = Number(input.shift());
//   let nend = n * 2;
//   let leftSum = 0;
//   let rightSum = 0;

//   for (let i = 1; i <= nend; i++) {
//     let currentNumber = Number(input.shift());
//     if (i <= n) {
//       leftSum += currentNumber;
//     } else {
//       rightSum += currentNumber;
//     }
//   }
//   if (leftSum === rightSum) {
//     console.log(`Yes, sum = ${leftSum}`);
//   } else {
//     let diff = Math.abs(leftSum - rightSum);
//     console.log(`No, diff = ${diff}`);
//   }
// }
// LeftRight(["2", "10", "90", "60", "40"]);

//=========================================================
// упр. 8

// function EvenOdd(input) {
//   let end = Number(input.shift());
//   let Oddnum = 0;
//   let Evennum = 0;

//   for (let start = 1; start <= end; start++) {
//     let currentNum = Number(input.shift());

//     if (start % 2 == 0) {
//       Evennum += currentNum;
//     } else {
//       Oddnum += currentNum;
//     }
//   }
//   if (Oddnum === Evennum) {
//     console.log(`Yes \nSum = ${Oddnum}`);
//   } else {
//     let diff = Math.abs(Oddnum - Evennum);
//     console.log(`No \nDiff = ${diff}`);
//   }
// }
// EvenOdd(["4", "10", "50", "60", "20"]);

//====================================================
// упр. 9

// function N(input) {
//     let n = Number(input.shift());
//     for (let i = n; i > 0; i--) {
//       console.log(i);
//     }
//   }
//   N(["5"]);

//====================================================
// упр. 10

// function N(input) {
//   let n = Number(input.shift());
//   for (let i = 1; i <= n; i += 3) {
//     console.log(i);
//   }
// }
// N(["10"]);

//=====================================================
// упр. 11

// function N(input) {
//   let n = Number(input.shift());
//   let num = 1;
//   for (let i = 0; i <= n; i += 2) {
//     console.log(num);
//     num = num * 2 * 2;
//   }
// }
// N(["3"]);

//==================================================
// упр. 12

function Lily([n, washerPrice, toyPrice]) {
  n = Number(n);
  washerPrice = Number(washerPrice);
  toyPrice = Number(toyPrice);

  let giftMoney = 10;
  let toysCount = 0;
  let totalMoney = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      totalMoney += giftMoney;
      giftMoney += 10;
      totalMoney--;
    } else {
      toysCount++;
    }
  }
  totalMoney += toysCount * toyPrice;
  if (totalMoney >= washerPrice) {
    console.log(`Yes! ${(totalMoney - washerPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washerPrice - totalMoney).toFixed(2)}`);
  }
}
Lily(["21", "1570.98", "3"]);

//=============================================================
