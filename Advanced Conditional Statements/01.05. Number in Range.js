function NumberInRange(input) {
  let num = +input.shift();
  if ((num >= -100 && num <= 100) && num !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
NumberInRange(["25"]);
