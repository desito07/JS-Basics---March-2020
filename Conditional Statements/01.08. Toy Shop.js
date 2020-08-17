function ToyShop(input) {
  let trip = Number(input.shift());
  let jigsaw = Number(input.shift());
  let doll = Number(input.shift());
  let bear = Number(input.shift());
  let minion = Number(input.shift());
  let truck = Number(input.shift());

  let income = jigsaw * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;
  let count = jigsaw + doll + bear + minion + truck;

  if (count >= 50) {
    let discount = income * 0.25;
    income -= discount;
  }

  let rent = income * 0.1;
  income -= rent;

  if (income >= trip) {
    console.log(`Yes! ${(income - trip).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(trip - income).toFixed(2)} lv needed.`);
  }
}
ToyShop(["40.8", "20", "25", "30", "50", "10"]);

