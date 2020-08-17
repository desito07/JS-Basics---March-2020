function Cinema(input) {
  let screen = input.shift();
  let rows = +input.shift();
  let columns = +input.shift();
  price = 0;

  if (screen == "Premiere") {
    price = 12;
  } else if (screen == "Normal") {
    price = 7.5;
  } else if ((screen = "Discount")) {
    price = 5;
  }
  let area = rows * columns;
  let sales = area * price;
  console.log(`${sales.toFixed(2)} leva`);
}
Cinema(["Discount", "12", "30"]);

