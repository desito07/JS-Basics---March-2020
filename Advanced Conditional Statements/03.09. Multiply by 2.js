function multiplyby2(input) {
  let command = Number(input.shift());
  let result = 0;

  while (true) {
    if (command < 0) {
      console.log(`Negative number!`);
      break;
    }
    result = command * 2;
    console.log(`Result: ${result.toFixed(2)}`);
    command = input.shift();
  }
}
multiplyby2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyby2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyby2(["-123"]);
