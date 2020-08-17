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
