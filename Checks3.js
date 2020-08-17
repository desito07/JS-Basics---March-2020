//========================================================= Проверки - лекция 2 лаб упражнения

// упр. 1

function Days(input) {
  let day = Number(input.shift());
  switch (day) {
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
Days(["-1"]);

// упр. 2

function Animals(input) {
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
Animals(["bird"]);

// упр. 3

function People(input) {
  let age = Number(input.shift());
  let gender = input;
  if (gender == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}
People(["12", "f"]);

// упр. 4

function Shop(input) {
  let product = input.shift();
  let town = input.shift();
  let quantity = Number(input.shift());
  let price = 0.0;

  switch (town) {
    case "Sofia":
      if (product === "coffee") {
        price = 0.5;
      } else if (product === "water") {
        price = 0.8;
      } else if (product === "beer") {
        price = 1.2;
      } else if (product === "sweets") {
        price = 1.45;
      } else if (product === "peanuts") {
        price = 1.6;
      }
      break;
    case "Plovdiv":
      if (product === "coffee") {
        price = 0.4;
      } else if (product === "water") {
        price = 0.7;
      } else if (product === "beer") {
        price = 1.15;
      } else if (product === "sweets") {
        price = 1.3;
      } else if (product === "peanuts") {
        price = 1.5;
      }
      break;
    case "Varna":
      if (product === "coffee") {
        price = 0.45;
      } else if (product === "water") {
        price = 0.7;
      } else if (product === "beer") {
        price = 1.1;
      } else if (product === "sweets") {
        price = 1.35;
      } else if (product === "peanuts") {
        price = 1.55;
      }
      break;
  }
  console.log(price * quantity);
}
Shop(["sweets", "Sofia", 2.23]);

//===================================================

// упр. 5

function Interval(input) {
  let number = +input.shift();
  if (number >= -100 && number <= 100 && number !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Interval(["25"]);

//====================================================

// упр. 6

function FruitVeg(input) {
  let ProductName = input.shift();
  if (
    ProductName === "banana" ||
    ProductName === "apple" ||
    ProductName === "kiwi" ||
    ProductName === "cherry" ||
    ProductName === "lemon" ||
    ProductName === "grape"
  ) {
    console.log("fruit");
  } else if (
    ProductName === "tomato" ||
    ProductName === "cucumber" ||
    ProductName === "pepper" ||
    ProductName === "carrot"
  ) {
    console.log("vegetable");
  } else console.log("unknown");
}
FruitVeg(["apple"]);

//================================================

// упр. 7

function NumberMe(input) {
  let number = +input.shift();
  if (!((number >= 100 && number <= 200) || number == 0)) {
    console.log("invalid");
  }
}
NumberMe(["100"]);

//================================================

// упр. 8
function FruitShop(input) {
  let fruit = input.shift().toLowerCase();
  let day = input.shift().toLowerCase();
  let quantity = Number(input.shift());
  let price = 0.0;

  if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  ) {
    if (fruit == "banana") {
      price = 2.5;
    } else if (fruit == "apple") {
      price = 1.2;
    } else if (fruit == "orange") {
      price = 0.85;
    } else if (fruit == "grapefruit") {
      price == 1.45;
    } else if (fruit == "kiwi") {
      price = 2.7;
    } else if (fruit == "pineapple") {
      price == 5.5;
    } else if (fruit == "grapes") {
      price = 3.85;
    }
  } else if (day == "saturday" || day == "sunday") {
    if (fruit == "banana") {
      price = 2.7;
    } else if (fruit == "apple") {
      price = 1.25;
    } else if (fruit == "orange") {
      price = 0.9;
    } else if (fruit == "grapefruit") {
      price == 1.6;
    } else if (fruit == "kiwi") {
      price = 3.0;
    } else if (fruit == "pineapple") {
      price == 5.6;
    } else if (fruit == "grapes") {
      price = 4.2;
    }
  }
  if (price > 0) {
    console.log(`${(price * quantity).toFixed(2)}`);
  } else {
    console.log("error");
  }
}
FruitShop(["kiwi", "Monday", "2.5"]);

//==================================================

// упр. 9

function Trade(input) {
  let city = input.shift().toLowerCase();
  let sales = Number(input.shift());
  let commission = -1;

  if (city == "sofia") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.05;
    } else if (sales >= 500 && sales <= 1000) {
      commission = sales * 0.07;
    } else if (sales >= 1000 && sales <= 10000) {
      commission = sales * 0.08;
    } else if (sales >= 1000) {
      commission = sales * 0.12;
    } else {
      console.log("error");
    }
    console.log(`${commission.toFixed(2)}`);
  }
  if (city == "varna") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.045;
    } else if (sales >= 500 && sales <= 1000) {
      commission = sales * 0.075;
    } else if (sales >= 1000 && sales <= 10000) {
      commission = sales * 0.1;
    } else if (sales >= 1000) {
      commission = sales * 0.13;
    } else {
      console.log("error");
    }
    console.log(`${commission.toFixed(2)}`);
  }
  if (city == "plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.055;
    } else if (sales >= 500 && sales <= 1000) {
      commission = sales * 0.08;
    } else if (sales >= 1000 && sales <= 10000) {
      commission = sales * 0.12;
    } else if (sales >= 1000) {
      commission = sales * 0.145;
    } else {
      console.log("error");
    }
    console.log(`${commission.toFixed(2)}`);
  }
}
Trade(["Plovdiv", "499.99"]);

//==============================================

// упр. 10

function Ski(input) {
  let days = +input.shift();
  let room = input.shift();
  let feedback = input.shift();
  let price = 0.0;

  switch (room) {
    case "room for one person":
      price = 18 * (days - 1);
      break;
    case "apartment":
      price = 25 * (days - 1);
      if (days < 10) {
        price *= 0.7;
      } else if (days >= 10 && days <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = 35 * (days - 1);
      if (days < 10) {
        price *= 0.9;
      } else if (days >= 10 && days <= 15) {
        price *= 0.85;
      } else {
        price *= 0.8;
      }
      break;
  }
  if (feedback === "positive") {
    price *= 1.25;
  } else {
    price *= 0.9;
  }
  console.log(price.toFixed(2));
}
Ski(["14", "apartment", "positive"]);
