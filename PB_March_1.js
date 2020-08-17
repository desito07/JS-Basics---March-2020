// First Steps In Coding

function hello() {
  console.log("Hello SoftUni");
}
hello();

function expression() {
  console.log((3522 + 52353) * 23 - (2336 * 501 + 23432 - 6743) * 3);
}
expression();

function nums1To10() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}
nums1To10();

function rectangleArea() {
  let a = 2;
  let b = 7;
  let area = a * b;
  console.log(area);
}
rectangleArea();

// Simple Operations and Calculations - Lab

function greetings(input) {
  let name = input.shift();
  console.log(`Hello, ${name}!`);
}
greetings(["Desi"]);

function name(input) {
  let firstName = input.shift();
  let secondName = input.shift();
  let age = Number(input.shift());
  let city = input.shift();
  console.log(
    `You are ${firstName} ${secondName}, a ${age}-years old person from ${city}.`
  );
}
name(["Desi", "Andreeva", "37", "Elena"]);

function area(input) {
  let sideA = Number(input.shift());
  console.log(sideA * sideA);
}
area(["5"]);

function inches(input) {
  let num = Number(input.shift());
  let inch = num * 2.54;
  console.log(inch);
}
inches(["5"]);

function project(input) {
  let name = input.shift();
  let projectCount = Number(input.shift());
  let time = projectCount * 3;
  console.log(
    `The architect ${name} will need ${time} hours to complete ${projectCount} project/s.`
  );
}
project(["George", "4"]);

function zoo(input) {
  let dogs = Number(input.shift());
  let others = Number(input.shift());
  let dogsFoodPrice = dogs * 2.5;
  let othersFoodPrice = others * 4;
  let sum = dogsFoodPrice + othersFoodPrice;
  console.log(`${sum.toFixed(2)}lv.`);
}
zoo(["5", "4"]);

function yard(input) {
  let area = Number(input.shift());
  let priceArea = area * 7.61;
  let discount = priceArea * 0.18;
  let totalPrice = priceArea - discount;
  console.log(`The final price is: ${totalPrice.toFixed(2)}lv.`);
  console.log(`The discount is: ${discount.toFixed(2)}lv.`);
}
yard(["540"]);

function pool(input) {
  let l = Number(input.shift());
  let w = Number(input.shift());
  let h = Number(input.shift());
  let percent = Number(input.shift());

  let volume = l * w * h;
  let litres = volume * 0.001;
  let litresNeeded = litres * (1 - percent / 100);
  console.log(`${litresNeeded.toFixed(3)}`);
}
pool(["85", "75", "47", "17"]);

//  Simple Operations and Calculations - Exercise

function convertor(input) {
  let bgn = Number(input.shift());
  let usd = bgn * 1.79549;
  console.log(`${usd.toFixed(2)}`);
}
convertor(["20"]);

function solve(input) {
  let radians = Number(input.shift());
  let degrees = (radians * 180) / Math.PI;
  console.log(degrees.toFixed(0));
}
solve(["3.1416"]);

function solve(input) {
  let x1 = Number(input.shift());
  let y1 = Number(input.shift());
  let x2 = Number(input.shift());
  let y2 = Number(input.shift());

  let x = Math.abs(x1 - x2);
  let y = Math.abs(y2 - y1);
  let area = x * y;
  let area1 = 2 * (x + y);
  console.log(area.toFixed(2));
  console.log(area1.toFixed(2));
}
solve(["60", "20", "10", "50"]);
solve(["30", "40", "70", "-10"]);
solve(["600.25", "500.75", "100.50", "-200.5"]);

function solve(input) {
  let table = Number(input.shift());
  let lengthTables = Number(input.shift());
  let widthTables = Number(input.shift());
  let covers = table * (lengthTables + 2 * 0.3) * (widthTables + 2 * 0.3);
  let others = table * (lengthTables / 2) * (lengthTables / 2);
  let priceUSD = covers * 7 + others * 9;
  let priceBGN = priceUSD * 1.85;
  console.log(`${priceUSD.toFixed(2)} USD`);
  console.log(`${priceBGN.toFixed(2)} BGN`);
}
solve(["5", "1.00", "0.50"]);

function solve(input) {
  let l = Number(input.shift());
  let w = Number(input.shift());
  let a = Number(input.shift());

  let area = l * 100 * w * 100;
  let wardrobe = a * 100 * a * 100;
  let bench = area / 10;

  let space = area - wardrobe - bench;
  let dancers = space / (40 + 7000);

  console.log(Math.floor(dancers.toFixed(0)));
}
solve(["50", "25", "2"]);

function solve(input) {
  let days = Number(input.shift());
  let people = Number(input.shift());
  let cakes = Number(input.shift());
  let waffles = Number(input.shift());
  let pancakes = Number(input.shift());

  let costCakePerson = cakes * 45;
  let costWafflePerson = waffles * 5.8;
  let costPancakePerson = pancakes * 3.2;
  let costTotal =
    (costCakePerson + costWafflePerson + costPancakePerson) * people;
  let costAll = days * costTotal;
  let costFinal = costAll - costAll * 0.125;
  console.log(costFinal.toFixed(2));
}
solve(["20", "8", "14", "30", "16"]);

function solve(input) {
  let whiskeyP = Number(input.shift());
  let beerQ = Number(input.shift());
  let wineQ = Number(input.shift());
  let rakiaQ = Number(input.shift());
  let whiskeyQ = Number(input.shift());

  let rakiaP = whiskeyP / 2;
  let wineP = rakiaP - rakiaP * 0.4;
  let beerP = rakiaP - rakiaP * 0.8;

  let cost =
    whiskeyP * whiskeyQ + wineP * wineQ + beerP * beerQ + rakiaP * rakiaQ;
  console.log(cost.toFixed(2));
}
solve(["50", "10", "3.5", "6.5", "1"]);

// Simple Operations and Calculations - More Exercises

function solve(input) {
  let b1 = Number(input.shift());
  let b2 = Number(input.shift());
  let h = Number(input.shift());
  let area = (b1 + b2) * (h / 2);
  console.log(area.toFixed(2));
}
solve(["8", "13", "7"]);

function solve(input) {
  let a = Number(input.shift());
  let h = Number(input.shift());
  let area = (a * h) / 2;
  console.log(area.toFixed(2));
}
solve(["20", "30"]);
solve(["15", "35"]);
solve(["7.75", "8.45"]);
solve(["1.23456", "4.56789"]);

function solve(input) {
  let degreesC = Number(input.shift());
  let degreesF = (degreesC * 9) / 5 + 32;
  console.log(degreesF.toFixed(2));
}
solve(["25"]);
solve(["0"]);
solve(["-5.5"]);
solve(["32.3"]);

function solve(input) {
  let vegsPrice = Number(input.shift());
  let fruitsPrice = Number(input.shift());
  let vegKg = Number(input.shift());
  let fruitsKg = Number(input.shift());
  let sum = (vegKg * vegsPrice + fruitsKg * fruitsPrice) / 1.94;
  console.log(sum.toFixed(2));
}
solve(["0.194", "19.4", "10", "10"]);
solve(["1.5", "2.5", "10", "10"]);

function solve(input) {
  let h = Number(input.shift());
  let w = Number(input.shift());

  let h1 = Math.floor((h * 100) / 120);
  let w1 = Math.floor((w * 100 - 100) / 70);
  let result = w1 * h1 - 3;
  console.log(Math.floor(result));
}
solve(["15", "8.9"]);
solve(["8.4", "5.2"]);

function solve(input) {
  let skumriaPrice = Number(input.shift());
  let cacaPrice = Number(input.shift());
  let palamudKg = Number(input.shift());
  let safridKg = Number(input.shift());
  let midiKg = Number(input.shift());

  let palamudPrice = skumriaPrice * 0.6 + skumriaPrice;
  let safridPrice = cacaPrice * 0.8 + cacaPrice;
  let midiPrice = 7.5;

  let palamud = palamudPrice * palamudKg;
  let safrid = safridPrice * safridKg;
  let midi = midiPrice * midiKg;
  let sum = palamud + safrid + midi;
  console.log(sum.toFixed(2));
}
solve(["6.90", "4.20", " 1.5", "2.5", "1"]);

function solve(input) {
  let r = Number(input.shift());
  let perimeter = 2 * r * Math.PI;
  let area = r * r * Math.PI;
  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}
solve(["3"]);
solve(["4.5"]);

function solve(input) {
  let heightHouse = Number(input.shift());
  let lenthWall = Number(input.shift());
  let heighRoof = Number(input.shift());

  let sideWall = heightHouse * lenthWall;
  let window = 1.5 * 1.5 * 2;
  let door = 1.2 * 2;
  let backWall = heightHouse * heightHouse;
  let baseHouse = sideWall * 2 + backWall * 2 - window - door;

  let roofWall = heightHouse * lenthWall * 2;
  let roofSide = 2 * ((heightHouse * heighRoof) / 2);
  let roofHouse = roofWall + roofSide;

  let greenPaint = baseHouse / 3.4;
  let redPaint = roofHouse / 4.3;
  console.log(greenPaint.toFixed(2));
  console.log(redPaint.toFixed(2));
}
solve(["6", "10", "5.2"]);

function solve(input) {
  let weather = input.shift();
  if (weather === "sunny") {
    console.log(`It's warm outside!`);
  } else {
    console.log(`It's cold outside!`);
  }
}
solve(["cloudy"]);
solve(["sunny"]);
solve(["snowy"]);

function solve(input) {
  let degrees = Number(input.shift());
  if (degrees >= 26.0 && degrees <= 35.0) {
    console.log("Hot");
  } else if (degrees >= 20.1 && degrees <= 25.9) {
    console.log("Warm");
  } else if (degrees >= 15.0 && degrees <= 20.0) {
    console.log("Mild");
  } else if (degrees >= 12.0 && degrees <= 14.9) {
    console.log("Cool");
  } else if (degrees >= 5.0 && degrees <= 11.9) {
    console.log("Cold");
  } else {
    console.log("unknown");
  }
}
solve(["16.5"]);
solve(["8"]);
solve(["22.4"]);
solve(["26"]);
solve(["0"]);
