//   изпитни задачи

function easter(input) {
  let easterbread = Number(input.shift());
  let eggsPack = Number(input.shift());
  let cookies = Number(input.shift());

  let easterbreadPrice = easterbread * 3.2;
  let eggsPrice = eggsPack * 4.35;
  let cookiesPrice = cookies * 5.4;
  let coloreggsPrice = eggsPack * 0.15 * 12;

  let sum = easterbreadPrice + coloreggsPrice + eggsPrice + cookiesPrice;
  console.log(`${sum.toFixed(2)}`);
}
easter(["3", "2", "3"]);
easter(["4", "4", "3"]);
easter(["2", "3", "2"]);
