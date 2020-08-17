function sumOfTwoNumbers(input) {
  let numStart = Number(input.shift());
  let numEnd = Number(input.shift());
  let numMagic = Number(input.shift());
  let counter = 0;
  let isFound = false;

  for (let i = numStart; i <= numEnd; i++) {
    for (let z = numStart; z <= numEnd; z++) {
      counter++;
      if (i + z === numMagic) {
        isFound = true;
        console.log(`Combination N:${counter} (${i} + ${z} = ${numMagic})`);
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${numMagic}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
