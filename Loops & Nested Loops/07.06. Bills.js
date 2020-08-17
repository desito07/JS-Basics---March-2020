function bills(input) {
  let month = Number(input.shift());

  let water = 20;
  let internet = 15;
  let others = 0;

  let electricityBill = 0;
  let waterBill = 0;
  let internetBill = 0;
  let othersBill = 0;

  for (let i = 1; i <= month; i++) {
    let CurrentNum = Number(input.shift());
    electricityBill += CurrentNum;
    waterBill += water;
    internetBill += internet;
    othersBill =
      electricityBill +
      waterBill +
      internetBill +
      (electricityBill + waterBill + internetBill) * 0.2;
  }
  let avg = (electricityBill + waterBill + internetBill + othersBill) / month;
  console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
  console.log(`Water: ${waterBill.toFixed(2)} lv`);
  console.log(`Internet: ${internetBill.toFixed(2)} lv`);
  console.log(`Other: ${othersBill.toFixed(2)} lv`);
  console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills([
  "8",
  "123.54",
  "231.54",
  "140.23",
  "100",
  "122.4",
  "430",
  "178.52",
  "64.2",
]);
