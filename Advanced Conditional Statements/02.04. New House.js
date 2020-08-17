function Home(input) {
  let flower = input.shift();
  let count = Number(input.shift());
  let budget = Number(input.shift());
  let price = 0;
  let discount = 0;

  if (flower == "Roses") {
    price = 5;
    if (count > 80) {
      discount = price * 0.1;
    }
  } else if (flower == "Dahlias") {
    price = 3.8;
    if (count > 90) {
      discount = price * 0.15;
    }
  } else if (flower == "Tulips") {
    price = 2.8;
    if (count > 80) {
      discount = price * 0.15;
    }
  } else if (flower == "Narcissus") {
    price = 3;
    if (count < 120) {
      discount = -(price * 0.15);
    }
  } else if (flower == "Gladiolus") {
    price = 2.5;
    if (count < 80) {
      discount = -(price * 0.2);
    }
  }
  let totaldiscount = discount * count;
  let totalPrice = price * count - totaldiscount;
  let diff = Math.abs(totalPrice - budget);
  if (budget >= totalPrice) {
    console.log(
      `Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else if (budget <= totalPrice) {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
Home(["Roses", "55", "250"]);
Home(["Tulips", "88", "260"]);
Home(["Narcissus", "119", "360"]);
