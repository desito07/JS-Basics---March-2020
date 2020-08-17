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

