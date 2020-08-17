function vacation(input) {
  let moneyNeeded = Number(input.shift());
  let moneyCurrent = Number(input.shift());

  let spendCounter = 0;
  let daysCounter = 0;

  while (moneyCurrent < moneyNeeded) {
    daysCounter++;
    let action = input.shift();
    let money = Number(input.shift());

    if (action === "spend") {
      moneyCurrent -= money;
      if (moneyCurrent < 0) {
        moneyCurrent = 0;
      }
      spendCounter++;
    } else if (action === "save") {
      moneyCurrent += money;
      spendCounter = 0;
    }
    if (spendCounter == 5) {
      break;
    }
  }
  if (spendCounter == 5) {
    console.log("You can't save the money.");
    console.log(`${daysCounter}`);
  } else {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

