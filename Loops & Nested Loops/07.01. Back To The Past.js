function backToThePast(input) {
  let moneyGiven = Number(input.shift());
  let year = Number(input.shift());

  let age = 18;
  let moneySpend = 0;

  for (let i = 1800; i <= year; i++) {
    if (i % 2 === 0) {
      moneySpend += 12000;
    } else {
      moneySpend += 12000 + 50 * age;
    }
    age++;
  }
  if (moneyGiven >= moneySpend) {
    console.log(
      `Yes! He will live a carefree life and will have ${(
        moneyGiven - moneySpend
      ).toFixed(2)} dollars left.`
    );
  } else {
    console.log(
      `He will need ${Math.abs(moneyGiven - moneySpend).toFixed(
        2
      )} dollars to survive.`
    );
  }
}
backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);
