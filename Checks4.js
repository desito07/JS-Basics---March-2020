//==============================================  Проверки -  упражнениe 2 упражнения
// упр. 1

function Rectangle(input) {
  let x1 = Number(input.shift());
  let x2 = Number(input.shift());
  let x = Number(input.shift());
  let y1 = Number(input.shift());
  let y2 = Number(input.shift());
  let y = Number(input.shift());

  let firstCondition = (x == x1 || x == x2) && y >= y1 && y <= y2;
  let secondCondition = (y == y1 || y == y2) && x >= x1 && x <= x2;

  if (firstCondition || secondCondition) {
    console.log("Border");
  } else {
    console.log("Inside / Outside");
  }
}
Rectangle([2, -3, 12, 3, 2, -1]);

//===============================================
// упр. 2

function Cinema(input) {
  let screening = input.shift();
  let rows = Number(input.shift());
  let columns = Number(input.shift());

  let income = 0.0;

  if (screening == "Premiere") {
    income = rows * columns * 12;
  } else if (screening == "Normal") {
    income = rows * columns * 7.5;
  } else {
    income = rows * columns * 5;
  }
  console.log(`${income.toFixed(2)} leva`);
}
Cinema(["Discount", 12, 30]);

//=================================================
// упр. 3

function Summer(input) {
  let degree = Number(input.shift());
  let time = input.shift();
  let outfit;
  let shoes;

  if (degree >= 10 && degree <= 18) {
    if (time == "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (time == "Afternoon" || time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degree >= 18 && degree <= 24) {
    if (time == "Morning" || time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (time == "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (degree >= 25) {
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
  console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
Summer(["22", "Afternoon"]);

//=================================================
// упр. 4

function newHouse(input) {
  let flowerType = input.shift();
  let flowerCount = Number(input.shift());
  let budget = Number(input.shift());

  let flowerPrice = 0;
  switch (flowerType) {
    case "Roses":
      flowerPrice = flowerCount > 80 ? 5.0 * 0.9 : 5.0;
      // if (flowerCount > 80) {
      //     flowerPrice = 5.00 * 0.90;
      // } else {
      //     flowerPrice = 5.00;
      // }
      break;
    case "Dahlias":
      flowerPrice = flowerCount > 90 ? 3.8 * 0.85 : 3.8;
      break;
    case "Tulips":
      flowerPrice = flowerCount > 80 ? 2.8 * 0.85 : 2.8;
      break;
    case "Narcissus":
      flowerPrice = flowerCount < 120 ? 3.0 * 1.15 : 3.0;
      break;
    case "Gladiolus":
      flowerPrice = flowerCount < 80 ? 2.5 * 1.2 : 2.5;
      break;
  }

  let totalPrice = flowerCount * flowerPrice;

  let result = Math.abs(budget - totalPrice);
  if (totalPrice > budget) {
    console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
  } else {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${result.toFixed(
        2
      )} leva left.`
    );
  }
}

newHouse(["Roses", 55, 250]);

//=================================================
// упр. 5

function Boat(input) {
  let budget = Number(input.shift());
  let season = input.shift();
  let Count = Number(input.shift());

  let discount = 0.0;

  if (season == "Spring") {
    if (Count <= 6) {
      discount = 3000 * 0.9;
    } else if (Count >= 7 && Count <= 11) {
      discount = 3000 * 0.85;
    } else {
      discount = 3000 * 0.75;
    }
  } else if (season == " Winter") {
    if (Count <= 6) {
      discount = 2600 * 0.9;
    } else if (Count >= 7 && Count <= 11) {
      discount = 2600 * 0.85;
    } else discount = 2600 * 0.75;
  } else if (season == "Summer" || season == "Autumn") {
    if (Count <= 6) {
      discount = 4200 * 0.9;
    } else if (Count >= 7 && Count <= 11) {
      discount = 4200 * 0.85;
    } else discount = 4200 * 0.75;
  }
  if (Count % 2 == 0 && season !== "Autumn") {
    discount = discount * 0.95;
  }
  if (budget >= discount) {
    console.log(`Yes! You have ${(budget - discount).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(discount - budget).toFixed(2)} leva.`
    );
  }
}
Boat([3600, "Autumn", 6]);

//====================================================
// упр.6

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
Journey([312, "summer"]);

//=============================================
// упр. 7

function Numbers(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let operand = input.shift();

  let result = 0.0;
  let oddEven = "";
  switch (operand) {
    case "+":
      result = num1 + num2;
      if (result % 2 == 0) {
        oddEven = "even";
      } else {
        oddEven = "odd";
      }
      console.log(`${num1} ${operand} ${num2} = ${result} - ${oddEven}`);
      break;
    case "-":
      result = num1 - num2;
      if (result % 2 == 0) {
        oddEven = "even";
      } else {
        oddEven = "odd";
      }
      console.log(`${num1} ${operand} ${num2} = ${result} - ${oddEven}`);
      break;
    case "*":
      result = num1 * num2;
      if (result % 2 == 0) {
        oddEven = "even";
      } else {
        oddEven = "odd";
      }
      console.log(`${num1} ${operand} ${num2} = ${result} - ${oddEven}`);
      break;
    case "/":
      result = num1 / num2;
      if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
        break;
      } else {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
      }
    case "%":
      result = num1 % num2;
      if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
        break;
      } else {
        console.log(`${num1} % ${num2} = ${result}`);
      }
      break;
  }
}
Numbers([7, 3, "*"]);

//=====================================================
// упр. 8

function Hotel(input) {
  let month = input.shift();
  let nightsCnt = Number(input.shift());

  let apartmentPrice = 0.0;
  let studioPrice = 0.0;

  switch (month) {
    case "May":
    case "October":
      apartmentPrice = 65 * nightsCnt;
      studioPrice = 50 * nightsCnt;
      if (nightsCnt > 14) {
        studioPrice *= 0.7;
      } else if (nightsCnt > 7) {
        studioPrice *= 0.95;
      }
      break;

    case "June":
    case "September":
      apartmentPrice = 68.7 * nightsCnt;
      studioPrice = 75.2 * nightsCnt;
      if (nightsCnt > 14) {
        studioPrice *= 0.8;
      }
      break;

    case "July":
    case "August":
      apartmentPrice = 77 * nightsCnt;
      studioPrice = 76 * nightsCnt;
      break;
  }
  if (nightsCnt > 14) {
    apartmentPrice *= 0.9;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
Hotel(["May", 15]);

//===============================================
// упр. 9

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
    if (Math.abs(diff) < 60){
      console.log(`${m} minutes after the start`);
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
    if (Math.abs(diff) < 60){
      console.log(`${m} minutes before the start`)
    } else {
      console.log(`${h}:${m} hours before the start`)
    }
  }
}
Exam([11, 30, 12, 29]);

//========================================================
// упр. 10

function Volleyball(input){
  let year = input.shift();
  let holidays = Number(input.shift());
  let Hweekends = Number(input.shift());
  let Sweekends = Number(input.shift());
  
  let Yweekends = 48;
  let Sgames = 0.00; 
  let Tgames = 0.00;

  Sweekends = Yweekends - Hweekends;
  Sgames = Sweekends * (3.0 / 4) + holidays * (2.0 /3);
  Tgames = Sgames + Hweekends;

  if(year == "leap"){
    Tgames = Math.floor(Tgames * 0.15 + Tgames);
  } else if( year == "normal"){
    Tgames = Math.floor(Tgames);
  }
  console.log(Tgames);
}
Volleyball(["leap", 2, 3]);