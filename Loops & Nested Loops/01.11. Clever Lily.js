function Lily(input) {
  let age = Number(input.shift());
  let priceWashingMachine = Number(input.shift());
  let singlePriceToy = Number(input.shift());

  let countOfToys = 0;
  let money = 0;
  let incomimingMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 !== 0) {
      countOfToys += 1;
    } else {
      money += incomimingMoney;
      incomimingMoney += 10;
      money -= 1;
    }
  }
  money += countOfToys * singlePriceToy;
  if (priceWashingMachine <= money) {
    console.log(`Yes! ${(money - priceWashingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWashingMachine - money).toFixed(2)}`);
  }
}
Lily(["10", "170.00", "6"]);
Lily(["21", "1570.98", "3"]);
