// Conditional Statements - Lab

function excellentResult(input) {
  let grade = Number(input.shift());
  if (grade >= 5.5) {
    console.log("Excellent!");
  }
}
excellentResult(["6"]);
excellentResult(["5"]);
excellentResult(["5.50"]);
excellentResult(["5.49"]);

function greaterNumber(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);

function evenOrodd(input) {
  let num = Number(input.shift());
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrodd(["2"]);
evenOrodd(["3"]);
evenOrodd(["25"]);
evenOrodd(["1024"]);

function number1to9(input) {
  let num = Number(input.shift());
  if (num == 1) {
    console.log("one");
  } else if (num == 2) {
    console.log("two");
  } else if (num == 3) {
    console.log("three");
  } else if (num == 4) {
    console.log("four");
  } else if (num == 5) {
    console.log("five");
  } else if (num == 6) {
    console.log("six");
  } else if (num == 7) {
    console.log("seven");
  } else if (num == 8) {
    console.log("eight");
  } else if (num == 9) {
    console.log("nine");
  } else {
    console.log("number too big");
  }
}
number1to9(["5"]);
number1to9(["1"]);
number1to9(["9"]);
number1to9(["10"]);

function number100to200(input) {
  let num = Number(input.shift());
  if (num < 100) {
    console.log("Less than 100");
  } else if (num >= 100 && num <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}
number100to200(["95"]);
number100to200(["120"]);
number100to200(["210"]);

function passwordGuess(input) {
  let password = input.shift();
  if (password === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);

function areaOffigures(input) {
  let shape = input.shift();
  let area = 0;
  if (shape == "square") {
    let side = Number(input.shift());
    area = side * side;
  } else if (shape == "rectangle") {
    let side1 = Number(input.shift());
    let side2 = Number(input.shift());
    area = side1 * side2;
  } else if (shape == "circle") {
    let radius = Number(input.shift());
    area = radius * radius * Math.PI;
  } else if (shape == "triangle") {
    let length = Number(input.shift());
    let height = Number(input.shift());
    area = (length * height) / 2;
  }
  console.log(area.toFixed(3));
}
areaOffigures(["square", "5"]);
areaOffigures(["rectangle", "7", "2.5"]);
areaOffigures(["circle", "6"]);
areaOffigures(["triangle", "4.5", "20"]);

function toyShop(input) {
  let holidayBudget = Number(input.shift());
  let jigsawCount = Number(input.shift());
  let dollCount = Number(input.shift());
  let teddyCount = Number(input.shift());
  let minionCount = Number(input.shift());
  let truckCount = Number(input.shift());

  let toysCount =
    jigsawCount + dollCount + teddyCount + minionCount + truckCount;
  let toysIncome =
    jigsawCount * 2.6 +
    dollCount * 3 +
    teddyCount * 4.1 +
    minionCount * 8.2 +
    truckCount * 2;
  if (toysCount >= 50) {
    toysIncome -= toysIncome * 0.25;
  }
  toysIncome -= toysIncome * 0.1;
  let diff = Math.abs(toysIncome - holidayBudget);
  if (toysIncome >= holidayBudget) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

// Conditional Statements - Exercise

function sumSeconds(input) {
  let firstSecs = +input.shift();
  let secondSecs = +input.shift();
  let thirdSecs = +input.shift();

  let sumSecs = firstSecs + secondSecs + thirdSecs;
  let sumMins = Math.floor(sumSecs / 60);
  let sumSecs1 = sumSecs % 60;

  if (sumSecs1 < 10) {
    console.log(`${Math.floor(sumMins)}:0${sumSecs1}`);
  } else {
    console.log(`${Math.floor(sumMins)}:${sumSecs1}`);
  }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);

function bonusScore(input) {
  let num = +input.shift();

  let bonus = 0;

  if (num <= 100) {
    bonus += 5;
    if (num % 2 === 0) {
      bonus += 1;
    } else if (num % 10 === 5) {
      bonus += 2;
    }
  } else if (num > 100 && num <= 1000) {
    bonus += num * 0.2;
    if (num % 2 === 0) {
      bonus += 1;
    } else if (num % 10 === 5) {
      bonus += 2;
    }
  } else if (num > 1000) {
    bonus += num * 0.1;
    if (num % 2 === 0) {
      bonus += 1;
    } else if (num % 10 === 5) {
      bonus += 2;
    }
  }

  let total = num + bonus;
  console.log(bonus);
  console.log(total);
}
bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);

function speedInfo(input) {
  let speed = +input.shift();
  if (speed <= 10) {
    console.log("slow");
  } else if (speed > 10 && speed <= 50) {
    console.log("average");
  } else if (speed > 50 && speed <= 150) {
    console.log("fast");
  } else if (speed >= 150 && speed <= 1000) {
    console.log("ultra fast");
  } else {
    console.log("extremely fast");
  }
}
speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);

function metricConverter(input) {
  let num = +input.shift();
  let numInput = input.shift();
  let numOutput = input.shift();

  if (numInput === "mm") {
    num = num / 1000;
  } else if (numInput === "cm") {
    num = num / 100;
  }
  if (numOutput === "mm") {
    num = num * 1000;
  } else if (numOutput === "cm") {
    num = num * 100;
  }
  console.log(num.toFixed(3));
}
metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);

function timePlus15Minutes(input) {
  let h = +input.shift();
  let m = +input.shift();

  let m15 = 15;
  let mm = m15 + m;
  let mTotal = h * 60 + (m + m15);
  let hFinal = Math.floor(mTotal / 60);
  let mFinal = mm % 60;

  if (hFinal >= 24) {
    hFinal -= 24;
  }

  if (mFinal < 10) {
    console.log(`${hFinal}:0${mFinal}`);
  } else {
    console.log(`${hFinal}:${mFinal}`);
  }
}
timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);

function GodzillaVSKong(input) {
  let budget = +input.shift();
  let count = +input.shift();
  let pricePerPerson = +input.shift();

  let pricePeople = count * pricePerPerson;
  let priceDecor = budget * 0.1;

  if (count >= 150) {
    pricePeople -= pricePeople * 0.1;
  }

  let priceTotal = pricePeople + priceDecor;

  let diff = priceTotal - budget;
  if (priceTotal > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${Math.abs(diff).toFixed(2)} leva more.`);
  } else if (priceTotal <= budget) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${Math.abs(diff).toFixed(2)} leva left.`
    );
  }
}
GodzillaVSKong(["20000", "120", "55.5"]);
GodzillaVSKong(["15437.62", "186", "57.99"]);
GodzillaVSKong(["9587.88", "222", "55.68"]);

function worldSwimmingRecord(input) {
  let recordSecs = +input.shift();
  let distanceMeters = +input.shift();
  let timeSecsMeter = +input.shift();

  let time = distanceMeters * timeSecsMeter;
  let meter = Math.floor(distanceMeters / 15) * 12.5;
  let total = time + meter;

  if (recordSecs > total) {
    console.log(
      `Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${Math.abs(recordSecs - total).toFixed(
        2
      )} seconds slower.`
    );
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);

function scholarship(input) {
  let income = +input.shift();
  let grade = +input.shift();
  let minSalary = +input.shift();

  let schGrade = 0;
  let schSoc = 0;

  if (income < minSalary && grade > 4.5) {
    schSoc = minSalary * 0.35;
  }
  if (grade >= 5.5) {
    schGrade = grade * 25;
  }
  if (schSoc > schGrade) {
    console.log(`You get a Social scholarship ${Math.floor(schSoc)} BGN`);
  } else if (schGrade > schSoc) {
    console.log(
      `You get a scholarship for excellent results ${Math.floor(schGrade)} BGN`
    );
  } else {
    console.log(`You cannot get a scholarship!`);
  }
}
scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);

// Conditional Statements - more exercises

function pipesInPool(input) {
  let volume = Number(input.shift());
  let p1 = Number(input.shift());
  let p2 = Number(input.shift());
  let hours = Number(input.shift());

  let pipe1 = p1 * hours;
  let pipe2 = p2 * hours;

  let pipePool = pipe1 + pipe2;

  if (pipePool <= volume) {
    let poolPercent = (pipePool / volume) * 100;
    let p1Percent = (pipe1 / pipePool) * 100;
    let p2Percent = (pipe2 / pipePool) * 100;
    console.log(
      `The pool is ${poolPercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(
        2
      )}%. Pipe 2: ${p2Percent.toFixed(2)}%.`
    );
  } else if (pipePool > volume) {
    let overFlow = pipePool - volume;
    console.log(
      `For ${hours} hours the pool overflows with ${parseFloat(
        overFlow.toFixed(2)
      )} liters.`
    );
  }
}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);

function sleepyTomCat(input) {
  let daysOff = Number(input.shift());

  let yearTotal = 30000;
  let daysTotal = 365;
  let daysWork = daysTotal - daysOff;
  let minsTotal = daysOff * 127 + daysWork * 63;
  let diff = Math.trunc(yearTotal - minsTotal);
  let h = Math.trunc(diff / 60);
  let m = diff % 60;

  if (yearTotal > minsTotal) {
    console.log("Tom sleeps well");
    console.log(
      `${Math.abs(h)} hours and ${Math.abs(m)} minutes less for play`
    );
  } else if (yearTotal < minsTotal) {
    console.log("Tom will run away");
    console.log(
      `${Math.abs(h)} hours and ${Math.abs(m)} minutes more for play`
    );
  }
}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);

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

function transportPrice(input) {
  let n = +input.shift();
  let time = input.shift();

  let price = 0;

  if (time === "day") {
    if (n < 20) {
      price = 0.7 + n * 0.79;
    } else if (n >= 20 && n < 100) {
      price = n * 0.09;
    } else if (n >= 100) {
      price = n * 0.06;
    }
  } else if (time === "night") {
    if (n < 20) {
      price = 0.7 + n * 0.9;
    } else if (n >= 20 && n < 100) {
      price = n * 0.09;
    } else if (n >= 100) {
      price = n * 0.06;
    }
  }
  console.log(price.toFixed(2));
}
transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);

function firm(input) {
  let hours = +input.shift();
  let days = +input.shift();
  let count = +input.shift();

  let training = days * 0.1;
  let daysLeft = days - training;
  let hoursNeeded = daysLeft * 8;
  let overtime = count * (2 * days);
  let hoursTotal = hoursNeeded + overtime;

  if (hoursTotal >= hours) {
    console.log(`Yes!${Math.floor(hoursTotal - hours)} hours left.`);
  } else if (hours - hoursTotal) {
    console.log(
      `Not enough time!${Math.ceil(hours - hoursTotal)} hours needed.`
    );
  }
}
firm(["90", "7", "3"]);
firm(["99", "3", "1"]);

function pets(input) {
  let days = +input.shift();
  let foodLeft = +input.shift();
  let dogFoodPerDay = +input.shift();
  let catFoodPerDay = +input.shift();
  let turtleFoodPerDay = +input.shift();

  let turtleFoodPerDayKg = turtleFoodPerDay / 1000;

  let foodNeeded = (dogFoodPerDay + catFoodPerDay + turtleFoodPerDayKg) * days;

  if (foodLeft >= foodNeeded) {
    console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`);
  } else if (foodNeeded >= foodLeft) {
    console.log(
      `${Math.ceil(foodNeeded - foodLeft)} more kilos of food are needed.`
    );
  }
}
pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);

function flowerShop(input) {
  let m = +input.shift();
  let z = +input.shift();
  let r = +input.shift();
  let c = +input.shift();
  let presentPrice = +input.shift();

  let mTotal = m * 3.25;
  let zTotal = z * 4;
  let rTotal = r * 3.5;
  let cTotal = c * 8;

  let income = mTotal + zTotal + rTotal + cTotal;
  let incomeAfterTax = income - income * 0.05;
  if (incomeAfterTax >= presentPrice) {
    console.log(
      `She is left with ${Math.floor(incomeAfterTax - presentPrice)} leva.`
    );
  } else if (presentPrice > income) {
    console.log(
      `She will have to borrow ${Math.ceil(
        presentPrice - incomeAfterTax
      )} leva.`
    );
  }
}
flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);

function fuelTank(input) {
  let fuel = input.shift();
  let liters = Number(input.shift());

  if (fuel == "Diesel" || fuel == "Gasoline" || fuel == "Gas") {
    if (liters >= 25) {
      console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else if (liters < 25) {
      console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);

function fuelTank2(input) {
  let fuel = input.shift();
  let liters = +input.shift();
  let card = input.shift();

  let price = 0;

  if (fuel === "Gas") {
    price = 0.93;
    if (card === "Yes") {
      price = 0.93 - 0.08;
    }
  } else if (fuel === "Gasoline") {
    price = 2.22;
    if (card === "Yes") {
      price = 2.22 - 0.18;
    }
  } else if (fuel === "Diesel") {
    price = 2.33;
    if (card === "Yes") {
      price = 2.33 - 0.12;
    }
  }
  if (liters >= 20 && liters <= 25) {
    price -= price * 0.08;
  } else if (liters > 25) {
    price -= price * 0.1;
  }
  price1 = price * liters;
  console.log(`${price1.toFixed(2)} lv.`);
}
fuelTank2(["Gas", "30", "Yes"]);
fuelTank2(["Gasoline", "25", "No"]);
fuelTank2(["Diesel", "19", "No"]);

// Conditional Statements Advanced - Lab - 28/03/2020  лекция

console.log(123456 % 100 == 56);

// = -> присвояване на стойност, взема се стойността от дясно и я присвоява на тази от ляво
// == -> проверява дали стойността дали е същата
// === ->  сравнява по тип данните - дали е стринг или не

// задача от 280320

function solve(input) {
  let status = input.shift();
  switch (status) {
    case "convection":
      console.log("use convection");
      break;
    case "bake":
      console.log("do bake");
      break;
    case "cook":
      console.log("do cooking");
      break;
    default:
      console.log("others");
      break;
  }
}
solve(["grill"]);

function solve(input) {
  let age = Number(input.shift());
  let sex = input.shift();

  if (sex == "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else if (sex == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}
solve(["12", "f"]);
solve(["17", "m"]);
solve(["25", "f"]);
solve(["13.5", "m"]);

function solve(input) {
  let sex = input.shift();
  let age = Number(input.shift());
  if (sex == "m" && age >= 16) {
    console.log("Mr.");
  } else {
    console.log("Master");
  }
  if (sex == "f" && age >= 16) {
    console.log("Mrs");
  } else {
    console.log("Ms");
  }
}
solve(["m", "15"]);

function solve(input) {
  let num = Number(input.shift());
  if (num >= -100 && num <= 100 && num != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
solve(["-150"]);
solve(["15"]);
solve(["1200"]);

function solve(input) {
  let product = input.shift();
  if (product == "banana" || product == "apple" || product == "cherry") {
    console.log("fruit");
  } else if (
    product == "tomato" ||
    product == "cucumber" ||
    product == "root"
  ) {
    console.log("vegetable");
  } else {
    console.log("other");
  }
}
solve(["grape"]);

function solve(input) {
  let num = Number(input.shift());
  if (!((num >= 100 && num <= 200) || num == 0)) {
    console.log("Invalid!");
  }
}
solve(["500"]);

function solve(input) {
  let city = input.shift();
  let income = Number(input.shift());

  if (city == "Sofia") {
    if (income >= 0 && income <= 500) {
      income += income * 0.05;
    } else if (income < 500 && income <= 1000) {
      income += income * 0.07;
    } else if (incomе > 1000 && income <= 10000) {
      income += income * 0.08;
    } else if (income > 10000) {
      income += income * 0.12;
    }
  } else if (city == "Varna") {
    if (income >= 0 && income <= 500) {
      income += income * 0.045;
    } else if (income < 500 && income <= 1000) {
      income += income * 0.075;
    } else if (incomе > 1000 && income <= 10000) {
      income += income * 0.1;
    } else if (income > 10000) {
      income += income * 0.13;
    }
  } else if (city == "Plovdiv") {
    if (income >= 0 && income <= 500) {
      income += income * 0.055;
    } else if (income < 500 && income <= 1000) {
      income += income * 0.08;
    } else if (incoпе > 1000 && income <= 10000) {
      income += income * 0.12;
    } else if (income > 10000) {
      income += income * 0.145;
    }
  }
  console.log(income.toFixed(2));
}
solve(["Sofia", "1500"]);

// Conditional Statements Advanced - Lab

function dayOfWeek(input) {
  let num = +input.shift();
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
}
dayOfWeek(["-1"]);

function animalType(input) {
  let animal = input.shift();
  switch (animal) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}
animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);

function personalTitles(input) {
  let age = +input.shift();
  let sex = input.shift();

  if (sex == "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else if (sex == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}
personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);

function smallShop(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = Number(input.shift());

  let cost = 0;

  if (city === "Sofia") {
    if (product === "coffee") {
      cost = quantity * 0.5;
    } else if (product === "water") {
      cost = quantity * 0.8;
    } else if (product === "beer") {
      cost = quantity * 1.2;
    } else if (product === "sweets") {
      cost = quantity * 1.45;
    } else if (product === "peanuts") {
      cost = quantity * 1.6;
    }
  } else if (city === "Plovdiv") {
    if (product === "coffee") {
      cost = quantity * 0.4;
    } else if (product === "water") {
      cost = quantity * 0.7;
    } else if (product === "beer") {
      cost = quantity * 1.15;
    } else if (product === "sweets") {
      cost = quantity * 1.3;
    } else if (product === "peanuts") {
      cost = quantity * 1.5;
    }
  } else if (city === "Varna") {
    if (product === "coffee") {
      cost = quantity * 0.45;
    } else if (product === "water") {
      cost = quantity * 0.7;
    } else if (product === "beer") {
      cost = quantity * 1.1;
    } else if (product === "sweets") {
      cost = quantity * 1.35;
    } else if (product === "peanuts") {
      cost = quantity * 1.55;
    }
  }
  console.log(cost);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);

function numberInRange(input) {
  let num = Number(input.shift());
  if (num >= -100 && num <= 100 && num != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
numberInRange(["-25"]);
numberInRange(["0"]);
numberInRange(["25"]);

function fruitOrVegetable(input) {
  let product = input.shift();
  switch (product) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
      break;
  }
}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);

function invalidNumber(input) {
  let num = Number(input.shift());
  if (!((num >= 100 && num <= 200) || num == 0)) {
    console.log("invalid");
  }
}
invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);

function fruitShop(input) {
  let fruit = input.shift();
  let day = input.shift();
  let quantity = +input.shift();

  let cost = 0;

  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    if (fruit == "banana") {
      cost = quantity * 2.5;
    } else if (fruit == "apple") {
      cost = quantity * 1.2;
    } else if (fruit == "orange") {
      cost = quantity * 0.85;
    } else if (fruit == "grapefruit") {
      cost = quantity * 1.45;
    } else if (fruit == "kiwi") {
      cost = quantity * 2.7;
    } else if (fruit == "pineapple") {
      cost = quantity * 5.5;
    } else if (fruit == "grapes") {
      cost = quantity * 3.85;
    }
  } else if (day == "Saturday" || day == "Sunday") {
    if (fruit == "banana") {
      cost = quantity * 2.7;
    } else if (fruit == "apple") {
      cost = quantity * 1.25;
    } else if (fruit == "orange") {
      cost = quantity * 0.9;
    } else if (fruit == "grapefruit") {
      cost = quantity * 1.6;
    } else if (fruit == "kiwi") {
      cost = quantity * 3.0;
    } else if (fruit == "pineapple") {
      cost = quantity * 5.6;
    } else if (fruit == "grapes") {
      cost = quantity * 4.2;
    }
  }

  if (cost != 0) {
    console.log(cost.toFixed(2));
  } else {
    console.log("error");
  }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);

function tradeCommissions(input) {
  let city = input.shift();
  let sales = +input.shift();

  let comission = 0;

  if (city == "Sofia") {
    if (sales >= 0 && sales <= 500) {
      comission = sales * 0.05;
    } else if (sales > 500 && sales <= 1000) {
      comission = sales * 0.07;
    } else if (sales > 1000 && sales <= 10000) {
      comission = sales * 0.08;
    } else if (sales > 10000) {
      comission = sales * 0.12;
    }
  } else if (city == "Varna") {
    if (sales >= 0 && sales <= 500) {
      comission = sales * 0.045;
    } else if (sales > 500 && sales <= 1000) {
      comission = sales * 0.075;
    } else if (sales > 1000 && sales <= 10000) {
      comission = sales * 0.1;
    } else if (sales > 10000) {
      comission = sales * 0.13;
    }
  } else if (city == "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      comission = sales * 0.055;
    } else if (sales > 500 && sales <= 1000) {
      comission = sales * 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      comission = sales * 0.12;
    } else if (sales > 10000) {
      comission = sales * 0.145;
    }
  }
  if (comission != 0) {
    console.log(comission.toFixed(2));
  } else {
    console.log("error");
  }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);

function skiTrip(input) {
  let days = +input.shift();
  let room = input.shift();
  let feedback = input.shift();

  let nights = days - 1;
  let discount = 0;
  let price = 0;

  if (room === "room for one person") {
    if (days < 10) {
      price = nights * 18.0;
      discount = 0;
    } else if (days >= 10 && days < 15) {
      price = nights * 18.0;
      discount = 0;
    } else if (days > 15) {
      price = nights * 18.0;
      discount = 0;
    }
  } else if (room === "apartment") {
    if (days < 10) {
      price = nights * 25.0;
      discount = price * 0.3;
    } else if (days >= 10 && days < 15) {
      price = nights * 25.0;
      discount = price * 0.35;
    } else if (days > 15) {
      price = nights * 25.0;
      discount = price * 0.5;
    }
  } else if (room === "president apartment") {
    if (days < 10) {
      price = nights * 35.0;
      discount = price * 0.1;
    } else if (days >= 10 && days < 15) {
      price = nights * 35.0;
      discount = price * 0.15;
    } else if (days > 15) {
      price = nights * 35.0;
      discount = price * 0.2;
    }
  }
  let priceTotal = price - discount;
  if (feedback == "positive") {
    priceTotal += priceTotal * 0.25;
  } else {
    priceTotal -= priceTotal * 0.1;
  }
  console.log(priceTotal.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);

// Conditional Statements Advanced - Exercise - 29/03/2020

function pointOnRectangleBorder(input) {
  let x1 = +input.shift();
  let y1 = +input.shift();
  let x2 = +input.shift();
  let y2 = +input.shift();
  let x = +input.shift();
  let y = +input.shift();

  let check1 = (x == x1 || x == x2) && y >= y1 && y <= y2;
  let check2 = (y == y1 || y == y2) && x >= x1 && x <= x2;

  if (check1 || check2) {
    console.log("Border");
  } else {
    console.log("Inside / Outside");
  }
}
pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);

function cinema(input) {
  let screen = input.shift();
  let rows = Number(input.shift());
  let columns = Number(input.shift());

  let income = 0;

  if (screen == "Premiere") {
    income = rows * columns * 12.0;
  } else if (screen == "Normal") {
    income = rows * columns * 7.5;
  } else if (screen == "Discount") {
    income = rows * columns * 5.0;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);

function summerOutfit(input) {
  let degrees = Number(input.shift());
  let timeOfDay = input.shift();
  let outfit = "";
  let shoes = "";

  switch (timeOfDay) {
    case "Morning":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);

function newHouse(input) {
  let flowers = input.shift();
  let count = +input.shift();
  let budget = +input.shift();

  let amountNeeded = 0;

  switch (flowers) {
    case "Roses":
      amountNeeded = count * 5;
      if (count > 80) {
        amountNeeded -= amountNeeded * 0.1;
      }
      break;
    case "Dahlias":
      amountNeeded = count * 3.8;
      if (count > 90) {
        amountNeeded -= amountNeeded * 0.15;
      }
      break;
    case "Tulips":
      amountNeeded = count * 2.8;
      if (count > 80) {
        amountNeeded -= amountNeeded * 0.15;
      }
      break;
    case "Narcissus":
      amountNeeded = count * 3;
      if (count < 120) {
        amountNeeded += amountNeeded * 0.15;
      }
      break;
    case "Gladiolus":
      amountNeeded = count * 2.5;
      if (count < 80) {
        amountNeeded += amountNeeded * 0.2;
        break;
      }
  }
  let money = Math.abs(budget - amountNeeded);
  if (budget >= amountNeeded) {
    console.log(
      `Hey, you have a great garden with ${count} ${flowers} and ${money.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
  }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);

function fishingBoat(input) {
  let budget = +input.shift();
  let season = input.shift();
  let count = +input.shift();

  let rent = 0;

  switch (season) {
    case "Spring":
      rent = 3000;
      if (count <= 6) {
        rent -= rent * 0.1;
      } else if (count > 7 && count <= 11) {
        rent -= rent * 0.15;
      } else if (count > 12) {
        rent -= rent * 0.25;
      }
      break;
    case "Summer":
      rent = 4200;
      if (count <= 6) {
        rent -= rent * 0.1;
      } else if (count > 7 && count <= 11) {
        rent -= rent * 0.15;
      } else if (count > 12) {
        rent -= rent * 0.25;
      }
      break;
    case "Autumn":
      rent = 4200;
      if (count <= 6) {
        rent -= rent * 0.1;
      } else if (count > 7 && count <= 11) {
        rent -= rent * 0.15;
      } else if (count > 12) {
        rent -= rent * 0.25;
      }
      break;
    case "Winter":
      rent = 2600;
      if (count <= 6) {
        rent -= rent * 0.1;
      } else if (count > 7 && count <= 11) {
        rent -= rent * 0.15;
      } else if (count > 12) {
        rent -= rent * 0.25;
      }
      break;
  }

  if (count % 2 === 0 && season !== "Autumn") {
    rent -= rent * 0.05;
  }

  let diff = Math.abs(rent - budget);
  if (budget >= rent) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);

function journey(input) {
  let budget = Number(input.shift());
  let season = input.shift();
  let moneySpent = 0;
  let destination = "";
  let place = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      moneySpent = budget * 0.3;
      place = "Camp";
    } else if (season === "winter") {
      moneySpent = budget * 0.7;
      place = "Hotel";
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      moneySpent = budget * 0.4;
      place = "Camp";
    } else if (season === "winter") {
      moneySpent = budget * 0.8;
      place = "Hotel";
    }
  } else if (budget > 1000) {
    destination = "Europe";
    moneySpent = budget * 0.9;
    place = "Hotel";
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${moneySpent.toFixed(2)}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);

function operationsBetweenNumbers(input) {
  let n1 = +input.shift();
  let n2 = +input.shift();
  let operator = input.shift();
  let result = 0;
  let type = "";

  if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      type = "even";
    } else {
      type = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      type = "even";
    } else {
      type = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 == 0) {
      type = "even";
    } else {
      type = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
  } else if (operator === "/") {
    result = n1 / n2;
    if (n2 !== 0) {
      console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  } else if (operator === "%") {
    result = n1 % n2;
    if (n2 !== 0) {
      console.log(`${n1} ${operator} ${n2} = ${result}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  }
}
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);

function hotelRoom(input) {
  let month = input.shift();
  let nights = Number(input.shift());
  let room = "";
  let priceStudio = 0;
  let priceApartment = 0;

  if (month === "May" || month === "October") {
    priceStudio = 50;
    priceApartment = 65;
    if (nights > 7 && nights < 14) {
      priceStudio -= priceStudio * 0.05;
    } else if (nights > 14) {
      priceStudio -= priceStudio * 0.3;
      priceApartment -= priceApartment * 0.1;
    }
  } else if (month === "June" || month === "September") {
    priceStudio = 75.2;
    priceApartment = 68.7;
    if (nights > 14) {
      priceStudio -= priceStudio * 0.2;
      priceApartment -= priceApartment * 0.1;
    }
  } else if (month === "July" || month === "August") {
    priceStudio = 76;
    priceApartment = 77;
    if (nights > 14) {
      priceApartment -= priceApartment * 0.1;
    }
  }
  let totalPriceStudio = priceStudio * nights;
  let totalPriceApartment = priceApartment * nights;
  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);

function onTimeForTheExam(input) {
  let examStartTimeHour = +input.shift();
  let examStartTimeMin = +input.shift();
  let examArriveTimeHour = +input.shift();
  let examArriveTimeMin = +input.shift();

  let examTimeMin = examStartTimeHour * 60 + examStartTimeMin;
  let arriveTimeMin = examArriveTimeHour * 60 + examArriveTimeMin;

  let diff = examTimeMin - arriveTimeMin;

  if (diff < 0) {
    console.log("Late");
    if (diff > -60) {
      console.log(`${Math.abs(diff)} minutes after the start`);
    } else {
      let hours = Math.floor(Math.abs(diff) / 60);
      let mins = Math.abs(diff) % 60;
      if (mins < 10) {
        console.log(`${hours}:0${mins} hours after the start`);
      } else {
        console.log(`${hours}:${mins} hours after the start`);
      }
    }
  } else if (diff <= 30) {
    console.log("On Time");
    if (diff > 0) {
      console.log(`${diff} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (diff < 60) {
      console.log(`${diff} minutes before the start`);
    } else {
      let hours = Math.floor(diff / 60);
      let mins = diff % 60;

      if (mins < 10) {
        console.log(`${hours}:0${mins} hours before the start`);
      } else {
        console.log(`${hours}:${mins} hours before the start`);
      }
    }
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "30", "9", "50"]);

function volleyball(input) {
  let year = input.shift();
  let p = Number(input.shift());
  let h = Number(input.shift());

  let wSofia = 48 - h;
  let gSofia = wSofia * (3.0 / 4);
  let gHome = h;
  let gCeleb = p * (2.0 / 3);

  let gTotal = gSofia + gHome + gCeleb;

  if (year === "normal") {
    console.log(Math.floor(gTotal));
  } else if (year === "leap") {
    gTotal += gTotal * 0.15;
    console.log(Math.floor(gTotal));
  }
}
volleyball(["leap", "5", "2"]);
volleyball(["normal", "3", "2"]);
volleyball(["leap", "2", "3"]);
volleyball(["normal", "11", "6"]);
volleyball(["leap", "0", "1"]);
volleyball(["normal", "6", "13"]);

// Conditional Statements Advanced - more exercises

function matchTickets(input) {
  let budget = +input.shift();
  let category = input.shift();
  let count = +input.shift();

  let price = 0;
  let transport = 0;
  let cost = 0;

  if (category === "VIP") {
    price = 499.99;
    if (count >= 1 && count <= 4) {
      transport = budget * 0.75;
    } else if (count >= 5 && count <= 9) {
      transport = budget * 0.6;
    } else if (count >= 10 && count <= 24) {
      transport = budget * 0.5;
    } else if (count >= 25 && count <= 49) {
      transport = budget * 0.4;
    } else {
      transport = budget * 0.25;
    }
  } else if (category === "Normal") {
    price = 249.99;
    if (count >= 1 && count <= 4) {
      transport = budget * 0.75;
    } else if (count >= 5 && count <= 9) {
      transport = budget * 0.6;
    } else if (count >= 10 && count <= 24) {
      transport = budget * 0.5;
    } else if (count >= 25 && count <= 49) {
      transport = budget * 0.4;
    } else {
      transport = budget * 0.25;
    }
  }
  cost = price * count + transport;
  if (budget >= cost) {
    console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`);
  } else if (cost >= budget) {
    console.log(
      `Not enough money! You need ${(cost - budget).toFixed(2)} leva.`
    );
  }
}
matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);

function bikeRace(input) {
  let countJuniors = +input.shift();
  let countSeniors = +input.shift();
  let track = input.shift();

  let fee = 0;
  let cost = 0;

  if (track === "trail") {
    fee = countJuniors * 5.5 + countSeniors * 7;
    cost = fee * 0.05;
  } else if (track === "cross-country") {
    if (countJuniors + countSeniors < 50) {
      fee = countJuniors * 8 + countSeniors * 9.5;
      cost = fee * 0.05;
    } else {
      fee = (countJuniors * 8 + countSeniors * 9.5) * 0.75;
      cost = fee * 0.05;
    }
  } else if (track === "downhill") {
    fee = countJuniors * 12.25 + countSeniors * 13.75;
    cost = fee * 0.05;
  } else if (track === "road") {
    fee = countJuniors * 20 + countSeniors * 21.5;
    cost = fee * 0.05;
  }

  let totalFee = fee - cost;
  console.log(totalFee.toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["20", "25", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);

function flowers(input) {
  let countH = +input.shift();
  let countR = +input.shift();
  let countL = +input.shift();
  let season = input.shift();
  let day = input.shift();

  let price = 1;
  let count = countH + countL + countR;

  if (season === "Spring" || season === "Summer") {
    price = countH * 2 + countR * 4.1 + countL * 2.5;
    if (day === "Y") {
      price += price * 0.15;
      if (countL > 7 && season !== "Summer") {
        price -= price * 0.05;
      }
    } else if (day === "N") {
      price = countH * 2 + countR * 4.1 + countL * 2.5;
    }
    if (count > 20) {
      price -= price * 0.2;
    }
  } else if (season === "Autumn" || season === "Winter") {
    price = countH * 3.75 + countR * 4.5 + countL * 4.15;
    if (day === "Y") {
      price += price * 0.15;
    } else if (day === "N") {
      price = countH * 3.75 + countR * 4.5 + countL * 4.15;
    }
    if (countR >= 10 && season != "Autumn") {
      price -= price * 0.1;
    }
    if (count > 20) {
      price -= price * 0.2;
    }
  }
  console.log((price + 2).toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);

function carToGo(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let price = 0;
  let carType = "";
  let carClass = "";

  if (budget <= 100) {
    carClass = "Economy class";
    if (season === "Summer") {
      carType = "Cabrio";
      price = budget * 0.35;
    } else if (season == "Winter") {
      carType = "Jeep";
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    carClass = "Compact class";
    if (season === "Summer") {
      carType = "Cabrio";
      price = budget * 0.45;
    } else if (season === "Winter") {
      carType = "Jeep";
      price = budget * 0.8;
    }
  } else if (budget > 500) {
    carClass = "Luxury class";
    if (season === "Summer") {
      carType = "Jeep";
      price = budget * 0.9;
    } else if (season === "Winter") {
      carType = "Jeep";
      price = budget * 0.9;
    }
  }
  console.log(`${carClass}`);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);

function vacation(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let location = "";
  let place = "";
  let price = 0;

  if (budget <= 1000) {
    place = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    place = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else {
    place = "Hotel";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.9;
    } else {
      location = "Morocco";
      price = budget * 0.9;
    }
  }
  console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);

function truckDriver(input) {
  let season = input.shift();
  let distance = Number(input.shift());

  let salary = 0;

  if (distance <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      salary = distance * 0.75 * 4;
    } else if (season === "Summer") {
      salary = distance * 0.9 * 4;
    } else if (season === "Winter") {
      salary = distance * 1.05 * 4;
    }
  } else if (distance > 5000 && distance <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      salary = distance * 0.95 * 4;
    } else if (season === "Summer") {
      salary = distance * 1.1 * 4;
    } else if (season === "Winter") {
      salary = distance * 1.25 * 4;
    }
  } else if (distance > 10000 && distance <= 20000) {
    if (
      season === "Spring" ||
      season === "Autumn" ||
      season === "Summer" ||
      season === "Winter"
    ) {
      salary = distance * 1.45 * 4;
    }
  }
  let salaryAfterTaxes = salary - salary * 0.1;
  console.log(salaryAfterTaxes.toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);

function schoolCamp(input) {
  let season = input.shift();
  let group = input.shift();
  let countStudents = Number(input.shift());
  let countNights = Number(input.shift());

  let price = 0;
  let sportActivity = "";

  switch (season) {
    case "Winter":
      if (group === "girls") {
        price = countNights * 9.6 * countStudents;
        sportActivity = "Gymnastics";
      } else if (group === "boys") {
        price = countNights * 9.6 * countStudents;
        sportActivity = "Judo";
      } else {
        price = countNights * 10 * countStudents;
        sportActivity = "Ski";
      }
      break;
    case "Spring":
      if (group === "girls") {
        price = countNights * 7.2 * countStudents;
        sportActivity = "Athletics";
      } else if (group === "boys") {
        price = countNights * 7.2 * countStudents;
        sportActivity = "Tennis";
      } else {
        price = countNights * 9.5 * countStudents;
        sportActivity = "Cycling";
      }
      break;
    case "Summer":
      if (group === "girls") {
        price = countNights * 15 * countStudents;
        sportActivity = "Volleyball";
      } else if (group === "boys") {
        price = countNights * 15 * countStudents;
        sportActivity = "Football";
      } else {
        price = countNights * 20 * countStudents;
        sportActivity = "Swimming";
      }
      break;
  }
  let discount = 0;

  if (countStudents >= 50) {
    discount = price * 0.5;
  } else if (countStudents >= 20 && countStudents < 50) {
    discount = price * 0.15;
  } else if (countStudents >= 10 && countStudents < 20) {
    discount = price * 0.05;
  }
  priceTotal = price - discount;
  console.log(`${sportActivity} ${priceTotal.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);

function numbersFrom1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
numbersFrom1To10();

function multiplyby2(input) {
  let command = Number(input.shift());
  let result = 0;

  while (true) {
    if (command < 0) {
      console.log(`Negative number!`);
      break;
    }
    result = command * 2;
    console.log(`Result: ${result.toFixed(2)}`);
    command = input.shift();
  }
}
multiplyby2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyby2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyby2(["-123"]);
