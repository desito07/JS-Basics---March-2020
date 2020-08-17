function averageNumber(input) {
  let n = Number(input.shift());
  let counter = 0;
  let sum = 0;

  while (counter < n) {
    let currentNumber = Number(input.shift());
    sum += currentNumber;
    counter++;
  }
  let avr = sum / counter;
  console.log(avr.toFixed(2));
}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);
