function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while (n > counter) {
    let num = +input.shift();
    if (num < min) {
      min = num;
    }
    counter++;
  }
  console.log(min);
}
solve(["2", "99", "100"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999"]);
solve(["2", "-1", "-2"]);
