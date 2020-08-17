//===========================================  Цикли - лекция 1 лаб упражнения
/*
преговор

function solve() {
  let a = 114;
  switch (a) {
    case 5:
      a = a + 2;
    case 6:
      a = a + 1;
      break;
    default:
      a = a + 2;
  }
  console.log(a);
}
solve();

// && =  или, ако едно е фолс, всичко останало е фолс
// || = или чака първото тру ;

function solve() {
  let result = false && (true || false);
  console.log(result);
}
solve();

//====================================================

//пре-инкрементиране ++а
//пост-инкрементиране а++

//извършва се само с числа

//пре-декрементация --а
//пост-декрементация а--

/*let a = 1;
console.log(++a); //2
console.log(a); //2

let a = 1;
console.log(a++); //1
console.log(a); //2

let a = 1;
console.log(--a); //0
console.log(a); //0

let a = 1;
console.log(a--); //1
console.log(a); //0


//======================================================

function solve() {
  let a = 5;
  ++a;
  console.log(a);
}
solve();

//====================================================
function solve() {
  let a = 5;
  while (a <= 10) {
    console.log("a = " + a);
    a++;
  }
}
solve();
*/
//====================================================
// упр. 1

function solve(input) {
  let num = +input.shift;

  while (num >= 1 && num <= 100) {
    num = +input.shift();
    console.log(num);
  }
}
solve(["4", "122", "56"]);

//====================================================
// упр 2.

function solve(input) {
  let username = input.shift();
  let userPassword = input.shift();
  let pass = input.shift();

  while (userPassword !== pass) {
    pass = input.shift();
  }
  console.log(`Welcome ${username}!`);
}
solve(["Nakov", "1234", "nakov12", "12", "1234"]);

//====================================================
// упр. 4

function numbersInRange(input) {
  let n = +input.shift(); //12
  let k = 1; //1

  while (k <= n) {
    //true
    console.log(k);
    k = k * 2 + 1;
  }
}
numbersInRange(["12"]);

//=====================================================
// упр. 5

function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let balance = 0.0;

  while (counter < n) {
    let amount = +input.shift();
    if (amount < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    counter++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
solve(["5", "120", "45.55", "-150"]);
//================================================
// упр. 6

function solve(input) {
  let n = +input.shift();
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (count < n) {
    let num = +input.shift();
    count++;
    if (num > max) {
      max = num;
    }
  }
  console.log(max);
}
solve(["2", "-1", "-2"]);

//=====================================================
//упр. 7

function solve(input) {
  let n = +input.shift();
  let count = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while (count < n) {
    let num = +input.shift();
    count++;
    if (num < min) {
      min = num;
    }
  }
  console.log(min);
}
solve(["2", "-1", "-2"]);

//================================================
//упр. 8

function Graduation(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;

  while (counter <= 12) {
    let grade = +input.shift();
    if (grade >= 4.0) {
      sum += grade;
      counter++;
    }
  }
  let average = sum / 12;
  console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}
Graduation([
  "Ani",
  "5",
  "5.32",
  "6",
  "5.43",
  "5",
  "6",
  "5.5",
  "4.55",
  "5",
  "6",
  "5.56",
  "6",
]);

//======================================================
// упр. 9

function Graduation(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;
  let excluded = 0;
  let isExcluded = false;

  while (counter <= 12) {
    let grade = +input.shift();
    if (grade < 4.0) {
      excluded++;
    }
    if (grade >= 4.0) {
      sum += grade;
      counter++;
    }
    if (excluded >= 2) {
      isExcluded = true;
      break;
    }
  }
  if (isExcluded == false) {
    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${counter} grade`);
  }
}
Graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

//===============================================
// упр. 10

function Moving(input) {
  let width = +input.shift();
  let length = +input.shift();
  let hight = +input.shift();

  let freeSpace = width * length * hight;
  let totalSpace = 0;
  let spaceDiff = 0;

  let command = input.shift();
  while (command != "Done") {
    let cartoonSpace = Number(command);
    totalSpace += cartoonSpace;
    spaceDiff = Math.abs(totalSpace - freeSpace);
    if (totalSpace >= freeSpace) {
      console.log(
        `No more free space! You need ${spaceDiff} Cubic meters more.`
      );
      break;
    }
    command = input.shift();
  }
  if (command == "Done") {
    console.log(`${spaceDiff} Cubic meters left.`);
  }
}
Moving(["10", "1", "2", "4", "6", "Done"]);

//=======================================================
