function EvenPowers(input) {
  let n = Number(input.shift());
  for (let i = 0; i <= n; i += 2) {
    let result = Math.pow(2, i);
    console.log(result);
  }
}
EvenPowers(["3"]);
