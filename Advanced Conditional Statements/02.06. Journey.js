function Journey(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let destination = "";
  let place = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      place = "Camp";
      budget *= 0.3;
    } else if (season == "winter") {
      place = "Hotel";
      budget *= 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      place = "Camp";
      budget *= 0.4;
    } else if (season == "winter") {
      place = "Hotel";
      budget *= 0.8;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    place = "Hotel";
    budget *= 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${budget.toFixed(2)}`);
}
Journey(["50", "summer"]);
Journey(["75", "winter"]);
Journey(["312", "summer"]);
Journey(["678.53", "winter"]);
Journey(["1500", "summer"]);

