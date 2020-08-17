function savings(input) {
  let income = Number(input.shift());
  let months = Number(input.shift());
  let sumNeeded = Number(input.shift());

  let sumOther = income * 0.3;
  let sumSaved = income - (sumNeeded + sumOther);

  let sumTotal = sumSaved * months;
  let percentsumSaved = (sumSaved / income) * 100;

  console.log(`She can save ${percentsumSaved.toFixed(2)}%`);
  console.log(sumTotal.toFixed(2));
}
