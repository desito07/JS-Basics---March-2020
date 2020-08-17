function numberPyramid(input) {
  let n = Number(input.shift());
  let current = 1;
  let isBigger = false;
  let printCurrentLine = " ";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = " ";
    if (isBigger) {
      break;
    }
  }
}
numberPyramid(["7"]);
numberPyramid(["10"]);
numberPyramid(["12"]);
numberPyramid(["15"]);
numberPyramid(["1"]);
numberPyramid(["2"]);
numberPyramid(["3"]);
numberPyramid(["50"]);
