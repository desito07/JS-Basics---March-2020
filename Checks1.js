//========================================================= Проверки - лекция 1 лаб упражнения

function solve() {
  let a = "5hjgytk"; //NaN
  let numberA = Number(a);
  console.log(numberA);
}
solve();

let a = 5;
let b = 2;
let result = a / b;
console.log(result);

console.log(1 + 1 + "4" + 2 + 1); //2421

function solve() {
  let a = 5;
  let b = "5";
  let result = a === b;
  console.log(result);
}
solve();

// когато има == сравнява по стойност /value/ , после зад кулисите преобразува стринга на число - true
// когато има === сравнява типа данни, който е различен - false

function solve() {
  let a = 6;
  let b = 5;
  console.log(a !== b);
}
solve();

function solve() {
  let condition = false;
  console.log(!condition);
}
solve();

function solve() {
  let condition = 5 == 5;
  console.log(!condition);
}
solve();

function solve() {
  console.log(3 < 3);
}
solve();

function solve(input) {
  let grade = Number(input.shift());
  let condition = grade >= 5.5;
  if (condition) {
    console.log("Excellent");
  }
}
solve(["5.70"]);

function solve(input) {
  let grade = Number(input.shift());
  let condition = grade >= 5.5;
  if (condition) {
    console.log("Good man!");
  } else {
    console.log("You fail buddy!");
  }
}
solve(["5.40"]);

function solve(input) {
  firstNumber = Number(input.shift());
  secondNumber = Number(input.shift());
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
solve(["11", "6"]);

//========================================================

//упр. 1

function isExcellent(input) {
  let grade = Number(input.shift());
  if (grade >= 5.5) {
    console.log("Excellent!");
  }
}
isExcellent(["5.50"]);

//упр. 2

function GreaterNumber(input) {
  let firstNumber = Number(input.shift());
  let secondNumber = Number(input.shift());
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
GreaterNumber(["5", "3"]);

//======================================================

function solve(input) {
  let number = Number(input.shift());
  let condition = number % 2 == 0;
  if (condition) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
solve(["0"]);

//=======================================================

// упр. 3

function OddEven(input) {
  let number = Number(input.shift());
  let result = number % 2 == 0;
  if (result) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
OddEven(["1024"]);

//=========================================================

//parseInt & Number - преобръща входа в число
//parseInt - цяло число след знака точка
//Number - за пълни числа, всичко зад точката

//Ctrl + C - копира целия ред
//Ctrl + V - пейства вече копираният ред
//Ctrl + / - коментира селекцията

function isEven(input) {
  let num = parseInt(input.shift());
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
isEven(["1543"]);

//=====================================================

// упр. 5

function Me(input) {
  let a = Number(input.shift());

  if (a === 1) {
    console.log("one");
  } else if (a === 2) {
    console.log("two");
  } else if (a === 3) {
    console.log("three");
  } else if (a === 4) {
    console.log("four");
  } else if (a === 5) {
    console.log("five");
  } else if (a === 6) {
    console.log("six");
  } else if (a === 7) {
    console.log("seven");
  } else if (a === 8) {
    console.log("eight");
  } else if (a === 9) {
    console.log("nine");
  } else if (a > 9) {
    console.log("number too big");
  }
}
Me(["5"]);

// с булев оператор &&

function solve(input) {
  let firstNumber = Number(input.shift());
  let secondNumber = Number(input.shift());
  let thirdNumber = Number(input.shift());

  if (firstNumber == secondNumber && secondNumber == thirdNumber) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
solve(["1", "2", "3"]);

//=============================================

function Elseifelse(input) {
  let a = Number(input.shift());
  if (a > 7) {
    console.log("Bigger than 4");
  } else if (a > 5) {
    console.log("Bigger than 5");
  } else {
    console.log("Equal to 7");
  }
}
Elseifelse(["-7"]);

//==============================================

// упр. 6

function BigNumbers(input) {
  let number = Number(input.shift());
  if (number < 100) {
    console.log("Less than 100");
  } else if (number <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}
BigNumbers(["200"]);

//==============================================

function Weekdays() {
  let currentday = "Monday";
  let salary = 500;
  if (currentday === "Monday") {
    salary += 100;
  }
  console.log(salary);
}
Weekdays();

//===============================================

//  упр. 7

function Password(input) {
  let pass = input.shift();
  if (pass == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
Password(["querty"]);

//================================================

function Figure(input) {
  let shape = input.shift();
  let area = 0;
  if (shape === "square") {
    let side = Number(input.shift());
    area = side * side;
  } else if (shape === "rectangle") {
    let sideA = Number(input.shift());
    let sideB = Number(input.shift());
    area = sideA * sideB;
    console.log(area.toFixed(3));
  } else if ((shape = "circle")) {
    let radius = Number(input.shift());
    area = radius * radius * Math.PI;
    console.log(area.toFixed(3));
  } else if ((shape = "triangle")) {
    let length = Number(input.shift());
    let height = Number(input.shift());
    area = (length * height) / 2;
  }
}
Figure(["circle", "6"]);

// упр. 7

function Figure(input) {
  let shape = input.shift();
  let area = 0.0;
  switch (shape) {
    case "square": {
      let side = Number(input.shift());
      area = side * side;
      break;
    }
    case "rectangle": {
      let sideA = Number(input.shift());
      let sideB = Number(input.shift());
      area = sideA * sideB;
      break;
    }
    case "circle": {
      let radius = Number(input.shift());
      area = radius * radius * Math.PI;
      break;
    }
    case "triangle": {
      let length = Number(input.shift());
      let height = Number(input.shift());
      area = (length * height) / 2;
      break;
    }
  }
  console.log(area.toFixed(3));
}
Figure(["triangle", "4.5", "20"]);

//====================================================

// упр. 8

function ToyShop(input) {
  let pricetrip = Number(input.shift());
  let jigsaw = Number(input.shift());
  let talkingdall = Number(input.shift());
  let teddybear = Number(input.shift());
  let minion = Number(input.shift());
  let truck = Number(input.shift());

  let totaltoys = jigsaw + talkingdall + teddybear + minion + truck;
  let income =
    jigsaw * 2.6 + talkingdall * 3 + teddybear * 4.1 + minion * 8.2 + truck * 2;

  if (totaltoys >= 50) {
    let discount = income * 0.25;
    income -= discount;
  }

  let rent = income * 0.1;
  income -= rent;

  if (income >= pricetrip) {
    console.log(`Yes! ${(income - pricetrip).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(pricetrip - income).toFixed(2)} lv needed.`
    );
  }
}
ToyShop(["320", "8", "2", "5", "5", "1"]);
