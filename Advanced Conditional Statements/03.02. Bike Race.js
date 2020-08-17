function bikeRace(input) {
  let countJuniors = +input.shift();
  let countSeniors = +input.shift();
  let track = input.shift();

  let fee = 0;
  let cost = 0;

  if (track === "trail") {
    fee = countJuniors * 5.5 + countSeniors * 7;
    cost = fee * 0.05;
  } else if (track === "cross-country") {
    if (countJuniors + countSeniors < 50) {
      fee = countJuniors * 8 + countSeniors * 9.5;
      cost = fee * 0.05;
    } else {
      fee = (countJuniors * 8 + countSeniors * 9.5) * 0.75;
      cost = fee * 0.05;
    }
  } else if (track === "downhill") {
    fee = countJuniors * 12.25 + countSeniors * 13.75;
    cost = fee * 0.05;
  } else if (track === "road") {
    fee = countJuniors * 20 + countSeniors * 21.5;
    cost = fee * 0.05;
  }

  let totalFee = fee - cost;
  console.log(totalFee.toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["20", "25", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);
