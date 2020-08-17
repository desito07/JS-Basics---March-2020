function pets(input) {
  let days = +input.shift();
  let foodLeft = +input.shift();
  let dogFoodPerDay = +input.shift();
  let catFoodPerDay = +input.shift();
  let turtleFoodPerDay = +input.shift();

  let turtleFoodPerDayKg = turtleFoodPerDay / 1000;

  let foodNeeded = (dogFoodPerDay + catFoodPerDay + turtleFoodPerDayKg) * days;

  if (foodLeft >= foodNeeded) {
    console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`);
  } else if (foodNeeded >= foodLeft) {
    console.log(
      `${Math.ceil(foodNeeded - foodLeft)} more kilos of food are needed.`
    );
  }
}
pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
