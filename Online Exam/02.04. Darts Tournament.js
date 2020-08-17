function dartsTournament(input) {
  let pointsStart = Number(input.shift());

  let count = 0;

  while (pointsStart > 0) {
    let sector = input.shift();
    count++;
    let currentPoints = Number(input.shift());

    if (sector == "number section") {
      pointsStart -= currentPoints;
    } else if (sector == "double ring") {
      pointsStart -= currentPoints * 2;
    } else if (sector == "triple ring") {
      pointsStart -= currentPoints * 3;
    } else if (sector == "bullseye") {
      console.log(
        `Congratulations! You won the game with a bullseye in ${count} moves!`
      );
      break;
    }

    if (pointsStart < 0) {
      console.log(
        `Sorry, you lost. Score difference: ${Math.abs(pointsStart)}.`
      );
      break;
    }
  }
  if (pointsStart == 0) {
    console.log(`Congratulations! You won the game in ${count} moves!`);
  }
}
