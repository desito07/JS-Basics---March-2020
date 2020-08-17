function travelling(input) {
  let destination = input.shift();
  let budget = Number(input.shift());

  let savedMoney = 0;
  let counter = 1;

  while (destination !== "End") {
    counter++;

    while (savedMoney < budget) {
      savedMoney += Number(input.shift());
      counter++;
    }
    console.log(`Going to ${destination}!`);
    destination = input.shift();
    budget = Number(input.shift());
    savedMoney = 0;
  }
}
travelling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
travelling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
