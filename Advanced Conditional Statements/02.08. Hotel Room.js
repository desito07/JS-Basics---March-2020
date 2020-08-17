function Hotel(input) {
  let month = input.shift();
  let count = Number(input.shift());

  let priceap = 0;
  let pricest = 0;

  if (month == "May" || month == "October") {
    priceap = 65 * count;
    pricest = 50 * count;
    if (count > 14) {
      pricest *= 0.7;
    } else if (count > 7) {
      pricest *= 0.95;
    }
  } else if (month == "June" || month == "September") {
    priceap = 68.7 * count;
    pricest = 75.2 * count;
    if (count > 14) {
      pricest *= 0.8;
    }
  } else if (month == "July" || month == "August") {
    priceap = 77 * count;
    pricest = 76 * count;
  }
  if (count > 14) {
    priceap *= 0.9;
  }
  console.log(`Apartment: ${priceap.toFixed(2)} lv.`);
  console.log(`Studio: ${pricest.toFixed(2)} lv.`);
}
Hotel(["May", "15"]);
Hotel(["June", "14"]);
Hotel(["August", "20"]);
