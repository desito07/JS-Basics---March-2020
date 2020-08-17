function cruiseGames(input) {
  let name = input.shift();
  let gamesCount = Number(input.shift());

  let volleyball = 0;
  let counterV = 0;
  let tennis = 0;
  let counterT = 0;
  let badminton = 0;
  let counterB = 0;
  let sum = 0;
  let sum1 = 0;

  for (let i = 0; i < gamesCount; i++) {
    let gameName = input.shift();
    let gamesPoints = Number(input.shift());

    if (gameName === "volleyball") {
      volleyball += gamesPoints + gamesPoints * 0.07;
      counterV++;
    } else if (gameName === "tennis") {
      tennis += gamesPoints + gamesPoints * 0.05;
      counterT++;
    } else if (gameName === "badminton") {
      badminton += gamesPoints + gamesPoints * 0.02;
      counterB++;
    }
  }
  let avrVolleyball = Math.floor(volleyball / counterV);
  let avrTennis = Math.floor(tennis / counterT);
  let avrBadminton = Math.floor(badminton / counterB);

  if (avrVolleyball >= 75 && avrTennis >= 75 && avrBadminton >= 75) {
    sum = volleyball + tennis + badminton;
    console.log(
      `Congratulations, ${name}! You won the cruise games with ${Math.floor(
        sum
      )} points.`
    );
  } else {
    sum1 = volleyball + tennis + badminton;
    console.log(
      `Sorry, ${name}, you lost. Your points are only ${Math.floor(sum1)}.`
    );
  }
}
