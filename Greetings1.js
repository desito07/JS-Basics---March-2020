//================================================== Прости операции и пресмятания - лекция упражнения

// упр. 1
function greetingByName(input) {
  let name = input.shift();
  console.log(`Hello, ${name}!`);
}
greetingByName(["Nakov"]);

// упр. 2

function concatenateData(input) {
  let firstName = input.shift();
  let lastName = input.shift();
  let age = Number(input.shift());
  let town = input.shift();
  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
  );
}
concatenateData(["Maria", "Ivanova", "19", "Pleven"]);

// упр. 3

function squareArea(input) {
  let a = Number(input.shift());
  let area = a * a;
  console.log(area);
}
squareArea(["5"]);

// упр. 4

function inchesToCnetimeters(input) {
  let inches = Number(input.shift());
  let centimeters = inches * 2.54;
  console.log(centimeters);
}
inchesToCnetimeters(["5"]);

// упр. 5

function projectCreation(input) {
  let name = input.shift();
  let projectCount = Number(input.shift());
  let hours = projectCount * 3;
  console.log(
    `The architect ${name} will need ${hours} hours to complete ${projectCount} project/s.`
  );
}
projectCreation(["George", "4"]);

function projectCreation(input) {
  let name = input.shift();
  let projectCount = Number(input.shift());
  let hours = projectCount * 3;
  console.log(
    `The architect ${name} will need ${hours} hours to complete ${projectCount} project/s.`
  );
}
projectCreation(["Sanya", "9"]);

// упр. 6

function petShop(input) {
  let dogCount = Number(input.shift());
  let otherAnimals = Number(input.shift());
  let totalSum = dogCount * 2.5 + otherAnimals * 4;
  console.log(`${totalSum.toFixed(2)} lv.`);
}
petShop(["5", "4"]);

function petShop(input) {
  let dogCount = Number(input.shift());
  let otherAnimals = Number(input.shift());
  let totalSum = dogCount * 2.5 + otherAnimals * 4;
  console.log(`${totalSum.toFixed(2)} lv.`);
}
petShop(["13", "9"]);

// упр. 7

function yardGreening(input) {
  let area = Number(input.shift());
  let price = area * 7.61;
  let discount = price * 0.18;
  let finalPrice = price - discount;

  console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
  console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
yardGreening(["540"]);

function yardGreening(input) {
  let area = Number(input.shift());
  let price = area * 7.61;
  let discount = price * 0.18;
  let finalPrice = price - discount;

  console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
  console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
yardGreening(["135"]);

//  упр. 8

function aquariaum(input) {
  let height = Number(input.shift());
  let width = Number(input.shift());
  let length = Number(input.shift());
  let percentage = Number(input.shift());

  let volume = height * width * length;
  let litres = volume * 0.001;
  let result = litres - (litres * percentage) / 100;
  console.log(result.toFixed(3));
}
aquariaum(["85", "75", "47", "17"]);

function aquariaum(input) {
  let height = Number(input.shift());
  let width = Number(input.shift());
  let length = Number(input.shift());
  let percentage = Number(input.shift());

  let volume = height * width * length;
  let litres = volume * 0.001;
  let result = litres - (litres * percentage) / 100;
  console.log(result.toFixed(3));
}
aquariaum(["105", "77", "89", "18.5"]);

//==========================================================
