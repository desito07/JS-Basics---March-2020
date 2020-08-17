function bakingCompetition(input) {
  let bakers = Number(input.shift());

  let countAll = 0;

  let countAllCookies = 0;
  let countAllCakes = 0;
  let countAllWaffles = 0;

  for (let baker = 1; baker <= bakers; baker++) {
    let name = input.shift();
    let countCookiesPerBaker = 0;
    let countCakesPerBaker = 0;
    let countWafflesPerBaker = 0;
    let command = input.shift();
    while (command !== "Stop baking!") {
      let current = Number(input.shift());
      countAll += current;

      if (command == "cookies") {
        countCookiesPerBaker += current;
        countAllCookies += current;
      } else if (command == "cakes") {
        countCakesPerBaker += current;
        countAllCakes += current;
      } else if (command == "waffles") {
        countWafflesPerBaker += current;
        countAllWaffles += current;
      }
      command = input.shift();
    }
    console.log(
      `${name} baked ${countCookiesPerBaker} cookies, ${countCakesPerBaker} cakes and ${countWafflesPerBaker} waffles.`
    );
  }
  console.log(`All bakery sold: ${countAll}`);
  let totalSum =
    countAllCookies * 1.5 + countAllCakes * 7.8 + countAllWaffles * 2.3;
  console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
