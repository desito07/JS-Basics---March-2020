function matchTickets(input) {
  let budget = +input.shift();
  let category = input.shift();
  let count = +input.shift();

  let price = 0;
  let transport = 0;
  let cost = 0;

  if (category === "VIP") {
    price = 499.99;
    if (count >= 1 && count <= 4) {
      transport = budget * 0.75;
    } else if (count >= 5 && count <= 9) {
      transport = budget * 0.6;
    } else if (count >= 10 && count <= 24) {
      transport = budget * 0.5;
    } else if (count >= 25 && count <= 49) {
      transport = budget * 0.4;
    } else {
      transport = budget * 0.25;
    }
  } else if (category === "Normal") {
    price = 249.99;
    if (count >= 1 && count <= 4) {
      transport = budget * 0.75;
    } else if (count >= 5 && count <= 9) {
      transport = budget * 0.6;
    } else if (count >= 10 && count <= 24) {
      transport = budget * 0.5;
    } else if (count >= 25 && count <= 49) {
      transport = budget * 0.4;
    } else {
      transport = budget * 0.25;
    }
  }
  cost = price * count + transport;
  if (budget >= cost) {
    console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`);
  } else if (cost >= budget) {
    console.log(
      `Not enough money! You need ${(cost - budget).toFixed(2)} leva.`
    );
  }
}
matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);
