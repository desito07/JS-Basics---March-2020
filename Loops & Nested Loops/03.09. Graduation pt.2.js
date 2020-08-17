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
