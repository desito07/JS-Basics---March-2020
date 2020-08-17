function Movie(input) {
  let budget = Number(input.shift());
  let count = Number(input.shift());
  let price = Number(input.shift());

  let decor = budget * 0.1;
  let discount = 0;

  let clothes = price * count;

  if (count > 150) {
    discount = clothes * 0.1;
    clothes -= discount;
  }
  let movie = decor + clothes;

  if (budget >= movie) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - movie).toFixed(2)} leva left.`
    );
  } else if (budget < movie) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${Math.abs(movie - budget).toFixed(2)} leva more.`
    );
  }
}
Movie(["9587.88", "222", "55.68"]);
