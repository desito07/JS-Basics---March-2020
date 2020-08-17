function evenodd(input) {
  let n = Number(input.shift());
  let OddSum = 0;
  let OddMin = Number.MAX_SAFE_INTEGER;
  let OddMax = Number.MIN_SAFE_INTEGER;
  let EvenSum = 0;
  let EvenMin = Number.MAX_SAFE_INTEGER;
  let EvenMax = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input.shift());
    if (i % 2 === 0) {
      EvenSum += currentNumber;
      if (currentNumber > EvenMax) {
        EvenMax = currentNumber;
      }
      if (currentNumber < EvenMin) {
        EvenMin = currentNumber;
      }
    } else {
      OddSum += currentNumber;
      if (currentNumber > OddMax) {
        OddMax = currentNumber;
      }
      if (currentNumber < OddMin) {
        OddMin = currentNumber;
      }
    }
  }
  console.log(`OddSum=${OddSum.toFixed(2)},`);
  if (
    OddMin !== Number.MAX_SAFE_INTEGER &&
    OddMax !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`OddMin=${OddMin.toFixed(2)},`);
    console.log(`OddMax=${OddMax.toFixed(2)},`);
  } else {
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${EvenSum.toFixed(2)},`);
  if (
    EvenMin !== Number.MAX_SAFE_INTEGER &&
    EvenMax !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`EvenMin=${EvenMin.toFixed(2)},`);
    console.log(`EvenMax=${EvenMax.toFixed(2)}`);
  } else {
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
  }
}
evenodd(["6", "2", "3", "5", "4", "2", "1"]);
evenodd(["1", "-5"]);
