function solve(input) {
  let n = +input.shift();
  let max = Number.MIN_SAFE_INTEGER;
  let counter = 0;

  while (counter < n) {
    let num = +input.shift();
    counter++;
    if (num > max) {
      max = num;
    }
  }
  console.log(max);
}
solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999"]);
solve(["2", "-1", "-2"]);
