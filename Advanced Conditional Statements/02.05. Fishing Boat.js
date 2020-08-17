function Fishboat(input) {
  let budget = Number(input.shift());
  let season = input.shift();
  let count = Number(input.shift());
  let price = 0;
  let discount = 0;

  if (season == "Spring") {
    price = 3000;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  } else if (season == "Summer" || season == "Autumn") {
    price = 4200;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  } else if (season == "Winter") {
    price = 2600;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  }
  let totalPrice = price - discount;
  if (count % 2 == 0 && season !== "Autumn") {
    totalPrice = totalPrice * 0.95;
  }
  let diff = Math.abs(budget - totalPrice);
  if (budget >= totalPrice) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
Fishboat(["2000", "Winter", "13"]);
