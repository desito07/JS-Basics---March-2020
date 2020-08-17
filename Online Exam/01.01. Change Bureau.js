function changeBureau(input) {
  let countBitcoin = Number(input.shift());
  let countUan = Number(input.shift());
  let comission = Number(input.shift());

  let euro = 1.95;
  let dolar = 1.76;
  let bitcoin = 1168;
  let uan = 0.15;

  let levaBitcoin = bitcoin * countBitcoin;
  let levaUan = countUan * 0.15 * 1.76;

  let euroTotal = (levaBitcoin + levaUan) / 1.95;
  let sum = euroTotal - euroTotal * (comission / 100);
  console.log(sum.toFixed(2));
}
changeBureau(["1", "5", "5"]);
