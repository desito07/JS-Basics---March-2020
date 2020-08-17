function rownNumbers(input) {
  let n = Number(input.shift());
  let currentNum = 1;
  while (n >= currentNum) {
    console.log(currentNum);
    currentNum = currentNum * 2 + 1;
  }
}
rownNumbers(["17"]);
