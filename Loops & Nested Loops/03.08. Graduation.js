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
