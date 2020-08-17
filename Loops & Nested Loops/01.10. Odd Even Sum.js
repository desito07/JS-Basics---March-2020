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
