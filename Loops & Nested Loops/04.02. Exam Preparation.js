function exam(input) {
  let numberOfNegativeGrade = Number(input.shift());

  let command = input.shift();

  let countOfNegativeGrade = 0;
  let lastProblem = "";
  let countOfProblems = 0;
  let resolveProblemsCount = 0;
  let isNeedBreak = false;
  let totalGrade = 0;

  while (command !== "Enough") {
    let taskName = command;
    let grade = Number(input.shift());
    lastProblem = taskName;
    countOfProblems++;

    if (grade <= 4.0) {
      countOfNegativeGrade++;
    }
    resolveProblemsCount++;
    totalGrade += grade;

    if (countOfNegativeGrade == numberOfNegativeGrade) {
      isNeedBreak = true;
      break;
    }
    command = input.shift();
  }

  if (isNeedBreak) {
    console.log(`You need a break, ${numberOfNegativeGrade} poor grades.`);
  } else {
    console.log(
      `Average score: ${(totalGrade / resolveProblemsCount).toFixed(2)}`
    );
    console.log(`Number of problems: ${resolveProblemsCount}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
exam([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
  "",
]);
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4", ""]);

