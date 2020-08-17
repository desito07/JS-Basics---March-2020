function solve(input) {
  let transactionCount = Number(input.shift());
  let balance = 0;
  let counter = 1;

  while (transactionCount >= counter) {
    let num = Number(input.shift());
    if (num < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += num;
    console.log(`Increase: ${num.toFixed(2)}`);
    counter++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
solve([["3", "5.51", "69.42", "100"]]);
solve(["5", "120", "45.55", "-150"]);
