function gameOfIntervals(input) {
  let num = Number(input.shift());
  let num0To9 = 0;
  let num10To20 = 0;
  let num20To30 = 0;
  let num30To40 = 0;
  let num40To50 = 0;
  let numInv = 0;

  let sum = 0;

  for (let i = 0; i < num; i++) {
    let CurrentNum = Number(input.shift());

    if (CurrentNum >= 0 && CurrentNum <= 9) {
      sum += CurrentNum * 0.2;
      num0To9++;
    } else if (CurrentNum >= 10 && CurrentNum <= 19) {
      sum += CurrentNum * 0.3;
      num10To20++;
    } else if (CurrentNum >= 20 && CurrentNum <= 29) {
      sum += CurrentNum * 0.4;
      num20To30++;
    } else if (CurrentNum >= 30 && CurrentNum <= 39) {
      sum += 50;
      num30To40++;
    } else if (CurrentNum >= 40 && CurrentNum <= 50) {
      sum += 100;
      num40To50++;
    } else {
      sum -= sum / 2;
      numInv++;
    }
  }
  let p0To9 = (num0To9 / num) * 100;
  let p10To20 = (num10To20 / num) * 100;
  let p20To30 = (num20To30 / num) * 100;
  let p30To40 = (num30To40 / num) * 100;
  let p40To50 = (num40To50 / num) * 100;
  let pInv = (numInv / num) * 100;

  console.log(sum.toFixed(2));
  console.log(`From 0 to 9: ${p0To9.toFixed(2)}%`);
  console.log(`From 10 to 19: ${p10To20.toFixed(2)}%`);
  console.log(`From 20 to 29: ${p20To30.toFixed(2)}%`);
  console.log(`From 30 to 39: ${p30To40.toFixed(2)}%`);
  console.log(`From 40 to 50: ${p40To50.toFixed(2)}%`);
  console.log(`Invalid numbers: ${pInv.toFixed(2)}%`);
}
gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
