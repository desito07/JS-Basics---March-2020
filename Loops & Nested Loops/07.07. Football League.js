function footballLeague(input) {
  let capacity = Number(input.shift());
  let fansTotal = Number(input.shift());

  let sector = "";
  let fansA = 0;
  let fansB = 0;
  let fansV = 0;
  let fansG = 0;

  for (let i = 1; i <= fansTotal; i++) {
    let sector = input.shift();
    if (sector == "A") {
      fansA += 1;
    } else if (sector == "B") {
      fansB += 1;
    } else if (sector == "V") {
      fansV += 1;
    } else if (sector == "G") {
      fansG += 1;
    }
  }
  let pFansA = (fansA / fansTotal) * 100;
  let pFansB = (fansB / fansTotal) * 100;
  let pFansV = (fansV / fansTotal) * 100;
  let pFansG = (fansG / fansTotal) * 100;

  console.log(`${pFansA.toFixed(2)}%`);
  console.log(`${pFansB.toFixed(2)}%`);
  console.log(`${pFansV.toFixed(2)}%`);
  console.log(`${pFansG.toFixed(2)}%`);
  console.log(`${((fansTotal / capacity) * 100).toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
]);
footballLeague([
  "1000",
  "12",
  "A",
  "A",
  "V",
  "V",
  "A",
  "G",
  "A",
  "A",
  "V",
  "G",
  "V",
  "A",
]);

