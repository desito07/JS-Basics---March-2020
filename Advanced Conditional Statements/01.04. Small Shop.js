function Shop(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = +input.shift();
  let price = 0;

  switch (city) {
    case "Sofia":
      if (product === "coffee") {
        price = 0.5;
      } else if (product === "water") {
        price = 0.8;
      } else if (product === "beer") {
        price = 1.2;
      } else if (product === "sweets") {
        price = 1.45;
      } else if (product === "peanuts") {
        price = 1.6;
      }
      break;
    case "Plovdiv":
      if (product === "coffee") {
        price = 0.4;
      } else if (product === "water") {
        price = 0.7;
      } else if (product === "beer") {
        price = 1.15;
      } else if (product === "sweets") {
        price = 1.3;
      } else if (product === "peanuts") {
        price = 1.5;
      }
      break;
    case "Varna":
      if (product === "coffee") {
        price = 0.45;
      } else if (product === "water") {
        price = 0.7;
      } else if (product === "beer") {
        price = 1.1;
      } else if (product === "sweets") {
        price = 1.35;
      } else if (product === "peanuts") {
        price = 1.55;
      }
      break;
  }
  console.log(price * quantity);
}
Shop(["peanuts", "Plovdiv", "1"]);
