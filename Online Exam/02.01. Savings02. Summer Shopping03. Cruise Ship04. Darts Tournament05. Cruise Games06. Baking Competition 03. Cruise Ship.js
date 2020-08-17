function solve(input) {
  let cruise = input.shift();
  let cabin = input.shift();
  let nightCount = Number(input.shift());
  let sum = 0;

  switch (cruise) {
    case "Mediterranean":
      if (cabin == "standard cabin") {
        sum += nightCount * 27.5 * 4;
      } else if (cabin == "cabin with balcony") {
        sum += nightCount * 30.2 * 4;
      } else if (cabin == "apartment") {
        sum += nightCount * 40.5 * 4;
      }
      break;
    case "Adriatic":
      if (cabin == "standard cabin") {
        sum += nightCount * 22.99 * 4;
      } else if (cabin == "cabin with balcony") {
        sum += nightCount * 25.0 * 4;
      } else if (cabin == "apartment") {
        sum += nightCount * 34.99 * 4;
      }
      break;
    case "Aegean":
      if (cabin == "standard cabin") {
        sum += nightCount * 23.0 * 4;
      } else if (cabin == "cabin with balcony") {
        sum += nightCount * 26.6 * 4;
      } else if (cabin == "apartment") {
        sum += nightCount * 39.8 * 4;
      }
      break;
  }
  if (nightCount > 7) {
    sum -= sum * 0.25;
  }
  console.log(
    `Annie's holiday in the ${cruise} sea costs ${sum.toFixed(2)} lv.`
  );
}
