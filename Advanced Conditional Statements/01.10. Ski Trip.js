function SkiTrip(input) {
  let days = +input.shift();
  let room = input.shift();
  let feedback = input.shift();
  let price = 0;
  let commission = 0;
  let nights = days - 1;

  if (room == "room for one person") {
    price = 18;
    if (nights < 10) {
      commission = 0;
    } else if (nights > 10 && nights < 15) {
      commission = 0;
    } else if (nights > 15) {
      commission = 0;
    }
  } else if (room == "apartment") {
    price = 25;
    if (nights < 10) {
      commission = 0.3;
    } else if (nights > 10 && nights < 15) {
      commission = 0.35;
    } else if (nights > 15) {
      commission = 0.5;
    }
  } else if (room == "president apartment") {
    price = 35;
    if (nights < 10) {
      commission = 0.1;
    } else if (nights > 10 && nights < 15) {
      commission = 0.15;
    } else if (nights > 15) {
      commission = 0.2;
    }
  }
  let totalPrice = nights * price;
  let save = totalPrice - totalPrice * commission;
  if (feedback == "positive") {
    save += save * 0.25;
  } else if ((feedback = "negative")) {
    save -= save * 0.1;
  }
  console.log(save.toFixed(2));
}
SkiTrip(["30", "president apartment", "negative"]);
