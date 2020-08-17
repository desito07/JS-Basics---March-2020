function grades(input) {
  let studentsCount = Number(input.shift());
  let gradesFail = 0;
  let gradesB4 = 0;
  let gradesB5 = 0;
  let gradesTop = 0;
  let sum = 0;

  for (let i = 0; i < studentsCount; i++) {
    let Currentgrade = Number(input.shift());
    sum += Currentgrade;
    if (Currentgrade >= 2 && Currentgrade < 3) {
      gradesFail++;
    } else if (Currentgrade >= 3 && Currentgrade < 4) {
      gradesB4++;
    } else if (Currentgrade >= 4 && Currentgrade < 5) {
      gradesB5++;
    } else {
      gradesTop++;
    }
  }
  let pTop = (gradesTop / studentsCount) * 100;
  let pB4 = (gradesB4 / studentsCount) * 100;
  let pB5 = (gradesB5 / studentsCount) * 100;
  let pFail = (gradesFail / studentsCount) * 100;
  let avGrade = sum / studentsCount;

  console.log(`Top students: ${pTop.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${pB5.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${pB4.toFixed(2)}%`);
  console.log(`Fail: ${pFail.toFixed(2)}%`);
  console.log(`Average: ${avGrade.toFixed(2)}`);
}
grades([
  "10",
  "3",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6",
  "4.5",
  "2.44",
  "5",
  "",
]);
grades(["6", "2", "3", "4", "5", "6", "2.2", ""]);

