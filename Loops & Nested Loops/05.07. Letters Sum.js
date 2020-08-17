function lettersSum(input) {
  let product = input.shift();
  let num = Number(input.shift());
  let budget = Number(input.shift());
  let sum = 0;

  for (let i = 0; i < product.length; i++) {
    let currentLetter = product[i];
    if (
      currentLetter === "a" ||
      currentLetter === "e" ||
      currentLetter === "i" ||
      currentLetter === "o" ||
      currentLetter === "u" ||
      currentLetter === "y"
    ) {
      sum += 3;
    } else {
      sum += 1;
    }
  }
  let price = sum * num;
  if (budget < price) {
    console.log(`Cannot buy ${product}. Product value: ${price.toFixed(2)}`);
  } else if (budget >= price) {
    console.log(
      `${product} bought. Money left: ${(budget - price).toFixed(2)}`
    );
  }
}
lettersSum(["apple", "2", "20"]);
lettersSum(["milk", "1.4", "8"]);
