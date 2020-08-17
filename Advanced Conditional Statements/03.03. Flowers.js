function flowers(input) {
  let countH = +input.shift();
  let countR = +input.shift();
  let countL = +input.shift();
  let season = input.shift();
  let day = input.shift();

  let price = 1;
  let count = countH + countL + countR;

  if (season === "Spring" || season === "Summer") {
    price = countH * 2 + countR * 4.1 + countL * 2.5;
    if (day === "Y") {
      price += price * 0.15;
      if (countL > 7 && season !== "Summer") {
        price -= price * 0.05;
      }
    } else if (day === "N") {
      price = countH * 2 + countR * 4.1 + countL * 2.5;
    }
    if (count > 20) {
      price -= price * 0.2;
    }
  } else if (season === "Autumn" || season === "Winter") {
    price = countH * 3.75 + countR * 4.5 + countL * 4.15;
    if (day === "Y") {
      price += price * 0.15;
    } else if (day === "N") {
      price = countH * 3.75 + countR * 4.5 + countL * 4.15;
    }
    if (countR >= 10 && season != "Autumn") {
      price -= price * 0.1;
    }
    if (count > 20) {
      price -= price * 0.2;
    }
  }
  console.log((price + 2).toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
