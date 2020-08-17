function NumbersBackwards(input) {
  let n = Number(input.shift());
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
NumbersBackwards(["2"]);
NumbersBackwards(["3"]);
NumbersBackwards(["5"]);

