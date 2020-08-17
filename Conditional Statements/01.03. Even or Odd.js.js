function EvenOdd(input) {
  let num = Number(input.shift());
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
EvenOdd(["2"]);
