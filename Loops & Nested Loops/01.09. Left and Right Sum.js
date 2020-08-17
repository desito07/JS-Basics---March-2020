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
