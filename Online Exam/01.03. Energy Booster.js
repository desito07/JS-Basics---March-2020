function energyBooster(input) {
  let fruit = input.shift();
  let size = input.shift();
  let count = Number(input.shift());

  let price = 0;

  if (size === "small") {
    if (fruit === "Watermelon") {
      price = 56 * count * 2;
    } else if (fruit === "Mango") {
      price = 36.66 * count * 2;
    } else if (fruit === "Pineapple") {
      price = 42.1 * count * 2;
    } else if (fruit === "Raspberry") {
      price = 20 * count * 2;
    }
  } else if (size === "big") {
    if (fruit === "Watermelon") {
      price = 28.7 * count * 5;
    } else if (fruit === "Mango") {
      price = 19.6 * count * 5;
    } else if (fruit === "Pineapple") {
      price = 24.8 * count * 5;
    } else if (fruit === "Raspberry") {
      price = 15.2 * count * 5;
    }
  }
  if (price >= 400 && price <= 1000) {
    price -= price * 0.15;
  } else if (price > 1000) {
    price -= price * 0.5;
  }
  console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Watermelon", "big", "4"]);
