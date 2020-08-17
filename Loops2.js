//============================================= Цикли - упражнение - упражнения
// упр. 1

function Library(input) {
  let book = input.shift();
  let number = +input.shift();

  let counter = 0;
  let bookIsFound = false;
  let NextBook = input.shift();

  while (counter < number) {
    if (NextBook == book) {
      bookIsFound = true;
      break;
    }
    counter++;
    NextBook = input.shift();
  }
  if (bookIsFound == false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${number} books.`);
  } else {
    console.log(`You checked ${counter} books and found it.`);
  }
}
Library([
  "The Spot",
  "4",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
]);

//=====================================================
// упр.1.1

function solve(input) {
  let bookToSearch = input.shift();
  let countOfBooks = +input.shift();
  let isFound = false;
  let counter = 0;

  while (countOfBooks > counter) {
    let currentBook = input.shift();
    if (currentBook === bookToSearch) {
      isFound = true;
      break;
    }
    counter++;
  }
  if (isFound == true) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log("The book you search is not here!");
    console.log(`You checked ${countOfBooks} books.`);
  }
}
solve([
  "Bourne",
  "32",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);

//=====================================================
// упр. 2

function Exam(input) {
  let inputOfBadGrades = +input.shift();

  let countForBadGrades = 0;
  let sumGrades = 0;
  let counterForGrades = 0;
  let lastProblem = "";
  isFailed = true;

  while (countForBadGrades < inputOfBadGrades) {
    let nameOfExercise = input.shift();
    let grade = +input.shift();

    if (nameOfExercise == "Enough") {
      isFailed = false;
      break;
    }
    if (grade <= 4) {
      countForBadGrades++;
    }
    sumGrades += grade;
    counterForGrades++;
    lastProblem = nameOfExercise;
  }
  if (countForBadGrades == inputOfBadGrades) {
    console.log(`You need a break, ${countForBadGrades} poor grades.`);
  } else {
    console.log(`Average score: ${(sumGrades / counterForGrades).toFixed(2)}`);
    console.log(`Number of problems: ${counterForGrades}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
Exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);

//================================================
// упр. 6

function Cake(input) {
  let width = +input.shift();
  let lenght = +input.shift();
  let areaCake = width * lenght;

  let data = input.shift();

  while ("STOP" !== data) {
    let pieces = Number(data);
    areaCake = areaCake - pieces;
    if (areaCake <= 0) {
      let piecesNeed = Math.abs(areaCake);
      console.log(`No more cake left! You need ${piecesNeed} pieces more.`);
      break;
    }
    data = input.shift();
  }
  if (areaCake >= 0) {
    console.log(`${areaCake} pieces are left.`);
  }
}
Cake(["10", "10", "20", "20", "20", "20", "21"]);

//==============================================================
// упр. 5

function Money(input) {
  let change = +input.shift();
  change = Math.floor(change * 100);
  let counter = 0;

  while (change > 0) {
    //500
    if (change - 200 >= 0) {
      change = change - 200; //300
      counter++;
    } else if (change - 100 >= 0) {
      change = change - 100;
      counter++;
    } else if (change - 50 >= 0) {
      change = change - 50;
      counter++;
    } else if (change - 20 >= 0) {
      change = change - 20;
      counter++;
    } else if (change - 10 >= 0) {
      change = change - 10;
      counter++;
    } else if (change - 5 >= 0) {
      change = change - 5;
      counter++;
    } else if (change - 2 >= 0) {
      change = change - 2;
      counter++;
    } else if (change - 1 >= 0) {
      change = change - 1;
      counter++;
    }
  }
  console.log(counter);
}
Money(["2.73"]);

//=====================================================
// упр. 3

function Relax(input) {
  let neededMoney = +input.shift();
  let ownedMoney = +input.shift();

  let spendCounter = 0;
  let daysCounter = 0;

  while (ownedMoney <= neededMoney && spendCounter <= 5) {
    let command = input.shift();
    let money = +input.shift();

    if (command === "save") {
      daysCounter++;
      ownedMoney += money;
      spendCounter = 0;

      if (ownedMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
        break;
      }
    } else if (command === "spend") {
      spendCounter++;
      daysCounter++;
      ownedMoney -= money;

      if (ownedMoney <= 0) {
        ownedMoney = 0;
      }
    }
    if (spendCounter === 5) {
      console.log("You can't save the money.");
      console.log(`${daysCounter}`);
      break;
    }
  }
}
Relax([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);

//==================================================
// упр. 4

function Walking(input) {
  let steps = 0;

  while (steps < 10000) {
    let command = input.shift();
    if (command == "Going home") {
      steps += Number(input.shift());
      if (steps >= 10000) {
        console.log("Goal reached! Good job!");
      } else {
        let diff = 10000 - steps;
        console.log(`${diff} more steps to reach goal.`);
      }
      break;
    } else {
      steps += Number(command);
      if (steps >= 10000) {
        console.log("Goal reached! Good job!");
      }
    }
  }
}
Walking(["1500", "300", "2500", "3000", "Going home", "200"]);

//=============================================================
