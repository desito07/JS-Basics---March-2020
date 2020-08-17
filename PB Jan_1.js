//  ПРОСТИ ОПЕРАЦИИ И ПРЕСМЯТАНИЯ

function hello() {
  console.log("Hello Softuni");
}
hello();

function Expression() {
  console.log((3522 + 52353) * 23 - (2336 * 501 + 23432 - 6743) * 3);
}
Expression();

function Nums() {
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
Nums();

function Sides() {
  let a = 2;
  let b = 7;
  let area = a * b;
  console.log(area);
}
Sides([]);

function greetings(name) {
  let name = input.shift();
  console.log(`Hello, ${name}!`);
}
greetings(["Niki"]);

function Name() {
  let firstName = "Maria";
  let lastName = "Ivanova";
  let age = 19;
  let str = firstName + " " + lastName + " @ " + age;
  console.log(str);
}
Name();

function solve() {
  let a1 = 1.5;
  let b1 = 2.5;
  let sum1 = "The sum is: " + a1 + b1;
  console.log(sum1);
}
solve();

function solve() {
  let a = 5;
  let b = 7;
  let sum = a + b;
  console.log(sum);
}
solve();

function Pesho(input) {
  let firstname = input.shift();
  let lastname = input.shift();
  let age = Number(input.shift());
  let town = input.shift();
  console.log(
    `You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`
  );
}
Pesho(["Petar", "Petrov", "24", "Sofia"]);

function Drobi(input) {
  let up = Number(input.shift());
  let down = Number(input.shift());
  console.log(Math.ceil(up));
  console.log(Math.floor(down));
}
Drobi(["47.59", "85.45"]);

function Square(input) {
  let a = Number(input.shift());
  console.log(a * a);
}
Square(["5"]);

function inches(input) {
  let num = Number(input.shift());
  let sum = num * 2.54;
  console.log(sum);
}
inches(["5"]);

function Projects(input) {
  let name = input.shift();
  let num = Number(input.shift());
  let hours = num * 3;
  console.log(
    `The architect ${name} will need ${hours} hours to complete ${num} project/s.`
  );
}
Projects(["George", "4"]);

function Zoo(input) {
  let numDogs = Number(input.shift());
  let numOthers = Number(input.shift());
  let sumDogs = numDogs * 2.5;
  let sumOthers = numOthers * 4;
  let sum = sumDogs + sumOthers;
  console.log(`${sum.toFixed(2)} lv.`);
}
Zoo(["5", "4"]);

function Yard(input) {
  let meters = Number(input.shift());
  let summeters = meters * 7.61;
  let discount = summeters * 0.18;
  let totalsum = summeters - discount;
  console.log(`The final price is: ${totalsum.toFixed(2)} lv.`);
  console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
Yard(["540"]);

function Fish(input) {
  let length = Number(input.shift());
  let width = Number(input.shift());
  let height = Number(input.shift());
  let percent = Number(input.shift());

  let volume = length * width * height;
  let litres = volume * 0.001;

  let totallitres = litres - litres * (percent / 100);

  console.log(totallitres.toFixed(3));
}
Fish(["105", "77", "89", "18.5"]);

function Convertor(input) {
  let usd = Number(input.shift());
  let convert = usd * 1.79549;
  console.log(convert.toFixed(2));
}
Convertor(["20"]);

function Radians(input) {
  let radians = Number(input.shift());
  let degrees = (radians * 180) / Math.PI;
  console.log(degrees.toFixed(0));
}
Radians([3.1416]);

function Rectangle(input) {
  let x1 = Number(input.shift());
  let y1 = Number(input.shift());
  let x2 = Number(input.shift());
  let y2 = Number(input.shift());

  let length = Math.abs(x1 - x2);
  let width = Math.abs(y1 - y2);

  console.log((length * width).toFixed(2));
  console.log((2 * (length + width)).toFixed(2));
}
Rectangle(["60", "20", "10", "50"]);

function Workshop(input) {
  tablesCount = Number(input.shift());
  tablesLength = Number(input.shift());
  tablesWidth = Number(input.shift());

  let totalAreaCovers =
    tablesCount * (tablesLength + 2 * 0.3) * (tablesWidth + 2 * 0.3);
  let totalAreaKare = tablesCount * (tablesLength / 2) * (tablesLength / 2);

  let priceUSD = totalAreaCovers * 7 + totalAreaKare * 9;
  let priceBGN = priceUSD * 1.85;

  console.log(`${priceUSD.toFixed(2)} USD`);
  console.log(`${priceBGN.toFixed(2)} BGN`);
}
Workshop(["10", "1.20", "0.65"]);

function DanceHall(input) {
  let length = Number(input.shift());
  let width = Number(input.shift());
  let sideMeters = Number(input.shift());

  let areaHall = length * 100 * (width * 100);
  let areaWardrobe = sideMeters * 100 * (sideMeters * 100);
  let areaBench = areaHall / 10;
  let areaFreespace = areaHall - areaWardrobe - areaBench;
  let dancers = Math.floor(areaFreespace / (40 + 7000));
  console.log(dancers.toFixed(0));
}
DanceHall(["50", "25", "2"]);

function Charity(input) {
  let days = Number(input.shift());
  let cooks = Number(input.shift());
  let cakes = Number(input.shift());
  let gofretes = Number(input.shift());
  let pancakes = Number(input.shift());

  let sumcakes = cakes * 45;
  let sumgofretes = gofretes * 5.8;
  let sumpancakes = pancakes * 3.2;
  let sumperday = (sumcakes + sumgofretes + sumpancakes) * cooks;
  let totalsum = sumperday * days;
  let expesnes = totalsum - (totalsum * 1) / 8;

  console.log(expesnes.toFixed(2));
}
Charity(["20", "8", "14", "30", "16"]);

function market(input) {
  let pricewhiskey = Number(input.shift());
  let beer = Number(input.shift());
  let wine = Number(input.shift());
  let rakia = Number(input.shift());
  let whiskey = Number(input.shift());

  let pricerakia = 0.5 * pricewhiskey;
  let pricewine = pricerakia - 0.4 * pricerakia;
  let pricebeer = pricerakia - 0.8 * pricerakia;

  let sumrakia = rakia * pricerakia;
  let sumwine = wine * pricewine;
  let sumbeer = beer * pricebeer;
  let sumwhiskey = whiskey * pricewhiskey;

  let totalsum = sumbeer + sumrakia + sumwine + sumwhiskey;
  console.log(totalsum.toFixed(2));
}
market(["50", "10", "3.5", "6.5", "1"]);
