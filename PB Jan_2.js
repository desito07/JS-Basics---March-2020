// ПРОВЕРКИ

function isExcellent(input) {
  let grade = input.shift();
  if (grade >= 5.5) {
    console.log("Excellent!");
  }
}
isExcellent(["6"]);

function GreaterNumber(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
GreaterNumber(["5", "3"]);

function EvenOdd(input) {
  let num = Number(input.shift());
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
EvenOdd(["3"]);

function NumberMe(input) {
  let num = Number(input.shift());
  if (num === 1) {
    console.log("one");
  } else if (num === 2) {
    console.log("two");
  } else if (num === 3) {
    console.log("three");
  } else if (num === 4) {
    console.log("four");
  } else if (num === 5) {
    console.log("five");
  } else if (num === 6) {
    console.log("six");
  } else if (num === 7) {
    console.log("seven");
  } else if (num === 8) {
    console.log("eight");
  } else if (num === 9) {
    console.log("nine");
  } else {
    console.log("number too big");
  }
}
NumberMe(["9"]);

function BigNumbers(input) {
  let i = Number(input.shift());
  if (i < 100) {
    console.log("Less than 100");
  } else if (i <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}
BigNumbers(["120"]);

function Password(input) {
  let pass = input.shift();
  if (pass == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
Password(["s3cr3t!P@ssw0rd"]);

function Shapes(input) {
  let shape = input.shift();
  if (shape == "square") {
    let a = Number(input.shift());
    console.log((a * a).toFixed(3));
  } else if (shape === "rectangle") {
    let length = Number(input.shift());
    let width = Number(input.shift());
    console.log((length * width).toFixed(3));
  } else if (shape === "circle") {
    let radius = Number(input.shift());
    console.log((radius * radius * Math.PI).toFixed(3));
  } else if (shape === "triangle") {
    let length = Number(input.shift());
    let height = Number(input.shift());
    console.log(((length * height) / 2).toFixed(3));
  }
}
Shapes(["circle", "6"]);

function ToyShop(input) {
  let trip = Number(input.shift());
  let jigsaw = Number(input.shift());
  let doll = Number(input.shift());
  let bear = Number(input.shift());
  let minion = Number(input.shift());
  let truck = Number(input.shift());

  let income = jigsaw * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;
  let count = jigsaw + doll + bear + minion + truck;

  if (count >= 50) {
    let discount = income * 0.25;
    income -= discount;
  }

  let rent = income * 0.1;
  income -= rent;

  if (income >= trip) {
    console.log(`Yes! ${(income - trip).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(trip - income).toFixed(2)} lv needed.`);
  }
}
ToyShop(["40.8", "20", "25", "30", "50", "10"]);

function Seconds(input) {
  let time1 = Number(input.shift());
  let time2 = Number(input.shift());
  let time3 = Number(input.shift());

  let sumSec = time1 + time2 + time3;
  let min = Math.floor(sumSec / 60);
  let sec = sumSec % 60;

  if (sec < 10) {
    console.log(`${min}:0${sec}`);
  } else {
    console.log(`${min}:${sec}`);
  }
}
Seconds(["35", "45", "44"]);

function Bonus(input) {
  let num = Number(input.shift());
  let bonus = 0.0;

  if (num <= 100) {
    bonus = 5;
  } else if (num > 1000) {
    bonus = num * 0.1;
  } else {
    bonus = num * 0.2;
  }
  if (num % 2 == 0) {
    bonus += 1;
  } else if (num % 10 == 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(num + bonus);
}
Bonus(["15875"]);

function Speed(input) {
  let speed = Number(input.shift());
  if (speed <= 10) {
    console.log("slow");
  } else if (speed <= 50) {
    console.log("average");
  } else if (speed <= 150) {
    console.log("fast");
  } else if (speed <= 1000) {
    console.log("ultra fast");
  } else {
    console.log("extremely fast");
  }
}
Speed(["3500"]);

function Converter(input) {
  let num = Number(input.shift());
  let inputme = input.shift();
  let output = input.shift();
  if (inputme == "mm") {
    num = num / 1000;
  } else if (inputme == "cm") {
    num = num / 100;
  }
  if (output == "mm") {
    num *= 1000;
  } else if (output == "cm") {
    num *= 100;
  }
  console.log(num.toFixed(3));
}
Converter(["45", "cm", "mm"]);

function Min(input) {
  let hour = Number(input.shift());
  let min = Number(input.shift());

  let timemin = hour * 60 + min;
  let min15 = timemin + 15;
  let finalHour = Math.floor(min15 / 60);
  let finalMin = min15 % 60;

  if (finalHour >= 24) {
    finalHour -= 24;
  }

  if (finalMin < 10) {
    console.log(`${finalHour}:0${finalMin}`);
  } else {
    console.log(`${finalHour}:${finalMin}`);
  }
}
Min(["1", "46"]);

function Movie(input) {
  let budget = Number(input.shift());
  let count = Number(input.shift());
  let price = Number(input.shift());

  let decor = budget * 0.1;
  let discount = 0;

  let clothes = price * count;

  if (count > 150) {
    discount = clothes * 0.1;
    clothes -= discount;
  }
  let movie = decor + clothes;

  if (budget >= movie) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - movie).toFixed(2)} leva left.`
    );
  } else if (budget < movie) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${Math.abs(movie - budget).toFixed(2)} leva more.`
    );
  }
}
Movie(["9587.88", "222", "55.68"]);

function Swimming(input) {
  let record = Number(input.shift());
  let distance = Number(input.shift());
  let time1 = Number(input.shift());

  let time2 = distance * time1;
  let time3 = Math.floor(distance / 15) * 12.5;
  let totaltime = time2 + time3;

  if (record <= totaltime) {
    let diff = record - totaltime;
    console.log(
      `No, he failed! He was ${Math.abs(diff).toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${totaltime.toFixed(
        2
      )} seconds.`
    );
  }
}
Swimming(["55555.67", "3017", "5.03"]);

function Scholarship(input) {
  let income = +input.shift();
  let grade = +input.shift();
  let salary = +input.shift();

  let socialScholarship = 0.0;
  let gradeScholarship = 0.0;

  if (income < salary) {
    if (grade > 4.5) {
      socialScholarship = salary * 0.35;
    }
  }
  if (grade >= 5.5) {
    gradeScholarship = salary * 25;
  }
  if (socialScholarship > gradeScholarship) {
    console.log(
      `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
    );
  } else if (gradeScholarship > socialScholarship) {
    console.log(
      `You get a scholarship for excellent results ${Math.floor(
        gradeScholarship
      )} BGN`
    );
  } else {
    console.log("You cannot get a scholarship!");
  }
}
Scholarship(["480.00", "4.60", "450.00"]);

function Days(input) {
  let day = +input.shift();
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

function Animal(input) {
  let animal = input.shift();
  switch (animal) {
    case "dog":
      console.log("mammal");
      break;
    case "snake":
    case "crocodile":
    case "tortoise":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}
Animal(["cat"]);

function People(input) {
  let age = +input.shift();
  let gender = input.shift();

  if (gender == "m" && age >= 16) {
    console.log("Mr.");
  } else if (gender == "m" && age < 16) {
    console.log("Master");
  }
  if (gender == "f" && age >= 16) {
    console.log("Ms.");
  } else if (gender == "f" && age < 16) {
    console.log("Miss");
  }
}
People(["13.5", "m"]);

function Shop(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = +input.shift();
  let price = 0;

  switch (city) {
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
Shop(["peanuts", "Plovdiv", "1"]);

function NumberInRange(input) {
  let num = +input.shift();
  if (num >= -100 && num <= 100 && num !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
NumberInRange(["25"]);

function FruitVeg(input) {
  let product = input.shift();
  if (
    product == "banana" ||
    product == "apple" ||
    product == "kiwi" ||
    product == "cherry" ||
    product == "lemon" ||
    product == "grapes"
  ) {
    console.log("fruit");
  } else if (
    product == "tomato" ||
    product == "cucumber" ||
    product == "pepper" ||
    product == "carrot"
  ) {
    console.log("vegetable");
  } else {
    console.log("unknown");
  }
}
FruitVeg(["cat"]);

function InvalidNumber(input) {
  let num = +input.shift();
  if ((num >= 100 && num <= 200) || num == 0) {
  } else {
    console.group("invalid");
  }
}
InvalidNumber(["200"]);

function Shop(input) {
  let fruit = input.shift();
  let day = input.shift();
  let quantity = Number(input.shift());
  let price = 0;

  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    if (fruit == "banana") {
      price = 2.5;
    } else if (fruit == "apple") {
      price = 1.2;
    } else if (fruit == "orange") {
      price = 0.85;
    } else if (fruit == "grapefruit") {
      price = 1.45;
    } else if (fruit == "kiwi") {
      price = 2.7;
    } else if (fruit == "pineapple") {
      price = 5.5;
    } else if (fruit == "grapes") {
      price = 3.85;
    }
  } else if (day == "Saturday" || day == "Sunday") {
    if (fruit == "banana") {
      price = 2.7;
    } else if (fruit == "apple") {
      price = 1.25;
    } else if (fruit == "orange") {
      price = 0.9;
    } else if (fruit == "grapefruit") {
      price = 1.6;
    } else if (fruit == "kiwi") {
      price = 3.0;
    } else if (fruit == "pineapple") {
      price = 5.6;
    } else if (fruit == "grapes") {
      price = 4.2;
    }
  }
  if (price > 0) {
    console.log((price * quantity).toFixed(2));
  } else {
    console.log("error");
  }
}
Shop(["kiwi", "Monday", "2.5"]);

function Trade(input) {
  let city = input.shift();
  let sales = Number(input.shift());
  let commission = 0;

  if (city == "Sofia") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.05;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.07;
    } else if ((sales > 1000) & (sales <= 10000)) {
      commission = 0.08;
    } else if (sales > 10000) {
      commission = 0.12;
    }
  } else if (city == "Varna") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.045;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.075;
    } else if ((sales > 1000) & (sales <= 10000)) {
      commission = 0.1;
    } else if (sales > 10000) {
      commission = 0.13;
    }
  } else if (city == "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.055;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      commission = 0.12;
    } else if (sales > 10000) {
      commission = 0.145;
    }
  }
  if (commission > 0) {
    console.log((commission * sales).toFixed(2));
  } else {
    console.log("error");
  }
}
Trade(["Plovdiv", "1000"]);

function SkiTrip(input) {
  let days = +input.shift();
  let room = input.shift();
  let feedback = input.shift();
  let price = 0;
  let commission = 0;
  let nights = days - 1;

  if (room == "room for one person") {
    price = 18;
    if (nights < 10) {
      commission = 0;
    } else if (nights > 10 && nights < 15) {
      commission = 0;
    } else if (nights > 15) {
      commission = 0;
    }
  } else if (room == "apartment") {
    price = 25;
    if (nights < 10) {
      commission = 0.3;
    } else if (nights > 10 && nights < 15) {
      commission = 0.35;
    } else if (nights > 15) {
      commission = 0.5;
    }
  } else if (room == "president apartment") {
    price = 35;
    if (nights < 10) {
      commission = 0.1;
    } else if (nights > 10 && nights < 15) {
      commission = 0.15;
    } else if (nights > 15) {
      commission = 0.2;
    }
  }
  let totalPrice = nights * price;
  let save = totalPrice - totalPrice * commission;
  if (feedback == "positive") {
    save += save * 0.25;
  } else if ((feedback = "negative")) {
    save -= save * 0.1;
  }
  console.log(save.toFixed(2));
}
SkiTrip(["30", "president apartment", "negative"]);

function Point(input) {
  let x1 = +input.shift();
  let y1 = +input.shift();
  let x2 = +input.shift();
  let y2 = +input.shift();
  let x = +input.shift();
  let y = +input.shift();

  if (x1 < x2 && y1 < y2) {
    if (
      ((x == x1 || x == x2) && y >= y1 && y <= y2) ||
      ((y == y1 || y == y2) && x >= x1 && x <= x2)
    ) {
      console.log("Border");
    } else {
      console.log("Inside / Outside");
    }
  }
}
Point(["2", "-3", "12", "3", "8", "-1"]);

function Cinema(input) {
  let screen = input.shift();
  let rows = +input.shift();
  let columns = +input.shift();
  price = 0;

  if (screen == "Premiere") {
    price = 12;
  } else if (screen == "Normal") {
    price = 7.5;
  } else if ((screen = "Discount")) {
    price = 5;
  }
  let area = rows * columns;
  let sales = area * price;
  console.log(`${sales.toFixed(2)} leva`);
}
Cinema(["Discount", "12", "30"]);

function Summer(input) {
  let degrees = Number(input.shift());
  let time = input.shift();

  let outfit = "";
  let shoes = "";

  if (degrees >= 10 && degrees <= 18) {
    if (time == "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (time == "Afternoon") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (time == "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (time == "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees >= 25) {
    if (time == "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (time == "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
Summer(["28", "Evening"]);

function Home(input) {
  let flower = input.shift();
  let count = Number(input.shift());
  let budget = Number(input.shift());
  let price = 0;
  let discount = 0;

  if (flower == "Roses") {
    price = 5;
    if (count > 80) {
      discount = price * 0.1;
    }
  } else if (flower == "Dahlias") {
    price = 3.8;
    if (count > 90) {
      discount = price * 0.15;
    }
  } else if (flower == "Tulips") {
    price = 2.8;
    if (count > 80) {
      discount = price * 0.15;
    }
  } else if (flower == "Narcissus") {
    price = 3;
    if (count < 120) {
      discount = -(price * 0.15);
    }
  } else if (flower == "Gladiolus") {
    price = 2.5;
    if (count < 80) {
      discount = -(price * 0.2);
    }
  }
  let totaldiscount = discount * count;
  let totalPrice = price * count - totaldiscount;
  let diff = Math.abs(totalPrice - budget);
  if (budget >= totalPrice) {
    console.log(
      `Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else if (budget <= totalPrice) {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
Home(["Roses", "55", "250"]);
Home(["Tulips", "88", "260"]);
Home(["Narcissus", "119", "360"]);

function Fishboat(input) {
  let budget = Number(input.shift());
  let season = input.shift();
  let count = Number(input.shift());
  let price = 0;
  let discount = 0;

  if (season == "Spring") {
    price = 3000;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  } else if (season == "Summer" || season == "Autumn") {
    price = 4200;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  } else if (season == "Winter") {
    price = 2600;
    if (count <= 6) {
      discount = price * 0.1;
    } else if (count >= 7 && count <= 11) {
      discount = price * 0.15;
    } else if (count > 12) {
      discount = price * 0.25;
    }
  }
  let totalPrice = price - discount;
  if (count % 2 == 0 && season !== "Autumn") {
    totalPrice = totalPrice * 0.95;
  }
  let diff = Math.abs(budget - totalPrice);
  if (budget >= totalPrice) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
Fishboat(["2000", "Winter", "13"]);

function Journey(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let destination = "";
  let place = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      place = "Camp";
      budget *= 0.3;
    } else if (season == "winter") {
      place = "Hotel";
      budget *= 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      place = "Camp";
      budget *= 0.4;
    } else if (season == "winter") {
      place = "Hotel";
      budget *= 0.8;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    place = "Hotel";
    budget *= 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${budget.toFixed(2)}`);
}
Journey(["50", "summer"]);
Journey(["75", "winter"]);
Journey(["312", "summer"]);
Journey(["678.53", "winter"]);
Journey(["1500", "summer"]);

function Numbers(input) {
  let N1 = Number(input.shift());
  let N2 = Number(input.shift());
  let operator = input.shift();

  let result = 0;
  let oddOrEven = "";

  if (operator == "+") {
    result = N1 + N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "-") {
    result = N1 - N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "*") {
    result = N1 * N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "/") {
    result = N1 / N2;
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
  } else if (operator == "%") {
    result = N1 % N2;
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} % ${N2} = ${result}`);
    }
  }
}
Numbers(["10", "12", "+"]);
Numbers(["10", "1", "-"]);
Numbers(["7", "3", "*"]);
Numbers(["123", "12", "/"]);
Numbers(["10", "3", "%"]);
Numbers(["112", "0", "/"]);
Numbers(["10", "0", "%"]);

function Hotel(input) {
  let month = input.shift();
  let count = Number(input.shift());

  let priceap = 0;
  let pricest = 0;

  if (month == "May" || month == "October") {
    priceap = 65 * count;
    pricest = 50 * count;
    if (count > 14) {
      pricest *= 0.7;
    } else if (count > 7) {
      pricest *= 0.95;
    }
  } else if (month == "June" || month == "September") {
    priceap = 68.7 * count;
    pricest = 75.2 * count;
    if (count > 14) {
      pricest *= 0.8;
    }
  } else if (month == "July" || month == "August") {
    priceap = 77 * count;
    pricest = 76 * count;
  }
  if (count > 14) {
    priceap *= 0.9;
  }
  console.log(`Apartment: ${priceap.toFixed(2)} lv.`);
  console.log(`Studio: ${pricest.toFixed(2)} lv.`);
}
Hotel(["May", "15"]);
Hotel(["June", "14"]);
Hotel(["August", "20"]);

function Exam(input) {
  let startHExam = Number(input.shift());
  let startMExam = Number(input.shift());
  let arriveH = Number(input.shift());
  let arriveM = Number(input.shift());

  let examTimeInMin = startHExam * 60 + startMExam;
  let studentTimeInMin = arriveH * 60 + arriveM;

  let diff = examTimeInMin - studentTimeInMin;

  let h = Math.floor(Math.abs(diff) / 60);
  let m = Math.abs(diff % 60);

  if (m < 10) {
    m = "0" + m;
  }
  if (diff < 0) {
    console.log("Late");
    if (Math.abs(diff) < 60) {
      console.log(`${parseInt(m)} minutes after the start`);
    } else {
      console.log(`${h}:${m} hours after the start`);
    }
  } else if (diff === 0 || diff <= 30) {
    console.log("On time");
    if (diff % 60 !== 0) {
      console.log(`${diff % 60} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (Math.abs(diff) < 60) {
      console.log(`${m} minutes before the start`);
    } else {
      console.log(`${h}:${m} hours before the start`);
    }
  }
}
Exam(["9", "00", "9", "02"]);
Exam(["9", "00", "8", "58"]);

function Volleyball(input) {
  let year = input.shift();
  let holidays = Number(input.shift());
  let Hweekends = Number(input.shift());
  let Sweekends = Number(input.shift());

  let Yweekends = 48;
  let Sgames = 0;
  let Tgames = 0;

  Sweekends = Yweekends - Hweekends;
  Sgames = Sweekends * (3.0 / 4) + holidays * (2.0 / 3);
  Tgames = Sgames + Hweekends;

  if (year == "leap") {
    Tgames = Math.floor(Tgames * 0.15 + Tgames);
  } else if (year == "normal") {
    Tgames = Math.floor(Tgames);
  }
  console.log(Tgames);
}
Volleyball(["leap", "5", "2"]);
Volleyball(["normal", "3", "2"]);
Volleyball(["leap", "2", "3"]);
Volleyball(["normal", "11", "6"]);
Volleyball(["leap", "0", "1"]);
Volleyball(["normal", "6", "13"]);
