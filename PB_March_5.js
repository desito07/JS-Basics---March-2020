// function honeycombs(input) {
//   let beeCount = Number(input.shift());
//   let flowersCount = Number(input.shift());

//   let honeyTotal = beeCount * flowersCount * 0.21;
//   let honeycombs = Math.floor(honeyTotal / 100);
//   let honeyOther = honeycombs * 100;
//   let honeyLeft = honeyTotal - honeyOther;

//   console.log(`${Math.floor(honeycombs)} honeycombs filled.`);
//   console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
// }
// honeycombs(["11", "120"]);
// honeycombs(["25", "6400"]);

// function beehiveRole(input) {
//   let intelect = Number(input.shift());
//   let power = Number(input.shift());
//   let gender = input.shift();

//   if (gender === "female" && intelect >= 80 && power >= 80) {
//     console.log("Queen Bee");
//   } else if (gender === "male" && power >= 80 && intelect > 0) {
//     console.log("Drone Bee");
//   } else if (gender === "female" || gender === "male") {
//     if (intelect >= 80) {
//       console.log("Repairing Bee");
//     } else if (intelect >= 60 && intelect < 80) {
//       console.log("Cleaning Bee");
//     } else {
//       if (power >= 60 && power < 80) {
//         console.log("Guard Bee");
//       } else {
//         console.log("Worker Bee");
//       }
//     }
//   }
// }
// beehiveRole(["90", "65", "male"]);
// beehiveRole(["82", "81", "female"]);

// function honeyHarvest(input) {
//   let flowerName = input.shift();
//   let flowerCount = Number(input.shift());
//   let season = input.shift();

//   let honey = 0;

//   if (season === "Spring") {
//     if (flowerName === "Sunflower") {
//       honey += flowerCount * 10;
//     } else if (flowerName === "Daisy") {
//       honey += flowerCount * 12 * 1.1;
//     } else if (flowerName === "Lavender") {
//       honey += flowerCount * 12;
//     } else if (flowerName === "Mint") {
//       honey += flowerCount * 10 * 1.1;
//     }
//   } else if (season === "Summer") {
//     if (flowerName === "Sunflower") {
//       honey += flowerCount * 8 * 1.1;
//     } else if (flowerName === "Daisy") {
//       honey += flowerCount * 8 * 1.1;
//     } else if (flowerName === "Lavender") {
//       honey += flowerCount * 8 * 1.1;
//     } else if (flowerName === "Mint") {
//       honey += flowerCount * 12 * 1.1;
//     }
//   } else if (season === "Autumn") {
//     if (flowerName === "Sunflower") {
//       honey += flowerCount * 12 * 0.95;
//     } else if (flowerName === "Daisy") {
//       honey += flowerCount * 6 * 0.95;
//     } else if (flowerName === "Lavender") {
//       honey += flowerCount * 6 * 0.95;
//     } else if (flowerName === "Mint") {
//       honey += flowerCount * 6 * 0.95;
//     }
//   }
//   console.log(`Total honey harvested: ${honey.toFixed(2)}`);
// }
// honeyHarvest(["Sunflower", "11", "Autumn"]);
// honeyHarvest(["Daisy", "15", "Spring"]);

function beehivePopulation(input) {
  let start = Number(input.shift());
  let years = Number(input.shift());

  for (let i = 1; i <= years; i++) {
    let beesNew = Math.floor(start / 10) * 2;
    start += beesNew;

    if (i % 5 === 0) {
      let migrated = Math.floor(start / 50) * 5;
      start -= migrated;
    }
    let beesDead = Math.floor(start / 20) * 2;
    start -= beesDead;
  }
  console.log(`Beehive population: ${start}`);
}
// beehivePopulation(["100", "6"]);
beehivePopulation(["1000", "23"]);

// function solve(input) {
//   let beesCount = Number(input.shift());
//   let healthBear = Number(input.shift());
//   let attackBear = Number(input.shift());

//   let healthBees = beesCount * 1;
//   let attackBees = beesCount * 5;

//   let counter = 0;

//   while (healthBear !== 0) {
//     counter++;

//     if (healthBear !== healthBees) {
//       beesCount -= attackBear;
//       healthBear -= beesCount * 5;
//     }
//     if (healthBear === 0 || healthBear < 0) {
//       console.log(`Beehive won! Bees left ${beesCount}.`);
//       break;
//     }
//     if (beesCount <= 100 && beesCount >= 0) {
//       console.log(`The bear stole the honey! Bees left ${beesCount}.`);
//       break;
//     }
//     if (beesCount < 0) {
//       console.log(`The bear stole the honey! Bees left ${(beesCount = 0)}.`);
//       break;
//     }
//   }
// }
// solve(["200", "1000", "10"]);
// solve(["200", "10000", "90"]);
// solve(["200", "10000", "300"]);

// function honeyWinterReserves(input) {
//   let honeyWinterQuantity = Number(input.shift());
//   let beeName = input.shift();
//   let honeyCounter = 0;

//   while (beeName !== "Winter has come" && honeyCounter < honeyWinterQuantity) {
//     for (let row = 1; row <= 6; row++) {
//       let currentHoney = Number(input.shift());
//       honeyCounter += currentHoney;
//     }
//     if (honeyCounter < 0) {
//       console.log(`${beeName} was banished for gluttony`);
//     }
//     beeName = input.shift();
//   }
//   if (honeyCounter >= honeyWinterQuantity) {
//     console.log(
//       `Well done! Honey surplus ${(honeyCounter - honeyWinterQuantity).toFixed(
//         2
//       )}.`
//     );
//   } else {
//     console.log(
//       `Hard Winter! Honey needed ${(honeyWinterQuantity - honeyCounter).toFixed(
//         2
//       )}.`
//     );
//   }
// }
// honeyWinterReserves([
//   "1000",
//   "Maya",
//   "-50",
//   "-10",
//   "-20.70",
//   "20.40",
//   "10.30",
//   "40",
//   "Yama",
//   "50",
//   "10",
//   "20",
//   "30",
//   "100",
//   "100",
//   "Winter has come",
// ]);
