function catWalking(input) {
  let min = Number(input.shift());
  let trips = Number(input.shift());
  let calories = Number(input.shift());

  let minTotal = min * trips;
  let caloriesBurnt = minTotal * 5;

  let caloriesNeeded = calories * 0.5;

  if (caloriesBurnt >= caloriesNeeded) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`
    );
  }
}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
