function transportPrice(input) {
  let n = +input.shift();
  let time = input.shift();

  let price = 0;

  if (time === "day") {
    if (n < 20) {
      price = 0.7 + n * 0.79;
    } else if (n >= 20 && n < 100) {
      price = n * 0.09;
    } else if (n >= 100) {
      price = n * 0.06;
    }
  } else if (time === "night") {
    if (n < 20) {
      price = 0.7 + n * 0.9;
    } else if (n >= 20 && n < 100) {
      price = n * 0.09;
    } else if (n >= 100) {
      price = n * 0.06;
    }
  }
  console.log(price.toFixed(2));
}
transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);
