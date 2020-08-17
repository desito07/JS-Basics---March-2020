function truckDriver(input) {
  let season = input.shift();
  let distance = Number(input.shift());

  let salary = 0;

  if (distance <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      salary = distance * 0.75 * 4;
    } else if (season === "Summer") {
      salary = distance * 0.9 * 4;
    } else if (season === "Winter") {
      salary = distance * 1.05 * 4;
    }
  } else if (distance > 5000 && distance <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      salary = distance * 0.95 * 4;
    } else if (season === "Summer") {
      salary = distance * 1.1 * 4;
    } else if (season === "Winter") {
      salary = distance * 1.25 * 4;
    }
  } else if (distance > 10000 && distance <= 20000) {
    if (
      season === "Spring" ||
      season === "Autumn" ||
      season === "Summer" ||
      season === "Winter"
    ) {
      salary = distance * 1.45 * 4;
    }
  }
  let salaryAfterTaxes = salary - salary * 0.1;
  console.log(salaryAfterTaxes.toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);
