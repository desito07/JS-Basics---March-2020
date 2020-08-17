function logistics(input) {
  let count = Number(input.shift());

  let sum = 0;
  let weight = 0;

  let vanW = 0;
  let truckW = 0;
  let trainW = 0;

  for (let i = 1; i <= count; i++) {
    let CurrentNum = Number(input.shift());
    weight += CurrentNum;
    if (CurrentNum <= 3) {
      sum += CurrentNum * 200;
      vanW += CurrentNum;
    } else if (CurrentNum >= 4 && CurrentNum <= 11) {
      sum += CurrentNum * 175;
      truckW += CurrentNum;
    } else {
      sum += CurrentNum * 120;
      trainW += CurrentNum;
    }
  }

  let avg = sum / weight;
  let pVan = (vanW / weight) * 100;
  let pTruck = (truckW / weight) * 100;
  let pTrain = (trainW / weight) * 100;

  console.log(avg.toFixed(2));
  console.log(`${pVan.toFixed(2)}%`);
  console.log(`${pTruck.toFixed(2)}%`);
  console.log(`${pTrain.toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);
