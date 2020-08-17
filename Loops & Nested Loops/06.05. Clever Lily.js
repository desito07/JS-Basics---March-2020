
function cleverLily(age, washingMachinePrice, toyPrice) {
  age = Number(age);
  washingMachinePrice = Number(washingMachinePrice);
  toyPrice = Number(toyPrice);

  let savedMoney = 0;
  let birthdayMoney = 10;

  for (let year = 1; year <= age; year++) {
    if (year % 2 !== 0) {
      savedMoney += toyPrice;
    } else {
      savedMoney += birthdayMoney - 1;
      birthdayMoney += 10;
    }
  }
  if (savedMoney >= washingMachinePrice) {
    let moneyLeft = savedMoney - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washingMachinePrice - savedMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLily("10", "170.00", "6");
cleverLily("21", "1570.98", "3");
