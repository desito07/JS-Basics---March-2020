//========================================= Цикли - упражнениe 2 - упражнения
// упр. 1

// function Numbers() {
//   for (let i = 1; i <= 1000; i++) {
//     if (i % 10 === 7) {
//       console.log(i);
//     }
//   }
// }
// Numbers([]);

//==========================================
// упр. 2

// function Element(input) {
//   let end = Number(input.shift());
//   let sum = 0;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let start = 1; start <= end; start++) {
//     let number = Number(input.shift());
//     sum += number;
//     if (number > max) {
//       max = number;
//     }
//   }
//   let result = sum - max;
//   if (result === max) {
//     console.log("Yes");
//     console.log(`Sum = ${max}`);
//   } else {
//     let diff = Math.abs(max - result);
//     console.log("No");
//     console.log(`Diff = ${diff}`);
//   }
// }
// Element(["7", "3", "4", "1", "1", "2", "12", "1"]);

//==========================================
//  упр. 3

function Positions(input) {
  let end = Number(input.shift());

  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;
  let oddMax = Number.MIN_SAFE_INTEGER;

  let evenSum = 0;
  let evenMin = Number.MAX_SAFE_INTEGER;
  let evenMax = Number.MIN_SAFE_INTEGER;

  for (let position = 1; position < end; position++) {
    let currentNumber = Number(input.shift());
    if (position % 2 !== 0) {
      oddSum += currentNumber;
      if (currentNumber > oddMax) {
        oddMax = currentNumber;
      }
      if (currentNumber < oddMin) {
        oddMin = currentNumber;
      }
    } else {
      evenSum += currentNumber;
      if (currentNumber > evenMax) {
        evenMax = currentNumber;
      }
      if (currentNumber < evenMin) {
        evenMin = currentNumber;
      }
    }
  }
  console.log(oddSum);
  console.log;
}
Positions(["6", "2", "3", "5", "4", "2", "1"]);
