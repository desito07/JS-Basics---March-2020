function carToGo(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let price = 0;
  let carType = "";
  let carClass = "";

  if (budget <= 100) {
    carClass = "Economy class";
    if (season === "Summer") {
      carType = "Cabrio";
      price = budget * 0.35;
    } else if (season == "Winter") {
      carType = "Jeep";
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    carClass = "Compact class";
    if (season === "Summer") {
      carType = "Cabrio";
      price = budget * 0.45;
    } else if (season === "Winter") {
      carType = "Jeep";
      price = budget * 0.8;
    }
  } else if (budget > 500) {
    carClass = "Luxury class";
    if (season === "Summer") {
      carType = "Jeep";
      price = budget * 0.9;
    } else if (season === "Winter") {
      carType = "Jeep";
      price = budget * 0.9;
    }
  }
  console.log(`${carClass}`);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);
