// Programming Basics Online Exam - 9 and 10 May 2020

// function examSubmissions(input) {
//   let students = Number(input.shift());
//   let tasks = Number(input.shift());

//   let submissionsPerStudent = (tasks * 2.8).toFixed(1);
//   let submissions = students * Math.ceil(submissionsPerStudent);
//   let addedSubmissions = students * Math.floor(tasks / 3);

//   let total = submissions + addedSubmissions;
//   let memory = 5 * Math.ceil(total / 10);
//   console.log(`${memory} KB needed`);
//   console.log(`${total} submissions`);
// }
// examSubmissions(["11", "7"]);

// function examPoints(input) {
//   let task = Number(input.shift());
//   let points = Number(input.shift());
//   let course = input.shift();

//   let total = 0;

//   if (course === "Basics") {
//     if (task == 1) {
//       total += points * 0.08;
//     } else if (task == 2) {
//       total += points * 0.09;
//     } else if (task == 3) {
//       total += points * 0.09;
//     } else if (task == 4) {
//       total += points * 0.1;
//     }
//   } else if (course === "Fundamentals") {
//     if (task == 1) {
//       total += points * 0.11;
//     } else if (task == 2) {
//       total += points * 0.11;
//     } else if (task == 3) {
//       total += points * 0.12;
//     } else if (task == 4) {
//       total += points * 0.13;
//     }
//   } else if (course === "Advanced") {
//     if (task == 1) {
//       total += points * 0.14;
//     } else if (task == 2) {
//       total += points * 0.14;
//     } else if (task == 3) {
//       total += points * 0.15;
//     } else if (task == 4) {
//       total += points * 0.16;
//     }
//   }
//   if (course === "Basics" && task == 1) {
//     total -= total * 0.2;
//   } else if (course === "Advanced") {
//     total += total * 0.2;
//   }
//   console.log(`Total points: ${total.toFixed(2)}`);
// }
// examPoints(["1", "100", "Basics"]);

// function examCategories(input) {
//   let complexity = Number(input.shift());
//   let twirl = Number(input.shift());
//   let pages = Number(input.shift());

//   if (
//     complexity >= 80 &&
//     complexity <= 100 &&
//     twirl >= 80 &&
//     twirl <= 100 &&
//     pages >= 8 &&
//     pages <= 10
//   ) {
//     console.log("Legacy");
//   } else if (
//     complexity >= 80 &&
//     complexity <= 100 &&
//     twirl <= 10 &&
//     twirl > 0 &&
//     pages >= 1 &&
//     pages <= 10
//   ) {
//     console.log("Master");
//   } else if (
//     complexity >= 1 &&
//     complexity <= 100 &&
//     twirl >= 50 &&
//     twirl <= 100 &&
//     pages >= 2 &&
//     pages <= 10
//   ) {
//     console.log("Hard");
//   } else if (
//     complexity >= 1 &&
//     complexity <= 100 &&
//     twirl > 0 &&
//     twirl <= 100 &&
//     pages > 0 &&
//     pages <= 10
//   ) {
//     console.log("Regular");
//   } else if (
//     complexity <= 30 &&
//     complexity >= 1 &&
//     twirl > 0 &&
//     twirl <= 100 &&
//     pages <= 1 &&
//     pages > 0
//   ) {
//     console.log("Easy");
//   } else if (
//     complexity <= 10 &&
//     complexity > 0 &&
//     twirl > 0 &&
//     twirl <= 100 &&
//     pages > 0 &&
//     pages <= 10
//   ) {
//     console.log("Elementary");
//   } else {
//   }
// }
// examCategories(["80", "40", "3"]);

// function examRetention(input) {
//   let students = Number(input.shift());
//   let seasons = Number(input.shift());

//   for (let i = 1; i <= seasons; i++) {
//     let exam1 = Math.ceil(students * 0.9);
//     let exam2 = Math.ceil(exam1 * 0.9);
//     let ongoing = Math.ceil(exam2 * 0.8);
//     let added = Math.ceil(ongoing * 0.05);

//     if (i % 3 === 0) {
//       added += ongoing * 0.15;
//     }
//     students = added + ongoing;
//   }
//   console.log(`Students: ${Math.ceil(students.toFixed(0))}`);
// }
// examRetention(["100", "6"]);
// examRetention(["2000", "5"]);

function examPreparation(input) {
  let students = Number(input.shift());
  let tasks = Number(input.shift());
  let energy = Number(input.shift());

  let sumTask = 0;
  let questions = 2;

  while (true) {
    energy += 2 * tasks;
    students -= tasks;
    sumTask += tasks;
    energy -= 3 * (questions * students);
    questions += students;
    if (students > 10) {
      students += 1;
    }
    if (energy <= 0) {
      console.log(`The trainer is too tired!`);
      console.log(`Questions answered: ${questions}`);
      break;
    }
    if (students <= 10) {
      console.log(`The students are too few!`);
      console.log(`Problems solved: ${sumTask}`);
      break;
    }
  }
}
examPreparation(["20", "5", "500"]);
// examPreparation(["20", "1", "100"]);
