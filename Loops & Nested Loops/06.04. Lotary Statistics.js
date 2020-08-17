function lotaryStatistics(num) {
  num = Number(num);
  let oddSigleDigitNumbers = 0;
  let evenNumbers = 0;
  let oddNumbersWithSeven = 0;
  let numbersDividedByHundred = 0;

  for (let i = 1; i <= num; i++) {
    if (i < 10 && i % 2 !== 0) {
      oddSigleDigitNumbers++;
    }
    if (i % 2 === 0) {
      evenNumbers++;
    }
    if (i % 2 !== 0 && i % 10 === 7) {
      oddNumbersWithSeven++;
    }
    if (100 % i === 0) {
      numbersDividedByHundred++;
    }
  }
  let firstPercentage = (oddSigleDigitNumbers / num) * 100;
  let secondPercentage = (evenNumbers / num) * 100;
  let thirdPercentage = (oddNumbersWithSeven / num) * 100;
  let fourthPercentage = (numbersDividedByHundred / num) * 100;
  console.log(`${firstPercentage.toFixed(2)}%`);
  console.log(`${secondPercentage.toFixed(2)}%`);
  console.log(`${thirdPercentage.toFixed(2)}%`);
  console.log(`${fourthPercentage.toFixed(2)}%`);
}
lotaryStatistics("49");
lotaryStatistics("35");
