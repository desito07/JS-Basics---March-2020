function summerShopping(input) {
  let budget = Number(input.shift());
  let priceTowel = Number(input.shift());
  let discount = Number(input.shift());

  let priceUmbrella = priceTowel * (2 / 3);
  let priceFloops = priceUmbrella * 0.75;
  let priceBag = (priceFloops + priceTowel) * (1 / 3);

  let price = priceTowel + priceUmbrella + priceFloops + priceBag;
  let priceTotal = price - price * (discount / 100);

  if (budget >= priceTotal) {
    console.log(
      `Annie's sum is ${priceTotal.toFixed(2)} lv. She has ${(
        budget - priceTotal
      ).toFixed(2)} lv. left.`
    );
  } else {
    console.log(
      `Annie's sum is ${priceTotal.toFixed(2)} lv. She needs ${(
        priceTotal - budget
      ).toFixed(2)} lv. more.`
    );
  }
}
