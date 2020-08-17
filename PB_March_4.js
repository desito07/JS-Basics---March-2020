//  Exam Preparation 30/04/2020 && Programming Basics Online Exam - 27 and 28 July 2019
// --------------------------------------------------------------------------------------

// function savings(input) {
//   let income = Number(input.shift());
//   let months = Number(input.shift());
//   let sumNeeded = Number(input.shift());

//   let sumOther = income * 0.3;
//   let sumSaved = income - (sumNeeded + sumOther);

//   let sumTotal = sumSaved * months;
//   let percentsumSaved = (sumSaved / income) * 100;

//   console.log(`She can save ${percentsumSaved.toFixed(2)}%`);
//   console.log(sumTotal.toFixed(2));
// }
// savings(["1500", "3", "800"]);

// function summerShopping(input) {
//   let budget = Number(input.shift());
//   let priceTowel = Number(input.shift());
//   let discount = Number(input.shift());

//   let priceUmbrella = priceTowel * (2 / 3);
//   let priceFloops = priceUmbrella * 0.75;
//   let priceBag = (priceFloops + priceTowel) * (1 / 3);

//   let price = priceTowel + priceUmbrella + priceFloops + priceBag;
//   let priceTotal = price - price * (discount / 100);

//   if (budget >= priceTotal) {
//     console.log(
//       `Annie's sum is ${priceTotal.toFixed(2)} lv. She has ${(
//         budget - priceTotal
//       ).toFixed(2)} lv. left.`
//     );
//   } else {
//     console.log(
//       `Annie's sum is ${priceTotal.toFixed(2)} lv. She needs ${(
//         priceTotal - budget
//       ).toFixed(2)} lv. more.`
//     );
//   }
// }
// summerShopping(["40", "15", "5"]);

// function cruiseShip(input) {
//   let cruiseType = input.shift();
//   let room = input.shift();
//   let nights = Number(input.shift());

//   let price = 0;

//   if (cruiseType === "Mediterranean") {
//     if (room === "standard cabin") {
//       price = nights * 27.5 * 4;
//     } else if (room === "cabin with balcony") {
//       price = nights * 30.2 * 4;
//     } else if (room === "apartment") {
//       price = nights * 40.5 * 4;
//     }
//   } else if (cruiseType === "Adriatic") {
//     if (room === "standard cabin") {
//       price = nights * 22.99 * 4;
//     } else if (room === "cabin with balcony") {
//       price = nights * 25.0 * 4;
//     } else if (room === "apartment") {
//       price = nights * 34.99 * 4;
//     }
//   } else if (cruiseType === "Aegean") {
//     if (room === "standard cabin") {
//       price = nights * 23.0 * 4;
//     } else if (room === "cabin with balcony") {
//       price = nights * 26.6 * 4;
//     } else if (room === "apartment") {
//       price = nights * 39.8 * 4;
//     }
//   }
//   if (nights > 7) {
//     price -= price * 0.25;
//   }
//   console.log(
//     `Annie's holiday in the ${cruiseType} sea costs ${price.toFixed(2)} lv.`
//   );
// }
// cruiseShip(["Aegean", "standard cabin", "10"]);

// function cruiseGames(input) {
//   let name = input.shift();
//   let gamesCount = Number(input.shift());

//   let volleyball = 0;
//   let counterV = 0;
//   let tennis = 0;
//   let counterT = 0;
//   let badminton = 0;
//   let counterB = 0;
//   let sum = 0;
//   let sum1 = 0;

//   for (let i = 0; i < gamesCount; i++) {
//     let gameName = input.shift();
//     let gamesPoints = Number(input.shift());

//     if (gameName === "volleyball") {
//       volleyball += gamesPoints + gamesPoints * 0.07;
//       counterV++;
//     } else if (gameName === "tennis") {
//       tennis += gamesPoints + gamesPoints * 0.05;
//       counterT++;
//     } else if (gameName === "badminton") {
//       badminton += gamesPoints + gamesPoints * 0.02;
//       counterB++;
//     }
//   }
//   let avrVolleyball = Math.floor(volleyball / counterV);
//   let avrTennis = Math.floor(tennis / counterT);
//   let avrBadminton = Math.floor(badminton / counterB);

//   if (avrVolleyball >= 75 && avrTennis >= 75 && avrBadminton >= 75) {
//     sum = volleyball + tennis + badminton;
//     console.log(
//       `Congratulations, ${name}! You won the cruise games with ${Math.floor(
//         sum
//       )} points.`
//     );
//   } else {
//     sum1 = volleyball + tennis + badminton;
//     console.log(
//       `Sorry, ${name}, you lost. Your points are only ${Math.floor(sum1)}.`
//     );
//   }
// }
// cruiseGames([
//   "Pepi",
//   "3",
//   "volleyball",
//   "78",
//   "tennis",
//   "98",
//   "badminton",
//   "105",
// ]);
// cruiseGames([
//   "Annie",
//   "5",
//   "badminton",
//   "34",
//   "tennis",
//   "76",
//   "badminton",
//   "10",
//   "volleyball",
//   "62",
//   "badminton",
//   "56",
// ]);
// cruiseGames([
//   "Ivan",
//   "7",
//   "volleyball",
//   "70",
//   "tennis",
//   "100",
//   "badminton",
//   "64",
//   "volleyball",
//   "125",
//   "tennis",
//   "62",
//   "tennis",
//   "72",
//   "badminton",
//   "87",
// ]);

// function dartsTournament(input) {
//   let pointsStart = Number(input.shift());

//   let count = 0;

//   while (pointsStart > 0) {
//     let sector = input.shift();
//     count++;
//     let currentPoints = Number(input.shift());

//     if (sector == "number section") {
//       pointsStart -= currentPoints;
//     } else if (sector == "double ring") {
//       pointsStart -= currentPoints * 2;
//     } else if (sector == "triple ring") {
//       pointsStart -= currentPoints * 3;
//     } else if (sector == "bullseye") {
//       console.log(
//         `Congratulations! You won the game with a bullseye in ${count} moves!`
//       );
//       break;
//     }

//     if (pointsStart < 0) {
//       console.log(
//         `Sorry, you lost. Score difference: ${Math.abs(pointsStart)}.`
//       );
//       break;
//     }
//   }
//   if (pointsStart == 0) {
//     console.log(`Congratulations! You won the game in ${count} moves!`);
//   }
// }
//  dartsTournament([
//   "150",
//   "double ring",
//   "20",
//   "triple ring",
//   "10",
//   "number section",
//   "20",
//   "triple ring",
//   "20",
// ]);
// dartsTournament(["101", "triple ring", "7", "double ring", "19", "bullseye"]);
// dartsTournament([
//   "75",
//   "triple ring",
//   "17",
//   "number section",
//   "16",
//   "triple ring",
//   "13",
//   "double ring",
//   "10",
// ]);

// function bakingCompetition(input) {
//   let bakers = Number(input.shift());

//   let countAll = 0;

//   let countAllCookies = 0;
//   let countAllCakes = 0;
//   let countAllWaffles = 0;

//   for (let baker = 1; baker <= bakers; baker++) {
//     let name = input.shift();
//     let countCookiesPerBaker = 0;
//     let countCakesPerBaker = 0;
//     let countWafflesPerBaker = 0;
//     let command = input.shift();
//     while (command !== "Stop baking!") {
//       let current = Number(input.shift());
//       countAll += current;

//       if (command == "cookies") {
//         countCookiesPerBaker += current;
//         countAllCookies += current;
//       } else if (command == "cakes") {
//         countCakesPerBaker += current;
//         countAllCakes += current;
//       } else if (command == "waffles") {
//         countWafflesPerBaker += current;
//         countAllWaffles += current;
//       }
//       command = input.shift();
//     }
//     console.log(
//       `${name} baked ${countCookiesPerBaker} cookies, ${countCakesPerBaker} cakes and ${countWafflesPerBaker} waffles.`
//     );
//   }
//   console.log(`All bakery sold: ${countAll}`);
//   let totalSum =
//     countAllCookies * 1.5 + countAllCakes * 7.8 + countAllWaffles * 2.3;
//   console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
// }
// bakingCompetition([
//   "3",
//   "Iva",
//   "cookies",
//   "5",
//   "cakes",
//   "3",
//   "Stop baking!",
//   "George",
//   "cakes",
//   "7",
//   "waffles",
//   "2",
//   "Stop baking!",
//   "Ivan",
//   "cookies",
//   "6",
//   "Stop baking!",
// ]);

// Programming Basics Online Exam - 28 and 29 March 2020
// ----------------------------------------------------------
// function changeBureau(input) {
//   let countBitcoin = Number(input.shift());
//   let countUan = Number(input.shift());
//   let comission = Number(input.shift());

//   let euro = 1.95;
//   let dolar = 1.76;
//   let bitcoin = 1168;
//   let uan = 0.15;

//   let levaBitcoin = bitcoin * countBitcoin;
//   let levaUan = countUan * 0.15 * 1.76;

//   let euroTotal = (levaBitcoin + levaUan) / 1.95;
//   let sum = euroTotal - euroTotal * (comission / 100);
//   console.log(sum.toFixed(2));
// }
// changeBureau(["1", "5", "5"]);

// function suppliesForSchool(input) {
//   let pens = Number(input.shift());
//   let markers = Number(input.shift());
//   let detergent = Number(input.shift());
//   let discount = Number(input.shift());

//   let pensTotal = pens * 5.8;
//   let markersTotal = markers * 7.2;
//   let detergentotal = detergent * 1.2;
//   let sum = pensTotal + markersTotal + detergentotal;

//   sumTotal = sum - (sum * discount) / 100;

//   console.log(sumTotal.toFixed(3));
// }
// suppliesForSchool(["2", "3", "2.5", "25"]);

// function mountainRun(input) {
//   let record = Number(input.shift());
//   let distanceInMeters = Number(input.shift());
//   let timeInSecs = Number(input.shift());
//   let delay = Math.floor(distanceInMeters / 50) * 30;
//   let recordTry = distanceInMeters * timeInSecs;
//   let recordNeeded = recordTry + delay;

//   let diff = record - recordNeeded;
//   if (recordNeeded < record) {
//     console.log(`Yes! The new record is ${recordNeeded.toFixed(2)} seconds.`);
//   } else {
//     console.log(`No! He was ${Math.abs(diff).toFixed(2)} seconds slower.`);
//   }
// }
// mountainRun(["10164", "1400", "25"]);
// mountainRun(["5554.36", "1340", "3.23"]);
// mountainRun(["1377", "389", "3"]);

// function catWalking(input) {
//   let min = Number(input.shift());
//   let trips = Number(input.shift());
//   let calories = Number(input.shift());

//   let minTotal = min * trips;
//   let caloriesBurnt = minTotal * 5;

//   let caloriesNeeded = calories * 0.5;

//   if (caloriesBurnt >= caloriesNeeded) {
//     console.log(
//       `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`
//     );
//   } else {
//     console.log(
//       `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`
//     );
//   }
// }
// catWalking(["30", "3", "600"]);
// catWalking(["15", "2", "500"]);

// function fitnessCard(input) {
//   let budget = Number(input.shift());
//   let gender = input.shift();
//   let age = Number(input.shift());
//   let activity = input.shift();

//   let price = 0;

//   if (gender === "m") {
//     if (activity === "Gym") {
//       price = 42;
//     } else if (activity === "Boxing") {
//       price = 41;
//     } else if (activity === "Yoga") {
//       price = 45;
//     } else if (activity === "Zumba") {
//       price = 34;
//     } else if (activity === "Dances") {
//       price = 51;
//     } else if (activity === "Pilates") {
//       price = 51;
//     }
//   } else if (gender === "f") {
//     if (activity === "Gym") {
//       price = 35;
//     } else if (activity === "Boxing") {
//       price = 37;
//     } else if (activity === "Yoga") {
//       price = 42;
//     } else if (activity === "Zumba") {
//       price = 31;
//     } else if (activity === "Dances") {
//       price = 53;
//     } else if (activity === "Pilates") {
//       price = 37;
//     }
//   }
//   if (age <= 19) {
//     price -= price * 0.2;
//   }
//   if (budget > price) {
//     console.log(`You purchased a 1 month pass for ${activity}.`);
//   } else {
//     let diff = budget - price;
//     console.log(
//       `You don't have enough money! You need $${Math.abs(diff).toFixed(
//         2
//       )} more.`
//     );
//   }
// }
// fitnessCard(["50", "m", "23", "Gym"]);
// fitnessCard(["20", "f", "15", "Yoga"]);
// fitnessCard(["10", "m", "50", "Pilates"]);

// function energyBooster(input) {
//   let fruit = input.shift();
//   let size = input.shift();
//   let count = Number(input.shift());

//   let price = 0;

//   if (size === "small") {
//     if (fruit === "Watermelon") {
//       price = 56 * count * 2;
//     } else if (fruit === "Mango") {
//       price = 36.66 * count * 2;
//     } else if (fruit === "Pineapple") {
//       price = 42.1 * count * 2;
//     } else if (fruit === "Raspberry") {
//       price = 20 * count * 2;
//     }
//   } else if (size === "big") {
//     if (fruit === "Watermelon") {
//       price = 28.7 * count * 5;
//     } else if (fruit === "Mango") {
//       price = 19.6 * count * 5;
//     } else if (fruit === "Pineapple") {
//       price = 24.8 * count * 5;
//     } else if (fruit === "Raspberry") {
//       price = 15.2 * count * 5;
//     }
//   }
//   if (price >= 400 && price <= 1000) {
//     price -= price * 0.15;
//   } else if (price > 1000) {
//     price -= price * 0.5;
//   }
//   console.log(`${price.toFixed(2)} lv.`);
// }
// energyBooster(["Watermelon", "big", "4"]);

// function trekkingMania(input) {
//   let group = Number(input.shift());
//   let sum = 0;
//   let musala = 0;
//   let monblan = 0;
//   let kilimandjaro = 0;
//   let k2 = 0;
//   let everest = 0;

//   for (let i = 1; i <= group; i++) {
//     let currentNum = Number(input.shift());
//     if (currentNum <= 5) {
//       musala += currentNum;
//       sum += currentNum;
//     } else if (currentNum >= 6 && currentNum <= 12) {
//       monblan += currentNum;
//       sum += currentNum;
//     } else if (currentNum >= 13 && currentNum <= 25) {
//       kilimandjaro += currentNum;
//       sum += currentNum;
//     } else if (currentNum >= 26 && currentNum <= 40) {
//       k2 += currentNum;
//       sum += currentNum;
//     } else if (currentNum >= 41) {
//       everest += currentNum;
//       sum += currentNum;
//     }
//   }

//   let pMusala = (musala / sum) * 100;
//   let pMonblan = (monblan / sum) * 100;
//   let pKilimandjaro = (kilimandjaro / sum) * 100;
//   let pK2 = (k2 / sum) * 100;
//   let pEverest = (everest / sum) * 100;

//   console.log(`${pMusala.toFixed(2)}%`);
//   console.log(`${pMonblan.toFixed(2)}%`);
//   console.log(`${pKilimandjaro.toFixed(2)}%`);
//   console.log(`${pK2.toFixed(2)}%`);
//   console.log(`${pEverest.toFixed(2)}%`);
// }
// trekkingMania([
//   "10",
//   "10",
//   "5",
//   "1",
//   "100",
//   "12",
//   "26",
//   "17",
//   "37",
//   "40",
//   "78",
// ]);

// function foodForPets(input) {
//   let days = Number(input.shift());
//   let foodOwned = Number(input.shift());

//   let catFood = 0;
//   let dogFood = 0;
//   let foodNeeded = 0;
//   let biscuits = 0;

//   for (let i = 1; i <= days; i++) {
//     let currentDogFood = Number(input.shift());
//     let currentCatFood = Number(input.shift());
//     catFood += currentCatFood;
//     dogFood += currentDogFood;
//     foodNeeded += currentDogFood + currentCatFood;
//     if (i % 3 === 0) {
//       biscuits += (currentCatFood + currentDogFood) * 0.1;
//     }
//   }
//   let percentageFoodNeeded = (foodNeeded / foodOwned) * 100;
//   let percentageDogFood = (dogFood / foodNeeded) * 100;
//   let percentageCatFood = (catFood / foodNeeded) * 100;
//   console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
//   console.log(
//     `${percentageFoodNeeded.toFixed(2)}% of the food has been eaten.`
//   );
//   console.log(`${percentageDogFood.toFixed(2)}% eaten from the dog.`);
//   console.log(`${percentageCatFood.toFixed(2)}% eaten from the cat.`);
// }
// foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);

// function careOfPuppy(input) {
//   let foodOwnedKg = Number(input.shift());
//   let foodOwnedGr = foodOwnedKg * 1000;

//   let foodNeeded = 0;
//   let count = 0;
//   let currentFood = input.shift();

//   while (currentFood !== "Adopted") {
//     foodNeeded += Number(currentFood);
//     count++;
//     currentFood = input.shift();
//   }
//   if (foodNeeded <= foodOwnedGr) {
//     console.log(
//       `Food is enough! Leftovers: ${foodOwnedGr - foodNeeded} grams.`
//     );
//   } else {
//     console.log(
//       `Food is not enough. You need ${foodNeeded - foodOwnedGr} grams more.`
//     );
//   }
// }
// careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);

// function suitcasesLoad(input) {
//   let capacity = Number(input.shift());

//   let space = 0;
//   let counter = 0;
//   let command = input.shift();

//   while (command !== "End") {
//     let num = Number(command);
//     counter++;
//     if (counter % 3 === 0) {
//       num += num * 0.1;
//     }
//     space += num;

//     if (capacity < space) {
//       console.log(`No more space!`);
//       console.log(`Statistic: ${counter - 1} suitcases loaded.`);
//       break;
//     }
//     command = input.shift();
//   }
//   if (command === "End" && space <= capacity) {
//     console.log(`Congratulations! All suitcases are loaded!`);
//     console.log(`Statistic: ${counter} suitcases loaded.`);
//   }
// }
// suitcasesLoad(["550", "100", "252", "72", "End"]);
// suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
// suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);

// function tournamentrOfChristmas(input) {
//   let days = Number(input.shift());

//   let daysWon = 0;
//   let moneyWon = 0;

//   for (let i = 0; i < days; i++) {
//     let sport = input.shift();
//     let gamesWon = 0;
//     let gamesLost = 0;
//     let moneyWonForDay = 0;

//     while (sport != "Finish") {
//       let result = input.shift();
//       if (result == "win") {
//         gamesWon++;
//         moneyWonForDay += 20;
//       } else {
//         gamesLost++;
//       }

//       sport = input.shift();
//     }
//     if (gamesWon > gamesLost) {
//       daysWon++;
//       moneyWonForDay *= 1.1;
//     }
//     moneyWon += moneyWonForDay;
//   }

//   let hasWin = daysWon > days / 2;
//   if (hasWin) {
//     moneyWon *= 1.2;
//   }
//   if (hasWin) {
//     console.log(
//       `You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`
//     );
//   } else {
//     console.log(
//       `You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`
//     );
//   }
// }
// tournamentrOfChristmas([
//   "2",
//   "volleyball",
//   "win",
//   "football",
//   "lose",
//   "basketball",
//   "win",
//   "Finish",
//   "golf",
//   "win",
//   "tennis",
//   "win",
//   "badminton",
//   "win",
//   "Finish",
// ]);

// Programming Basics Online Exam - 20 and 21 April 2019
// ---------------------------------------------------------------
// function easterLunch(input) {
//   let kozunak = Number(input.shift());
//   let eggs = Number(input.shift());
//   let cookies = Number(input.shift());

//   let kozunakTotal = kozunak * 3.2;
//   let eggsTotal = eggs * 4.35;
//   let cookiesTotal = cookies * 5.4;
//   let paintEggs = eggs * 0.15 * 12;

//   let total = kozunakTotal + cookiesTotal + eggsTotal + paintEggs;
//   console.log(total.toFixed(2));
// }
// easterLunch(["3", "2", "3"]);

// function easterBakery(input) {
//   let flourPrice = Number(input.shift());
//   let flourKg = Number(input.shift());
//   let sugarKg = Number(input.shift());
//   let eggs = Number(input.shift());
//   let yeast = Number(input.shift());

//   let flourTotal = flourPrice * flourKg;
//   let sugarPrice = flourPrice - 0.25 * flourPrice;
//   let sugarTotal = sugarKg * sugarPrice;
//   let eggsPrice = flourPrice + flourPrice * 0.1;
//   let eggsTotal = eggs * eggsPrice;
//   let yeastPrice = sugarPrice - sugarPrice * 0.8;
//   let yeastTotal = yeast * yeastPrice;

//   let total = flourTotal + sugarTotal + eggsTotal + yeastTotal;
//   console.log(total.toFixed(2));
// }
// easterBakery(["50", "10", "3.5", "6", "1"]);

// function easterParty(input) {
//   let countGuests = Number(input.shift());
//   let pricePerPerson = Number(input.shift());
//   let budget = Number(input.shift());

//   let discount = 0;

//   if (countGuests >= 10 && countGuests <= 15) {
//     discount = pricePerPerson * 0.15;
//   } else if (countGuests > 15 && countGuests <= 20) {
//     discount = pricePerPerson * 0.2;
//   } else if (countGuests > 20) {
//     discount = pricePerPerson * 0.25;
//   } else {
//     discount = 0;
//   }
//   let price = pricePerPerson - discount;
//   let cake = budget * 0.1;
//   let cost = price * countGuests + cake;

//   if (cost <= budget) {
//     console.log(`It is party time! ${(budget - cost).toFixed(2)} leva left.`);
//   } else {
//     console.log(`No party! ${(cost - budget).toFixed(2)} leva needed.`);
//   }
// }
// easterParty(["18", "30", "450"]);
// easterParty(["8", "25", "340"]);

// function easterGuests(input) {
//   let guests = Number(input.shift());
//   let budget = Number(input.shift());

//   let easterBread = Math.ceil(guests / 3);
//   let eggs = guests * 2;

//   let easterBreadTotal = easterBread * 4;
//   let eggsTotal = eggs * 0.45;

//   let totalCost = easterBreadTotal + eggsTotal;

//   if (budget >= totalCost) {
//     console.log(`Lyubo bought ${easterBread} Easter bread and ${eggs} eggs.`);
//     console.log(`He has ${Math.abs(totalCost - budget).toFixed(2)} lv. left.`);
//   } else {
//     console.log(`Lyubo doesn't have enough money.`);
//     console.log(
//       `He needs ${Math.abs(budget - totalCost).toFixed(2)} lv. more.`
//     );
//   }
// }
// easterGuests(["10", "35"]);

// function easterTrip(input) {
//   let destination = input.shift();
//   let dates = input.shift();
//   let nights = Number(input.shift());

//   let cost = 0;

//   if (destination === "France") {
//     if (dates === "21-23") {
//       cost = nights * 30;
//     } else if (dates === "24-27") {
//       cost = nights * 35;
//     } else if (dates === "28-31") {
//       cost = nights * 40;
//     }
//   } else if (destination === "Italy") {
//     if (dates === "21-23") {
//       cost = nights * 28;
//     } else if (dates === "24-27") {
//       cost = nights * 32;
//     } else if (dates === "28-31") {
//       cost = nights * 39;
//     }
//   } else if (destination === "Germany") {
//     if (dates === "21-23") {
//       cost = nights * 32;
//     } else if (dates === "24-27") {
//       cost = nights * 37;
//     } else if (dates === "28-31") {
//       cost = nights * 43;
//     }
//   }
//   console.log(`Easter trip to ${destination} : ${cost.toFixed(2)} leva.`);
// }
// easterTrip(["Germany", "24-27", "5"]);

// function paintingEggs(input) {
//   let size = input.shift();
//   let colour = input.shift();
//   let lot = Number(input.shift());

//   let income = 0;

//   if (size === "Large") {
//     if (colour === "Red") {
//       income = lot * 16;
//     } else if (colour === "Green") {
//       income = lot * 12;
//     } else if (colour === "Yellow") {
//       income = lot * 9;
//     }
//   } else if (size === "Medium") {
//     if (colour === "Red") {
//       income = lot * 13;
//     } else if (colour === "Green") {
//       income = lot * 9;
//     } else if (colour === "Yellow") {
//       income = lot * 7;
//     }
//   } else if (size === "Small") {
//     if (colour === "Red") {
//       income = lot * 9;
//     } else if (colour === "Green") {
//       income = lot * 8;
//     } else if (colour === "Yellow") {
//       income = lot * 5;
//     }
//   }
//   let profit = income - income * 0.35;
//   console.log(`${profit.toFixed(2)} leva.`);
// }
// paintingEggs(["Large", "Red", "7"]);

// function easterEggsBattle(input) {
//   let firstPlayerEggs = Number(input.shift());
//   let secondPlayerEggs = Number(input.shift());

//   let counter = 0;
//   let currentEgg = 1;

//   let command = input.shift();
//   while (command !== "End of battle") {
//     counter++;
//     if (command === "one") {
//       secondPlayerEggs -= currentEgg;
//     } else if (command === "two") {
//       firstPlayerEggs -= currentEgg;
//     }
//     if (firstPlayerEggs <= 0) {
//       console.log(
//         `Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`
//       );
//       break;
//     } else if (secondPlayerEggs <= 0) {
//       console.log(
//         `Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`
//       );
//       break;
//     }
//     command = input.shift();
//   }
//   if (command === "End of battle") {
//     console.log(`Player one has ${firstPlayerEggs} eggs left.`);
//     console.log(`Player two has ${secondPlayerEggs} eggs left.`);
//   }
// }
// easterEggsBattle([
//   "5",
//   "4",
//   "one",
//   "two",
//   "one",
//   "two",
//   "two",
//   "End of battle",
// ]);
// easterEggsBattle(["2", "6", "one", "two", "two"]);
// easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);

// function easterShop(input) {
//   let eggsStart = Number(input.shift());

//   let sumSold = 0;

//   counter = 0;

//   let command = input.shift();

//   while (command !== "Close") {
//     let currentEgg = Number(input.shift());
//     counter++;

//     if (command === "Buy") {
//       if (eggsStart >= currentEgg) {
//         eggsStart -= currentEgg;
//         sumSold += currentEgg;
//       } else {
//         console.log(`Not enough eggs in store!`);
//         console.log(`You can buy only ${eggsStart}.`);
//         break;
//       }
//     } else if (command === "Fill") {
//       eggsStart += currentEgg;
//     }

//     command = input.shift();
//   }
//   if (command === "Close") {
//     console.log(`Store is closed!`);
//     console.log(`${sumSold} eggs sold.`);
//   }
// }
// easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
// easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);

// function easterEggs(input) {
//   let eggsCount = Number(input.shift());

//   let colour = 0;
//   let redCount = 0;
//   let orangeCount = 0;
//   let blueCount = 0;
//   let greenCount = 0;
//   let maxEggsCount = 0;

//   for (let i = 0; i < eggsCount; i++) {
//     colour = input.shift();
//     let currentEgg = 1;
//     if (colour === "red") {
//       redCount += currentEgg;
//     } else if (colour === "orange") {
//       orangeCount += currentEgg;
//     } else if (colour === "blue") {
//       blueCount += currentEgg;
//     } else if ((colour = "green")) {
//       greenCount += currentEgg;
//     }
//   }
//   if (redCount > maxEggsCount) {
//     maxEggsCount = redCount;
//     colour = "red";
//   }
//   if (orangeCount > maxEggsCount) {
//     maxEggsCount = orangeCount;
//     colour = "orange";
//   }
//   if (blueCount > maxEggsCount) {
//     maxEggsCount = blueCount;
//     colour = "blue";
//   }
//   if (greenCount > maxEggsCount) {
//     maxEggsCount = greenCount;
//     colour = "green";
//   }
//   console.log(`Red eggs: ${redCount}`);
//   console.log(`Orange eggs: ${orangeCount}`);
//   console.log(`Blue eggs: ${blueCount}`);
//   console.log(`Green eggs: ${greenCount}`);
//   console.log(`Max eggs: ${maxEggsCount} -> ${colour}`);
// }
// easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
// easterEggs(["4", "blue", "red", "blue", "orange"]);

// function easterBake(input) {
//   let easterBread = Number(input.shift());

//   let sugarSum = 0;
//   let flourSum = 0;
//   let maxNumFlour = 0;
//   let maxNumSugar = 0;

//   for (let i = 0; i < easterBread; i++) {
//     let currentSugar = Number(input.shift());
//     let currentFlour = Number(input.shift());
//     sugarSum += currentSugar;
//     flourSum += currentFlour;

//     if (currentSugar > maxNumSugar) {
//       maxNumSugar = currentSugar;
//     }
//     if (currentFlour > maxNumFlour) {
//       maxNumFlour = currentFlour;
//     }
//   }
//   console.log(`Sugar:${Math.ceil(sugarSum / 950)}`);
//   console.log(`Flour:${Math.ceil(flourSum / 750)}`);
//   console.log(
//     `Max used flour is ${maxNumFlour} grams, max used sugar is ${maxNumSugar} grams.`
//   );
// }
// easterBake(["3", "400", "350", "250", "300", "450", "380"]);
// easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);

// Programming Basics Online Retake Exam - 2 and 3 May 2019
// --------------------------------------------------------------

// function foodDelivery(input) {
//   let chickenMenu = Number(input.shift());
//   let fishMenu = Number(input.shift());
//   let veganMenu = Number(input.shift());

//   let menu = chickenMenu * 10.35 + fishMenu * 12.4 + veganMenu * 8.15;
//   let dessert = menu * 0.2;

//   let menuAll = menu + dessert + 2.5;
//   console.log(`Total: ${menuAll.toFixed(2)}`);
// }
// foodDelivery(["2", "4", "3"]);

// function safari(input) {
//   let budget = Number(input.shift());
//   let fuelOwned = Number(input.shift());
//   let day = input.shift();

//   let price = 0;
//   let discount = 0;

//   if (day === "Saturday") {
//     price = 100 + fuelOwned * 2.1;
//     discount = price * 0.1;
//   } else if (day === "Sunday") {
//     price = 100 + fuelOwned * 2.1;
//     discount = price * 0.2;
//   }

//   let totalprice = price - discount;
//   if (totalprice <= budget) {
//     console.log(
//       `Safari time! Money left: ${(budget - totalprice).toFixed(2)} lv.`
//     );
//   } else {
//     let diff = totalprice - budget;
//     console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
//   }
// }
// safari(["1000", "10", "Sunday"]);

// function mobileOperator(input) {
//   let periodContract = input.shift();
//   let typeContract = input.shift();
//   let mobileInternet = input.shift();
//   let months = Number(input.shift());

//   let price = 0;

//   if (periodContract === "one") {
//     if (typeContract === "Small") {
//       if (mobileInternet === "yes" || price <= 10) {
//         price = 9.98;
//         mobileInternet = 5.5;
//       } else {
//         price = 9.98;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "Middle") {
//       if (mobileInternet === "yes" || price >= 11 && price <= 29.0) {
//         price = 18.99;
//         mobileInternet = 4.35;
//       } else {
//         price = 18.99;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "Large") {
//       if (mobileInternet === "yes" || price >= 11 && price <= 29.0) {
//         price = 25.98;
//         mobileInternet = 4.35;
//       } else {
//         price = 25.98;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "ExtraLarge") {
//       if (mobileInternet === "yes" || price >= 30.0) {
//         price = 35.99;
//         mobileInternet = 3.85;
//       } else {
//         price = 35.99;
//         mobileInternet = 0;
//       }
//     }
//   } else if (periodContract === "two") {
//     if (typeContract === "Small") {
//       if (mobileInternet === "yes" || price <= 10) {
//         price = 8.58;
//         mobileInternet = 5.5;
//       } else {
//         price = 8.58;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "Middle") {
//       if (mobileInternet === "yes" || (price >= 11 && price <= 29.0)) {
//         price = 17.09;
//         mobileInternet = 4.35;
//       } else {
//         price = 17.09;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "Large") {
//       if (mobileInternet === "yes" || (price >= 11 && price <= 29.0)) {
//         price = 23.59;
//         mobileInternet = 4.35;
//       } else {
//         price = 23.59;
//         mobileInternet = 0;
//       }
//     } else if (typeContract === "ExtraLarge") {
//       if (mobileInternet === "yes" || price >= 30.0) {
//         price = 31.79;
//         mobileInternet = 3.85;
//       } else {
//         price = 31.79;
//         mobileInternet = 0;
//       }
//     }
//   }
//   let totalPrice = (price + mobileInternet) * months;
//   if (periodContract === "two") {
//     totalPrice -= totalPrice * 0.0375;
//   } else {
//     totalPrice;
//   }
//   console.log(`${totalPrice.toFixed(2)} lv.`);
// }
// mobileOperator(["one", "Small", "yes", "10"]);
// mobileOperator(["two", "Large", "no", "10"]);
// mobileOperator(["two", "ExtraLarge", "yes", "20"]);
// mobileOperator(["two", "Small", "yes", "20"]);

// function touristShop(input) {
//   let budget = Number(input.shift());
//   let name = 0;
//   let command = input.shift();
//   let counter = 0;
//   let price = 0;

//   while (command !== "Stop") {
//     command = input.shift();
//     let currentPrice = Number(command);
//     counter++;

//     if (counter % 3 === 0) {
//       price -= currentPrice * 0.5;
//     }

//     if ((command = currentPrice)) {
//       price += currentPrice;
//     }

//     if (price > budget) {
//       console.log(`You don't have enough money!`);
//       console.log(`You need ${Math.abs(budget - price).toFixed(2)} leva!`);
//       break;
//     }
//     command = input.shift();
//   }
//   if (command === "Stop") {
//     console.log(`You bought ${counter} products for ${price.toFixed(2)} leva.`);
//   }
// }
// touristShop([
//   "153.20",
//   "Backpack",
//   "25.20",
//   "Shoes",
//   "54",
//   "Sunglasses",
//   "30",
//   "Stop",
// ]);
// touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);

// function divisionWithoutRemainder(input) {
//   let n = Number(input.shift());

//   let p1Counter = 0;
//   let p2Counter = 0;
//   let p3Counter = 0;

//   for (let i = 1; i <= n; i++) {
//     let currentNum = Number(input.shift());
//     if (currentNum % 2 == 0) {
//       p1Counter++;
//     }
//     if (currentNum % 3 == 0) {
//       p2Counter++;
//     }
//     if (currentNum % 4 == 0) {
//       p3Counter++;
//     }
//   }
//   let percentageP1 = (p1Counter / n) * 100;
//   let peracentageP2 = (p2Counter / n) * 100;
//   let percentageP3 = (p3Counter / n) * 100;
//   console.log(`${percentageP1.toFixed(2)}%`);
//   console.log(`${peracentageP2.toFixed(2)}%`);
//   console.log(`${percentageP3.toFixed(2)}%`);
// }
// divisionWithoutRemainder([
//   "10",
//   "680",
//   "2",
//   "600",
//   "200",
//   "800",
//   "799",
//   "199",
//   "46",
//   "128",
//   "65",
// ]);
// divisionWithoutRemainder(["3", "3", "6", "9"]);

// function vetParking(input) {
//   let days = Number(input.shift());
//   let hours = Number(input.shift());
//   currSum = 0;
//   totalSum = 0;
//   for (let i = 1; i <= days; i++) {
//     currSum = 0;
//     for (let j = 1; j <= hours; j++) {
//       sum = 0;
//       if (i % 2 === 0 && j % 2 === 1) {
//         currSum += 2.5;
//       } else if (i % 2 === 1 && j % 2 === 0) {
//         currSum += 1.25;
//       } else {
//         currSum += 1;
//       }
//     }
//     totalSum += currSum;
//     console.log(`Day: ${i} - ${currSum.toFixed(2)} leva`);
//   }
//   console.log(`Total: ${totalSum.toFixed(2)} leva`);
// }
// vetParking(["2", "5"]);

// Programming Basics Online Exam - 9 and 10 March 2019
// -------------------------------------------------------

// function basketballEquipment(input) {
//   let fee = Number(input.shift());
//   let shoes = fee - fee * 0.4;
//   let equipment = shoes - shoes * 0.2;
//   let ball = equipment * (1 / 4);
//   let accesories = ball * (1 / 5);

//   let total = fee + shoes + equipment + ball + accesories;
//   console.log(total.toFixed(2));
// }
// basketballEquipment(["320"]);

// function gameNumberWars(input) {
//   let player1Name = input.shift();
//   let player2Name = input.shift();
//   let command = input.shift();

//   let sum1 = 0;
//   let sum2 = 0;

//   while (command !== "End of game") {
//     let num1Player = Number(input.shift());
//     let num2Player = Number(input.shift());

//     if (num1Player == num2Player) {
//       console.log("Number wars!");
//       num1Player = Number(input.shift());
//       num2Player = Number(input.shift());
//       if (num1Player > num2Player) {
//         console.log(`${player1Name} is winner with ${sum1} points`);
//         break;
//       } else {
//         console.log(`${player2Name}  is winner with ${sum2} points`);
//         break;
//       }
//     }

//     if (num1Player > num2Player) {
//       sum1 += num1Player - num2Player;
//     } else {
//       sum2 += num2Player - num1Player;
//     }
//     command = input.shift();
//   }
//   if (command === "End of game") {
//     console.log(`${player1Name} has ${sum1} points`);
//     console.log(`${player2Name} has ${sum2} points`);
//   }
// }
// gameNumberWars([
//   "Desi",
//   "Niki",
//   "7",
//   "5",
//   "3",
//   "4",
//   "3",
//   "3",
//   "5",
//   "3",
//   "",
//   "",
// ]);
// gameNumberWars([
//   "Elena",
//   "Simeon",
//   "6",
//   "3",
//   "2",
//   "5",
//   "8",
//   "9",
//   "End of game",
// ]);
// gameNumberWars([
//   "Aleks",
//   "Georgi",
//   "4",
//   "5",
//   "3",
//   "2",
//   "4",
//   "3",
//   "4",
//   "4",
//   "5",
//   "2",
//   "",
//   "",
//   "",
// ]);

// function darts(input) {
//   let playerName = input.shift();
//   let command = input.shift();
//   let counter = 0;
//   let counter1 = 0;

//   let start = 301;

//   while (command !== "Retire") {
//     let num = Number(input.shift());

//     if (start === 0) {
//       console.log(`${playerName} won the leg with ${counter} shots.`);
//       break;
//     }

//     if (start < num) {
//       console.log(
//         `${playerName} retired after ${counter1} unsuccessful shots.`
//       );
//       break;
//     }

//     if (command === "Single") {
//       start -= num;
//     } else if (command === "Double") {
//       start -= num * 2;
//     } else if (command === "Triple") {
//       start -= num * 3;
//     }

//     command = input.shift();
//     counter++;
//   }
//   if (command === "Retire") {
//     console.log(`${playerName} won the leg with ${counter} shots.`);
//   }
// }
// darts([
//   "Michael van Gerwen",
//   "Triple",
//   "20",
//   "Triple",
//   "19",
//   "Double",
//   "10",
//   "Single",
//   "3",
//   "Single",
//   "1",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
// ]);
// darts([
//   "Stephen Bunting",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "7",
//   "Single",
//   "12",
//   "Double",
//   "1",
//   "Single",
//   "1",
//   "",
// ]);
// darts([
//   "Rob Cross",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "5",
//   "Triple",
//   "10",
//   "Double",
//   "6",
//   "Retire",
// ]);

// function tennisRanklist(input) {
//   let toursNum = Number(input.shift());
//   let startPoints = Number(input.shift());
//   let counterW = 0;
//   let currentPoints = 0;

//   for (let i = 1; i <= toursNum; i++) {
//     let stage = input.shift();

//     if (stage === "W") {
//       startPoints += 2000;
//       currentPoints += 2000;
//       counterW++;
//     } else if (stage === "F") {
//       startPoints += 1200;
//       currentPoints += 1200;
//     } else if (stage === "SF") {
//       startPoints += 720;
//       currentPoints += 720;
//     }
//   }
//   let avr = currentPoints / toursNum;
//   let percentageW = (counterW / toursNum) * 100;
//   console.log(`Final points: ${startPoints}`);
//   console.log(`Average points: ${Math.floor(avr)}`);
//   console.log(`${percentageW.toFixed(2)}%`);
// }
// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);

// function fitnessCenter(input) {
//   let visitorsNum = Number(input.shift());

//   let back = 0;
//   let chest = 0;
//   let legs = 0;
//   let abs = 0;
//   let proteinShake = 0;
//   let proteinBar = 0;

//   for (let i = 0; i < visitorsNum; i++) {
//     let workout = input.shift();

//     if (workout === "Back") {
//       back++;
//     } else if (workout === "Chest") {
//       chest++;
//     } else if (workout === "Legs") {
//       legs++;
//     } else if (workout === "Abs") {
//       abs++;
//     } else if (workout === "Protein shake") {
//       proteinShake++;
//     } else if (workout === "Protein bar") {
//       proteinBar++;
//     }
//   }
//   let workOut = back + chest + legs + abs;
//   let protein = proteinShake + proteinBar;
//   let pWorkout = (workOut / visitorsNum) * 100;
//   let pProtein = (protein / visitorsNum) * 100;

//   console.log(`${back} - back`);
//   console.log(`${chest} - chest`);
//   console.log(`${legs} - legs`);
//   console.log(`${abs} - abs`);
//   console.log(`${proteinShake} - protein shake`);
//   console.log(`${proteinBar} - protein bar`);
//   console.log(`${pWorkout.toFixed(2)}% - work out`);
//   console.log(`${pProtein.toFixed(2)}% - protein`);
// }
// fitnessCenter([
//   "10",
//   "Back",
//   "Chest",
//   "Legs",
//   "Abs",
//   "Protein shake",
//   "Protein bar",
//   "Protein shake",
//   "Protein bar",
//   "Legs",
//   "Abs",
// ]);

// Programming Basics Online Exam - 15 and 16 June 2019

// function cinema(input) {
//   let capacity = Number(input.shift());

//   let command = input.shift();
//   let people = 0;
//   let sumPeople = 0;
//   let sum = 0;

//   while (command !== "Movie time!") {
//     if (sumPeople >= capacity) {
//       console.log("The cinema is full.");
//       console.log(`Cinema income - ${sum} lv.`);
//       break;
//     }
//     people = Number(command);
//     sum += people * 5;
//     sumPeople += people;
//     if (people % 3 === 0) {
//       sum -= 5;
//     }
//     command = input.shift();
//   }
//   if (command === "Movie time!") {
//     console.log(`There are ${capacity - sumPeople} seats left in the cinema.`);
//     console.log(`Cinema income - ${sum} lv.`);
//   }
// }
// // cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// // cinema(["50", "15", "10", "10", "15", "5"]);
// // cinema([
// //   "100",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "10",
// //   "Movie time!",
// // ]);
// cinema(["50", "15", "15", "10", "9", "9"]);

// function series(input) {
//   let budget = Number(input.shift());
//   let seriesNum = Number(input.shift());

//   let price = 0;
//   let currentNum = 0;

//   for (let i = 0; i < seriesNum; i++) {
//     let seriesName = input.shift();
//     currentNum = Number(input.shift());

//     if (seriesName === "Thrones") {
//       price = currentNum * 0.5;
//     } else if (seriesName === "Lucifer") {
//       price = currentNum * 0.4;
//     } else if (seriesName === "Protector") {
//       price = currentNum * 0.3;
//     } else if (seriesName === "TotalDrama") {
//       price = currentNum * 0.2;
//     } else if (seriesName === "Area") {
//       price = currentNum * 0.1;
//     } else {
//       price = currentNum;
//     }
//   }

//   if (budget >= price) {
//     console.log(
//       `You bought all the series and left with ${(budget - price).toFixed(
//         2
//       )} lv.`
//     );
//   } else {
//     let diff = (price - budget).toFixed(2);
//     console.log(`You need ${diff} lv. more to buy the series!`);
//   }
// }
// series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
// series([
//   "25",
//   "6",
//   "Teen Wolf",
//   "8",
//   "Protector",
//   "5",
//   "TotalDrama",
//   "5",
//   "Area",
//   "4",
//   "Thrones",
//   "5",
//   "Lucifer",
//   "9",
// ]);

// Programming Basics Online Exam - 6 and 7 April 2019

// function oscarsCeremony(input) {
//   let rentHall = Number(input.shift());

//   let statues = rentHall - rentHall * 0.3;
//   let catering = statues - statues * 0.15;
//   let sound = catering * 0.5;

//   let price = rentHall + statues + catering + sound;
//   console.log(price.toFixed(2));
// }
// oscarsCeremony(["3500"]);

// function godzillaVSkong(input) {
//   let budget = Number(input.shift());
//   let artistsNum = Number(input.shift());
//   let priceClothes = Number(input.shift());
//   let priceClothesTotal = 0;
//   let decor = budget * 0.1;

//   if (artistsNum > 150) {
//     priceClothesTotal =
//       artistsNum * priceClothes - artistsNum * priceClothes * 0.1;
//   } else {
//     priceClothesTotal = artistsNum * priceClothes;
//   }
//   let moneyNeeded = priceClothesTotal + decor;
//   if (budget >= moneyNeeded) {
//     console.log(`Action!`);
//     console.log(
//       `Wingard starts filming with ${(budget - moneyNeeded).toFixed(
//         2
//       )} leva left.`
//     );
//   } else {
//     let diff = (moneyNeeded - budget).toFixed(2);
//     console.log("Not enough money!");
//     console.log(`Wingard needs ${diff} leva more.`);
//   }
// }
// godzillaVSkong(["20000", "120", "55.5"]);
// godzillaVSkong(["15437.62", "186", "57.99"]);
// godzillaVSkong(["9587.88", "222", "55.68"]);

// function oscarsWeekInCinema(input) {
//   let movieName = input.shift();
//   let hallType = input.shift();
//   let ticketsPurchased = Number(input.shift());

//   let price = 0;

//   if (movieName === "A Star Is Born") {
//     if (hallType === "normal") {
//       price = ticketsPurchased * 7.5;
//     } else if (hallType === "luxury") {
//       price = ticketsPurchased * 10.5;
//     } else if (hallType === "ultra luxury") {
//       price = ticketsPurchased * 13.5;
//     }
//   } else if (movieName === "Bohemian Rhapsody") {
//     if (hallType === "normal") {
//       price = ticketsPurchased * 7.35;
//     } else if (hallType === "luxury") {
//       price = ticketsPurchased * 9.45;
//     } else if (hallType === "ultra luxury") {
//       price = ticketsPurchased * 12.75;
//     }
//   } else if (movieName === "Green Book") {
//     if (hallType === "normal") {
//       price = ticketsPurchased * 8.15;
//     } else if (hallType === "luxury") {
//       price = ticketsPurchased * 10.25;
//     } else if (hallType === "ultra luxury") {
//       price = ticketsPurchased * 13.25;
//     }
//   } else if (movieName === "The Favourite") {
//     if (hallType === "normal") {
//       price = ticketsPurchased * 8.75;
//     } else if (hallType === "luxury") {
//       price = ticketsPurchased * 11.55;
//     } else if (hallType === "ultra luxury") {
//       price = ticketsPurchased * 13.95;
//     }
//   }
//   console.log(`${movieName} -> ${price.toFixed(2)} lv.`);
// }
// oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);

// function movieRatings(input) {
//   let movieNum = Number(input.shift());
//   let sum = 0;
//   let movieNameMax = "";
//   let movieNameMin = "";
//   let minRate = Number.MAX_SAFE_INTEGER;
//   let maxRate = Number.MIN_SAFE_INTEGER;

//   for (let i = 1; i <= movieNum; i++) {
//     currentMovieName = input.shift();
//     let movieRate = Number(input.shift());

//     sum += movieRate;

//     if (minRate > movieRate) {
//       minRate = movieRate;
//       movieNameMin = currentMovieName;
//     }
//     if (maxRate < movieRate) {
//       maxRate = movieRate;
//       movieNameMax = currentMovieName;
//     }
//   }

//   let avrRate = sum / movieNum;
//   console.log(`${movieNameMax} is with highest rating: ${maxRate.toFixed(1)}`);
//   console.log(`${movieNameMin} is with lowest rating: ${minRate.toFixed(1)}`);
//   console.log(`Average rating: ${avrRate.toFixed(1)}`);
// }
// movieRatings([
//   "5",
//   "A Star is Born",
//   "7.8",
//   "Creed 2",
//   "7.3",
//   "Mary Poppins",
//   "7.2",
//   "Vice",
//   "7.2",
//   "Captain Marvel",
//   "7.1",
// ]);

// Programming Basics Online Exam - 6 and 7 July 2019

function familyTrip(input) {}
familyTrip();

// function pcGameShop(input) {
//   let gamesSold = Number(input.shift());

//   let hGame = 0;
//   let fGame = 0;
//   let oGame = 0;
//   let othGame = 0;

//   for (let i = 0; i < gamesSold; i++) {
//     let nameGame = input.shift();

//     if (nameGame === "Hearthstone") {
//       hGame++;
//     } else if (nameGame === "Fornite") {
//       fGame++;
//     } else if (nameGame === "Overwatch") {
//       oGame++;
//     } else {
//       othGame++;
//     }
//   }
//   let phGame = (hGame / gamesSold) * 100;
//   let pfGame = (fGame / gamesSold) * 100;
//   let poGame = (oGame / gamesSold) * 100;
//   let pothGame = (othGame / gamesSold) * 100;

//   console.log(`Hearthstone - ${phGame.toFixed(2)}%`);
//   console.log(`Fornite - ${pfGame.toFixed(2)}%`);
//   console.log(`Overwatch - ${poGame.toFixed(2)}%`);
//   console.log(`Others - ${pothGame.toFixed(2)}%`);
// }
// pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);

// function footballTournament(input) {
//   let nameClub = input.shift();
//   let gamesPlayed = Number(input.shift());

//   let w = 3;
//   let d = 1;
//   let l = 0;
//   let wCounter = 0;
//   let dCounter = 0;
//   let lCounter = 0;
//   let sum = 0;

//   for (let i = 1; i <= gamesPlayed; i++) {
//     let game = input.shift();

//     if (game === "W") {
//       sum += w;
//       wCounter++;
//     } else if (game === "D") {
//       sum += d;
//       dCounter++;
//     } else if (game === "L") {
//       sum += l;
//       lCounter++;
//     }
//   }
//   let percentageW = (wCounter / gamesPlayed) * 100;
//   if (gamesPlayed >= 1) {
//     console.log(
//       `${nameClub} has won ${
//         w * wCounter + d * dCounter + l * lCounter
//       } points during this season.`
//     );
//     console.log(`Total stats:`);
//     console.log(`## W: ${wCounter}`);
//     console.log(`## D: ${dCounter}`);
//     console.log(`## L: ${lCounter}`);
//     console.log(`Win rate: ${percentageW.toFixed(2)}%`);
//   } else {
//     console.log(`${nameClub} hasn't played any games during this season.`);
//   }
// }
// footballTournament([
//   "Liverpool",
//   "10",
//   "W",
//   "D",
//   "D",
//   "W",
//   "L",
//   "W",
//   "D",
//   "D",
//   "W",
//   "W",
// ]);

// function renovation(input) {
//   let h = Number(input.shift());
//   let w = Number(input.shift());
//   let percent = Number(input.shift());

//   let area = h * w * 4;
//   let areaWalls = area - area * (percent / 100);

//   let command = input.shift();
//   while (command !== "Tired!") {
//     let paint = Number(command);
//     areaWalls -= paint;

//     if (areaWalls <= 0) {
//       console.log(
//         `All walls are painted and you have ${Math.abs(
//           areaWalls
//         )} l paint left!`
//       );
//       break;
//     }
//     if (paint < 0) {
//       console.log(`All walls are painted! Great job, Pesho!`);
//       break;
//     }
//     command = input.shift();
//   }
//   if (command === "Tired!") {
//     console.log(`${Math.ceil(areaWalls)} quadratic m left.`);
//   }
// }
// renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
// renovation(["2", "3", "25", "6", "7", "8"]);
