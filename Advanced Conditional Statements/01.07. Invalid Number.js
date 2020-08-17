function InvalidNumber(input) {
  let num = +input.shift();
  if ((num >= 100 && num <= 200) || num == 0) {
  } else {
    console.group("invalid");
  }
}
InvalidNumber(["200"]);
