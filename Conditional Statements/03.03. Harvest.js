function harvest(input) {
  let areaWineYard = +input.shift();
  let grapesPerM = +input.shift();
  let wineNeeded = +input.shift();
  let count = +input.shift();

  let grapesNeeded = areaWineYard * grapesPerM;
  let wineLitres = (0.4 * grapesNeeded) / 2.5;

  if (wineLitres >= wineNeeded) {
    let diff = wineLitres - wineNeeded;
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.`
    );
    console.log(
      `${Math.ceil(diff)} liters left -> ${Math.ceil(
        diff / count
      )} liters per person.`
    );
  } else {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        wineNeeded - wineLitres
      )} liters wine needed.`
    );
  }
}
harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
